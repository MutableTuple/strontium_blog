import React from "react";
import Head from "next/head";
import UpvoteBtn from "./UpvoteBtn";

// Schema.org Article structured data
const generateArticleSchema = (blog) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.blog_title,
  image: blog.image,
  datePublished: blog.created_at,
  author: {
    "@type": "Person",
    name: blog.owner.name || "Anonymous",
  },
  articleBody: blog.blog_content,
  keywords: blog.blog_keywords || "",
});

const Markdown = ({ text }) => {
  const renderMarkdown = (content) => {
    const lines = content.split("\n");
    const result = [];
    let inList = false;
    let listItems = [];

    const processText = (text) => {
      return text
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/`(.+?)`/g, "<code>$1</code>");
    };

    lines.forEach((line, index) => {
      // Handle headings with proper heading hierarchy for SEO
      if (line.startsWith("# ")) {
        result.push(
          <h1
            key={index}
            className="text-3xl font-bold my-6"
            id={`heading-${index}`}
          >
            {processText(line.slice(2))}
          </h1>
        );
        return;
      }
      if (line.startsWith("## ")) {
        result.push(
          <h2
            key={index}
            className="text-2xl font-semibold my-4"
            id={`heading-${index}`}
          >
            {processText(line.slice(3))}
          </h2>
        );
        return;
      }
      if (line.startsWith("### ")) {
        result.push(
          <h3
            key={index}
            className="text-xl font-medium my-3"
            id={`heading-${index}`}
          >
            {processText(line.slice(4))}
          </h3>
        );
        return;
      }

      // Enhanced list handling with semantic markup
      if (line.startsWith("- ")) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(
          <li key={`${index}-li`} className="my-1">
            {processText(line.slice(2))}
          </li>
        );
      } else if (inList) {
        result.push(
          <ul key={`${index}-ul`} className="list-disc ml-6 my-2" role="list">
            {listItems}
          </ul>
        );
        inList = false;
        listItems = [];
      }

      // Enhanced code blocks with language support
      if (line.startsWith("```")) {
        const language = line.slice(3).trim();
        result.push(
          <pre key={index} className="bg-gray-100 p-4 my-4 overflow-x-auto">
            <code className={`language-${language}`}>{line.slice(3)}</code>
          </pre>
        );
        return;
      }

      // Enhanced image handling with lazy loading and proper alt text
      if (line.match(/!\[(.*?)\]\((.*?)\)/)) {
        const [, alt, src] = line.match(/!\[(.*?)\]\((.*?)\)/);
        result.push(
          <img
            key={index}
            src={src}
            alt={alt}
            loading="lazy"
            className="max-w-full h-auto my-4"
            width={800}
            height={600}
          />
        );
        return;
      }

      // Enhanced paragraph handling with proper semantic markup
      if (line.trim() && !inList) {
        result.push(
          <p key={index} className="my-2">
            <span dangerouslySetInnerHTML={{ __html: processText(line) }} />
          </p>
        );
      }
    });

    if (inList && listItems.length > 0) {
      result.push(
        <ul key="final-list" className="list-disc ml-6 my-2" role="list">
          {listItems}
        </ul>
      );
    }

    return result;
  };

  return <div className="prose max-w-none">{renderMarkdown(text)}</div>;
};

export default function BlogData({ requested_blog }) {
  // Generate a meta description from the first few sentences of the blog content
  const metaDescription = requested_blog.blog_content
    .split(".")[0] // Get first sentence
    .slice(0, 160) // Limit to 160 characters
    .trim();

  // Primary keywords for SEO
  const primaryKeywords = requested_blog.blog_keywords
    ? requested_blog.blog_keywords
    : "";

  return (
    <>
      <Head>
        <title>{requested_blog.blog_title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content={requested_blog.author || "Anonymous"} />
        <meta name="keywords" content={primaryKeywords} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={requested_blog.blog_title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={requested_blog.image} />
        <meta property="og:type" content="article" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={requested_blog.blog_title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={requested_blog.image} />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleSchema(requested_blog)),
          }}
        />
      </Head>

      <article
        className="sm:max-w-4xl max-w-full mx-auto"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <h1 className="md:text-4xl text-2xl font-bold my-6" itemProp="headline">
          {requested_blog.blog_title}
        </h1>
        <figure>
          <img
            src={requested_blog.image}
            alt={requested_blog.blog_title}
            className="w-full h-auto my-6"
            loading="lazy"
            width={1200}
            height={630}
            itemProp="image"
          />
          <figcaption className="text-xs text-stone-400 italic font-thin">
            [ source: {requested_blog.image} ]
          </figcaption>
        </figure>
        <div itemProp="articleBody">
          <Markdown text={requested_blog.blog_content} />
        </div>
        <div className="border flex flex-col max-w-fit p-2 gap-1 items-center">
          <UpvoteBtn
            table="blogs"
            id={requested_blog.id}
            initialUpvotes={requested_blog.likes}
          />
        </div>
        {requested_blog.owner && (
          <footer className="mt-8 text-sm text-gray-600 border-b">
            <p itemProp="author" className="font-semibold">
              Written by: {requested_blog?.users?.name || "author"}
            </p>
            {requested_blog.created_at && (
              <time
                itemProp="datePublished"
                dateTime={requested_blog.created_at}
              >
                Published on:{" "}
                {new Date(requested_blog.created_at).toLocaleDateString()}
              </time>
            )}
          </footer>
        )}
        {/* {requested_blog.blog_keywords && (
          <div>
            <h1 className="mt-4">Keywords:</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {requested_blog.blog_keywords
                .split("\n")
                .map((keyword, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded shadow-sm">
                    {keyword}
                  </li>
                ))}
            </ul>
          </div>
        )} */}
      </article>
    </>
  );
}
