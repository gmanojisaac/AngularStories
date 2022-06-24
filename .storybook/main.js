module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"

  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "previewHead": (head) => (`
    ${head}
    <style>
@import 'prismjs/themes/prism-dark.css';
@import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
@import 'prismjs/plugins/toolbar/prism-toolbar.css';
@import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
body {
  background: #f5f5f5;
  color: #272822;
  font-size: 15px;
  padding: 8px 16px;
}

h1 a {
  text-decoration: none;
}

h1 a:hover {
  opacity: 0.87;
  text-decoration: underline;
}

blockquote {
  border-left: 3px solid rgba(0,0,0,0.21);
  padding-left: 12px;
  color: rgba(0,0,0,0.54);
}

html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
    </style>
  `),
  "previewBody": (body) => (`
    <style>


    </style>
    ${body}
  `),
}