import React from "react";

const Markdown = ({ text }) => {
  const renderMarkdown = (content) => {
    const lines = content.split("\n");
    const result = [];
    let inList = false;
    let listItems = [];

    const processText = (text) => {
      // Process bold and italic together
      return text
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/`(.+?)`/g, "<code>$1</code>");
    };

    lines.forEach((line, index) => {
      // Handle headings
      if (line.startsWith("# ")) {
        result.push(
          <h1 key={index} className="text-3xl font-bold my-6">
            {processText(line.slice(2))}
          </h1>
        );
        return;
      }
      if (line.startsWith("## ")) {
        result.push(
          <h2 key={index} className="text-2xl font-semibold my-4">
            {processText(line.slice(3))}
          </h2>
        );
        return;
      }
      if (line.startsWith("### ")) {
        result.push(
          <h3 key={index} className="text-xl font-medium my-3">
            {processText(line.slice(4))}
          </h3>
        );
        return;
      }

      // Handle lists
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
          <ul key={`${index}-ul`} className="list-disc ml-6 my-2">
            {listItems}
          </ul>
        );
        inList = false;
        listItems = [];
      }

      // Handle code blocks
      if (line.startsWith("```")) {
        result.push(
          <pre key={index} className="bg-gray-100 p-4 rounded-lg my-4">
            <code>{line.slice(3)}</code>
          </pre>
        );
        return;
      }

      // Handle images with proper alt text
      if (line.match(/!\[(.*?)\]\((.*?)\)/)) {
        const [, alt, src] = line.match(/!\[(.*?)\]\((.*?)\)/);
        result.push(
          <img
            key={index}
            src={src}
            alt={alt}
            className="max-w-full h-auto my-4 rounded-lg"
          />
        );
        return;
      }

      // Handle paragraphs
      if (line.trim() && !inList) {
        result.push(
          <p key={index} className="my-2">
            <span dangerouslySetInnerHTML={{ __html: processText(line) }} />
          </p>
        );
      }
    });

    // Handle any remaining list items
    if (inList && listItems.length > 0) {
      result.push(
        <ul key="final-list" className="list-disc ml-6 my-2">
          {listItems}
        </ul>
      );
    }

    return result;
  };

  return <div className="prose max-w-none">{renderMarkdown(text)}</div>;
};

/*
# Main title (H1)
## Section title (H2) 
### Subsection (H3)

- Bullet point
- Another point

**Bold text**
*Italic text*

![Alt text](/path/to/image.jpg)

Regular paragraphs are separated by blank lines

`inline code`

```code block```
*/

export default function BlogData({ requested_blog }) {
  return (
    <article className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold my-6">{requested_blog.blog_title}</h1>
      <img
        src={requested_blog.image}
        alt={requested_blog.blog_title}
        className="w-full h-auto rounded-lg my-6"
      />
      <div>
        <Markdown text={requested_blog.blog_content} />
      </div>
    </article>
  );
}
