import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    /* Grey - Light Mode */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-accent: #4338ca; /* Indigo */
    --backdrop-color: rgba(255, 255, 255, 0.1);
  }

  &.dark-mode {
    /* Grey - Dark Mode */
    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    --color-accent: #3730a3; /* Dark Indigo */
    --backdrop-color: rgba(0, 0, 0, 0.3);
  }

  &.cream-mode {
    /* Cream Theme */
    --color-grey-0: #fbf6e9; /* Vanilla */
    --color-grey-50: #f8f4ec; /* Light Cream */
    --color-grey-100: #ede3d1; /* Beige */
    --color-grey-200: #d9cdb9; /* Sand */
    --color-grey-300: #b8a897; /* Taupe */
    --color-grey-400: #a69885; /* Brownish Grey */
    --color-grey-500: #847969; /* Deep Taupe */
    --color-grey-600: #635f54; /* Dark Taupe */
    --color-grey-700: #4d4a43; /* Almost Black */
    --color-grey-800: #2e2c28; /* Dark Brown */
    --color-grey-900: #1b1a17; /* Espresso */

    --color-accent: #e2b08c; /* Peachy Accent */
    --backdrop-color: rgba(255, 248, 230, 0.3);
  }

  &.pink-mode {
    /* Pink Theme */
    --color-grey-0: #fef5f7; /* Light Blush */
    --color-grey-50: #fde7eb; /* Pale Pink */
    --color-grey-100: #fcd0d8; /* Rose Pink */
    --color-grey-200: #fab8c2; /* Soft Pink */
    --color-grey-300: #f598a6; /* Baby Pink */
    --color-grey-400: #eb7b91; /* Candy Pink */
    --color-grey-500: #d65b75; /* Deep Pink */
    --color-grey-600: #a9445b; /* Rosewood */
    --color-grey-700: #7c3545; /* Crimson */
    --color-grey-800: #5a2a35; /* Dark Rosewood */
    --color-grey-900: #401e26; /* Burgundy */

    --color-accent: #ff85a2; /* Hot Pink Accent */
    --backdrop-color: rgba(255, 230, 240, 0.3);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Smooth Transition */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  color: var(--color-grey-700);
  background-color: var(--color-grey-0);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  transition: background-color 0.3s, color 0.3s;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: -1px;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
