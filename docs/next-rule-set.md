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

<details><summary>🔴 <a href="https://nextjs.org/docs/messages/no-html-link-for-pages">@next/next/no-html-link-for-pages</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://nextjs.org/docs/messages/no-sync-scripts">@next/next/no-sync-scripts</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/google-font-display">@next/next/google-font-display</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/google-font-preconnect">@next/next/google-font-preconnect</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/next-script-for-ga">@next/next/next-script-for-ga</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-before-interactive-script-outside-document">@next/next/no-before-interactive-script-outside-document</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-css-tags">@next/next/no-css-tags</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-head-element">@next/next/no-head-element</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-img-element">@next/next/no-img-element</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-page-custom-font">@next/next/no-page-custom-font</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-styled-jsx-in-document">@next/next/no-styled-jsx-in-document</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-title-in-document-head">@next/next/no-title-in-document-head</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-typos">@next/next/no-typos</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://nextjs.org/docs/messages/no-unwanted-polyfillio">@next/next/no-unwanted-polyfillio</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🔴 <a href="https://nextjs.org/docs/messages/inline-script-id">@next/next/inline-script-id</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://nextjs.org/docs/messages/no-assign-module-variable">@next/next/no-assign-module-variable</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://nextjs.org/docs/messages/no-document-import-in-page">@next/next/no-document-import-in-page</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://nextjs.org/docs/messages/no-duplicate-head">@next/next/no-duplicate-head</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://nextjs.org/docs/messages/no-head-import-in-document">@next/next/no-head-import-in-document</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://nextjs.org/docs/messages/no-script-component-in-head">@next/next/no-script-component-in-head</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">jsx-a11y/anchor-is-valid</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md">jsx-a11y/alt-text</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md">react/no-unknown-property</a></summary><br/>

```js
["error", { ignore: ["css", "jsx", "global"] }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md">react/react-in-jsx-scope</a></summary><br/>

```js
["off"];
```

</details>
<!-- END rules -->
