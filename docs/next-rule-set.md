<div align="center"><img src="../media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

<h2 align="center">Next rule set</h2>

Here are the ESLint rules applied for [Next](https://nextjs.org/). These rules are used by the `peppy/next` configuration only.

These rules use the [@next/eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint#eslint-plugin), [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) plugins already included in Peppy.

<!-- START rules -->
<div align="center">

### Rules stats

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 24    | 11       | 12         | 1           |

</div>

#### 🔴 [`@next/next/no-html-link-for-pages`](https://nextjs.org/docs/messages/no-html-link-for-pages)

```js
["error"];
```

#### 🔴 [`@next/next/no-sync-scripts`](https://nextjs.org/docs/messages/no-sync-scripts)

```js
["error"];
```

#### 🟠 [`@next/next/google-font-display`](https://nextjs.org/docs/messages/google-font-display)

```js
["warn"];
```

#### 🟠 [`@next/next/google-font-preconnect`](https://nextjs.org/docs/messages/google-font-preconnect)

```js
["warn"];
```

#### 🟠 [`@next/next/next-script-for-ga`](https://nextjs.org/docs/messages/next-script-for-ga)

```js
["warn"];
```

#### 🟠 [`@next/next/no-before-interactive-script-outside-document`](https://nextjs.org/docs/messages/no-before-interactive-script-outside-document)

```js
["warn"];
```

#### 🟠 [`@next/next/no-css-tags`](https://nextjs.org/docs/messages/no-css-tags)

```js
["warn"];
```

#### 🟠 [`@next/next/no-head-element`](https://nextjs.org/docs/messages/no-head-element)

```js
["warn"];
```

#### 🟠 [`@next/next/no-img-element`](https://nextjs.org/docs/messages/no-img-element)

```js
["warn"];
```

#### 🟠 [`@next/next/no-page-custom-font`](https://nextjs.org/docs/messages/no-page-custom-font)

```js
["warn"];
```

#### 🟠 [`@next/next/no-styled-jsx-in-document`](https://nextjs.org/docs/messages/no-styled-jsx-in-document)

```js
["warn"];
```

#### 🟠 [`@next/next/no-title-in-document-head`](https://nextjs.org/docs/messages/no-title-in-document-head)

```js
["warn"];
```

#### 🟠 [`@next/next/no-typos`](https://nextjs.org/docs/messages/no-typos)

```js
["warn"];
```

#### 🟠 [`@next/next/no-unwanted-polyfillio`](https://nextjs.org/docs/messages/no-unwanted-polyfillio)

```js
["warn"];
```

#### 🔴 [`@next/next/inline-script-id`](https://nextjs.org/docs/messages/inline-script-id)

```js
["error"];
```

#### 🔴 [`@next/next/no-assign-module-variable`](https://nextjs.org/docs/messages/no-assign-module-variable)

```js
["error"];
```

#### 🔴 [`@next/next/no-document-import-in-page`](https://nextjs.org/docs/messages/no-document-import-in-page)

```js
["error"];
```

#### 🔴 [`@next/next/no-duplicate-head`](https://nextjs.org/docs/messages/no-duplicate-head)

```js
["error"];
```

#### 🔴 [`@next/next/no-head-import-in-document`](https://nextjs.org/docs/messages/no-head-import-in-document)

```js
["error"];
```

#### 🔴 [`@next/next/no-script-component-in-head`](https://nextjs.org/docs/messages/no-script-component-in-head)

```js
["error"];
```

#### 🔴 [`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)

```js
[
  "error",
  {
    components: ["Link"],
    specialLink: ["hrefLeft", "hrefRight"],
    aspects: ["invalidHref", "preferButton"],
  },
];
```

#### 🔴 [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

```js
[
  "error",
  {
    area: [],
    elements: ["img", "object", "area", 'input[type="image"]'],
    img: ["Image"],
    'input[type="image"]': [],
    object: [],
  },
];
```

#### 🔴 [`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

```js
["error", { ignore: ["css", "jsx", "global"] }];
```

#### 🔵 [`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

```js
["off"];
```

<!-- END rules -->
