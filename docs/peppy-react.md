<div align="center"><img src="../media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>
<h2 align="center">

`peppy/react`

</h2>

Here is the list of rules applied in the `peppy/react` configuration.

These rules are applied to all files. However, TypeScript specific rules override some of these rules for `.ts` and `.tsx` files. The list of these rules is available in the [TypeScript](#typescript) section of this file.

<!-- START rules -->
<div align="center">

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 288   | 87       | 5          | 196         |

</div>

<h4>🔵 <a href="https://eslint.org/docs/rules/lines-around-comment">lines-around-comment</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/max-len">max-len</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-confusing-arrow">no-confusing-arrow</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-mixed-operators">no-mixed-operators</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-tabs">no-tabs</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-unexpected-multiline">no-unexpected-multiline</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/quotes">quotes</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md">@typescript-eslint/quotes</a></h4>
<h4>🔵 <a href="https://github.com/babel/eslint-plugin-babel">babel/quotes</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/html-self-closing">vue/html-self-closing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/max-len">vue/max-len</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/array-bracket-newline">array-bracket-newline</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/array-bracket-spacing">array-bracket-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/array-element-newline">array-element-newline</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/arrow-parens">arrow-parens</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/arrow-spacing">arrow-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/block-spacing">block-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/brace-style">brace-style</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/comma-dangle">comma-dangle</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/comma-spacing">comma-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/comma-style">comma-style</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/computed-property-spacing">computed-property-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/dot-location">dot-location</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/eol-last">eol-last</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/func-call-spacing">func-call-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/function-call-argument-newline">function-call-argument-newline</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/function-paren-newline">function-paren-newline</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/generator-star">generator-star</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/generator-star-spacing">generator-star-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/implicit-arrow-linebreak">implicit-arrow-linebreak</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/indent">indent</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/jsx-quotes">jsx-quotes</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/key-spacing">key-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/keyword-spacing">keyword-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/linebreak-style">linebreak-style</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/multiline-ternary">multiline-ternary</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/newline-per-chained-call">newline-per-chained-call</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/new-parens">new-parens</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-arrow-condition">no-arrow-condition</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-comma-dangle">no-comma-dangle</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-extra-parens">no-extra-parens</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-extra-semi">no-extra-semi</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-floating-decimal">no-floating-decimal</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-mixed-spaces-and-tabs">no-mixed-spaces-and-tabs</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-multi-spaces">no-multi-spaces</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-multiple-empty-lines">no-multiple-empty-lines</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-reserved-keys">no-reserved-keys</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-space-before-semi">no-space-before-semi</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-trailing-spaces">no-trailing-spaces</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-whitespace-before-property">no-whitespace-before-property</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-wrap-func">no-wrap-func</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/nonblock-statement-body-position">nonblock-statement-body-position</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/object-curly-newline">object-curly-newline</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/object-curly-spacing">object-curly-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/object-property-newline">object-property-newline</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/one-var-declaration-per-line">one-var-declaration-per-line</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/operator-linebreak">operator-linebreak</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/padded-blocks">padded-blocks</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/quote-props">quote-props</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/rest-spread-spacing">rest-spread-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/semi">semi</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/semi-spacing">semi-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/semi-style">semi-style</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-after-function-name">space-after-function-name</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-after-keywords">space-after-keywords</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-before-blocks">space-before-blocks</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-before-function-paren">space-before-function-paren</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-before-function-parentheses">space-before-function-parentheses</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-before-keywords">space-before-keywords</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-in-brackets">space-in-brackets</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-in-parens">space-in-parens</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-infix-ops">space-infix-ops</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-return-throw-case">space-return-throw-case</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-unary-ops">space-unary-ops</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/space-unary-word-ops">space-unary-word-ops</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/switch-colon-spacing">switch-colon-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/template-curly-spacing">template-curly-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/template-tag-spacing">template-tag-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/unicode-bom">unicode-bom</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/wrap-iife">wrap-iife</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/wrap-regex">wrap-regex</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/yield-star-spacing">yield-star-spacing</a></h4>
<h4>🔵 <a href="https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin">@babel/object-curly-spacing</a></h4>
<h4>🔵 <a href="https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin">@babel/semi</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md">@typescript-eslint/brace-style</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md">@typescript-eslint/comma-dangle</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md">@typescript-eslint/comma-spacing</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md">@typescript-eslint/func-call-spacing</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md">@typescript-eslint/indent</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md">@typescript-eslint/keyword-spacing</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md">@typescript-eslint/member-delimiter-style</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md">@typescript-eslint/no-extra-parens</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md">@typescript-eslint/no-extra-semi</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md">@typescript-eslint/object-curly-spacing</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md">@typescript-eslint/semi</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-blocks.md">@typescript-eslint/space-before-blocks</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md">@typescript-eslint/space-before-function-paren</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md">@typescript-eslint/space-infix-ops</a></h4>
<h4>🔵 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md">@typescript-eslint/type-annotation-spacing</a></h4>
<h4>🔵 <a href="https://github.com/babel/eslint-plugin-babel">babel/object-curly-spacing</a></h4>
<h4>🔵 <a href="https://github.com/babel/eslint-plugin-babel">babel/semi</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-boolean-style">flowtype/boolean-style</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-delimiter-dangle">flowtype/delimiter-dangle</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-generic-spacing">flowtype/generic-spacing</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-object-type-curly-spacing">flowtype/object-type-curly-spacing</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-object-type-delimiter">flowtype/object-type-delimiter</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-quotes">flowtype/quotes</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-semi">flowtype/semi</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-after-type-colon">flowtype/space-after-type-colon</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-before-generic-bracket">flowtype/space-before-generic-bracket</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-before-type-colon">flowtype/space-before-type-colon</a></h4>
<h4>🔵 <a href="https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-union-intersection-spacing">flowtype/union-intersection-spacing</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md">react/jsx-child-element-spacing</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md">react/jsx-closing-bracket-location</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md">react/jsx-closing-tag-location</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md">react/jsx-curly-newline</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md">react/jsx-curly-spacing</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md">react/jsx-equals-spacing</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md">react/jsx-first-prop-new-line</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md">react/jsx-indent</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md">react/jsx-indent-props</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md">react/jsx-max-props-per-line</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md">react/jsx-newline</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md">react/jsx-one-expression-per-line</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md">react/jsx-props-no-multi-spaces</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md">react/jsx-tag-spacing</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md">react/jsx-wrap-multilines</a></h4>
<h4>🔵 <a href="https://github.com/standard/eslint-plugin-standard">standard/array-bracket-even-spacing</a></h4>
<h4>🔵 <a href="https://github.com/standard/eslint-plugin-standard">standard/computed-property-even-spacing</a></h4>
<h4>🔵 <a href="https://github.com/standard/eslint-plugin-standard">standard/object-curly-even-spacing</a></h4>
<h4>🔵 <a href="https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md">unicorn/empty-brace-spaces</a></h4>
<h4>🔵 <a href="https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md">unicorn/no-nested-ternary</a></h4>
<h4>🔵 <a href="https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md">unicorn/number-literal-case</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/array-bracket-newline">vue/array-bracket-newline</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/array-bracket-spacing">vue/array-bracket-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/arrow-spacing">vue/arrow-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/block-spacing">vue/block-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/block-tag-newline">vue/block-tag-newline</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/brace-style">vue/brace-style</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/comma-dangle">vue/comma-dangle</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/comma-spacing">vue/comma-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/comma-style">vue/comma-style</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/dot-location">vue/dot-location</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/func-call-spacing">vue/func-call-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/html-closing-bracket-newline">vue/html-closing-bracket-newline</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/html-closing-bracket-spacing">vue/html-closing-bracket-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/html-end-tags">vue/html-end-tags</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/html-indent">vue/html-indent</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/html-quotes">vue/html-quotes</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/key-spacing">vue/key-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/keyword-spacing">vue/keyword-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/max-attributes-per-line">vue/max-attributes-per-line</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/multiline-html-element-content-newline">vue/multiline-html-element-content-newline</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/mustache-interpolation-spacing">vue/mustache-interpolation-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/no-extra-parens">vue/no-extra-parens</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/no-multi-spaces">vue/no-multi-spaces</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute">vue/no-spaces-around-equal-signs-in-attribute</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/object-curly-newline">vue/object-curly-newline</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/object-curly-spacing">vue/object-curly-spacing</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/object-property-newline">vue/object-property-newline</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/operator-linebreak">vue/operator-linebreak</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/quote-props">vue/quote-props</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/script-indent">vue/script-indent</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/singleline-html-element-content-newline">vue/singleline-html-element-content-newline</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/space-in-parens">vue/space-in-parens</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/space-infix-ops">vue/space-infix-ops</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/space-unary-ops">vue/space-unary-ops</a></h4>
<h4>🔵 <a href="https://eslint.vuejs.org/rules/template-curly-spacing">vue/template-curly-spacing</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/indent-legacy">indent-legacy</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-spaced-func">no-spaced-func</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md">react/jsx-space-before-closing</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/class-methods-use-this">class-methods-use-this</a></h4>

```json
[
  {
    "enforceForClassFields": true,
    "exceptMethods": [
      "render",
      "getInitialState",
      "getDefaultProps",
      "getChildContext",
      "componentWillMount",
      "UNSAFE_componentWillMount",
      "componentDidMount",
      "componentWillReceiveProps",
      "UNSAFE_componentWillReceiveProps",
      "shouldComponentUpdate",
      "componentWillUpdate",
      "UNSAFE_componentWillUpdate",
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidCatch",
      "getSnapshotBeforeUpdate"
    ]
  }
]
```

<h4>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md">jsx-a11y/accessible-emoji</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md">jsx-a11y/alt-text</a></h4>

```json
[
  {
    "area": [],
    "elements": ["img", "object", "area", "input[type=\"image\"]"],
    "img": [],
    "input[type=\"image\"]": [],
    "object": []
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md">jsx-a11y/anchor-has-content</a></h4>

```json
[{ "components": [] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">jsx-a11y/anchor-is-valid</a></h4>

```json
[
  {
    "aspects": ["noHref", "invalidHref", "preferButton"],
    "components": ["Link"],
    "specialLink": ["to"]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md">jsx-a11y/aria-activedescendant-has-tabindex</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md">jsx-a11y/aria-props</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md">jsx-a11y/aria-proptypes</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md">jsx-a11y/aria-role</a></h4>

```json
[{ "ignoreNonDOM": false }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md">jsx-a11y/aria-unsupported-elements</a></h4>
<h4>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md">jsx-a11y/autocomplete-valid</a></h4>

```json
[{ "inputComponents": [] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md">jsx-a11y/click-events-have-key-events</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md">jsx-a11y/control-has-associated-label</a></h4>

```json
[
  {
    "controlComponents": [],
    "depth": 5,
    "ignoreElements": [
      "audio",
      "canvas",
      "embed",
      "input",
      "textarea",
      "tr",
      "video"
    ],
    "ignoreRoles": [
      "grid",
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "row",
      "tablist",
      "toolbar",
      "tree",
      "treegrid"
    ],
    "labelAttributes": ["label"]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md">jsx-a11y/heading-has-content</a></h4>

```json
[{ "components": [""] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md">jsx-a11y/html-has-lang</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md">jsx-a11y/iframe-has-title</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md">jsx-a11y/img-redundant-alt</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md">jsx-a11y/interactive-supports-focus</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md">jsx-a11y/label-has-associated-control</a></h4>

```json
[
  {
    "assert": "both",
    "controlComponents": [],
    "depth": 25,
    "labelAttributes": [],
    "labelComponents": []
  }
]
```

<h4>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md">jsx-a11y/label-has-for</a></h4>

```json
[
  {
    "allowChildren": false,
    "components": [],
    "required": { "every": ["nesting", "id"] }
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md">jsx-a11y/lang</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md">jsx-a11y/media-has-caption</a></h4>

```json
[{ "audio": [], "track": [], "video": [] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md">jsx-a11y/mouse-events-have-key-events</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md">jsx-a11y/no-access-key</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md">jsx-a11y/no-autofocus</a></h4>

```json
[{ "ignoreNonDOM": true }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md">jsx-a11y/no-distracting-elements</a></h4>

```json
[{ "elements": ["marquee", "blink"] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md">jsx-a11y/no-interactive-element-to-noninteractive-role</a></h4>

```json
[{ "tr": ["none", "presentation"] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md">jsx-a11y/no-noninteractive-element-interactions</a></h4>

```json
[
  {
    "handlers": [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md">jsx-a11y/no-noninteractive-element-to-interactive-role</a></h4>

```json
[
  {
    "li": ["menuitem", "option", "row", "tab", "treeitem"],
    "ol": [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid"
    ],
    "table": ["grid"],
    "td": ["gridcell"],
    "ul": [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid"
    ]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md">jsx-a11y/no-noninteractive-tabindex</a></h4>

```json
[{ "roles": ["tabpanel"], "tags": [] }]
```

<h4>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md">jsx-a11y/no-onchange</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md">jsx-a11y/no-redundant-roles</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md">jsx-a11y/no-static-element-interactions</a></h4>

```json
[
  {
    "handlers": [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md">jsx-a11y/role-has-required-aria-props</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md">jsx-a11y/role-supports-aria-props</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md">jsx-a11y/scope</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md">jsx-a11y/tabindex-no-positive</a></h4>
<h4>🔴 <a href="https://reactjs.org/docs/hooks-rules.html">react-hooks/exhaustive-deps</a></h4>
<h4>🔴 <a href="https://reactjs.org/docs/hooks-rules.html">react-hooks/rules-of-hooks</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md">react/boolean-prop-naming</a></h4>

```json
[
  {
    "message": "",
    "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"],
    "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md">react/button-has-type</a></h4>

```json
[{ "button": true, "reset": false, "submit": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md">react/default-props-match-prop-types</a></h4>

```json
[{ "allowRequiredDefaults": false }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md">react/destructuring-assignment</a></h4>

```json
["always"]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md">react/display-name</a></h4>

```json
[{ "ignoreTranspilerName": false }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md">react/forbid-component-props</a></h4>

```json
[{ "forbid": [] }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md">react/forbid-dom-props</a></h4>

```json
[{ "forbid": [] }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md">react/forbid-elements</a></h4>

```json
[{ "forbid": [] }]
```

<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md">react/forbid-foreign-prop-types</a></h4>

```json
[{ "allowInPropTypes": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md">react/forbid-prop-types</a></h4>

```json
[
  {
    "checkChildContextTypes": true,
    "checkContextTypes": true,
    "forbid": ["any", "array", "object"]
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md">react/function-component-definition</a></h4>

```json
[{ "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md">react/jsx-boolean-value</a></h4>

```json
["never", { "always": [] }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md">react/jsx-curly-brace-presence</a></h4>

```json
[{ "children": "never", "props": "never" }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md">react/jsx-filename-extension</a></h4>

```json
[{ "extensions": [".jsx", ".tsx"] }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md">react/jsx-fragments</a></h4>

```json
["syntax"]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md">react/jsx-handler-names</a></h4>

```json
[{ "eventHandlerPrefix": "handle", "eventHandlerPropPrefix": "on" }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md">react/jsx-key</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md">react/jsx-max-depth</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md">react/jsx-no-bind</a></h4>

```json
[
  {
    "allowArrowFunctions": true,
    "allowBind": false,
    "allowFunctions": false,
    "ignoreDOMComponents": true,
    "ignoreRefs": true
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md">react/jsx-no-comment-textnodes</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md">react/jsx-no-constructed-context-values</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md">react/jsx-no-duplicate-props</a></h4>

```json
[{ "ignoreCase": true }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md">react/jsx-no-literals</a></h4>

```json
[{ "noStrings": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md">react/jsx-no-script-url</a></h4>

```json
[[{ "name": "Link", "props": ["to"] }]]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md">react/jsx-no-target-blank</a></h4>

```json
[{ "enforceDynamicLinks": "always", "forms": false, "links": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md">react/jsx-no-undef</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md">react/jsx-no-useless-fragment</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md">react/jsx-pascal-case</a></h4>

```json
[{ "allowAllCaps": true, "ignore": [] }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md">react/jsx-sort-default-props</a></h4>

```json
[{ "ignoreCase": true }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md">react/jsx-sort-prop-types</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md">react/jsx-sort-props</a></h4>

```json
[
  {
    "callbacksLast": false,
    "ignoreCase": true,
    "noSortAlphabetically": false,
    "reservedFirst": true,
    "shorthandFirst": false,
    "shorthandLast": false
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md">react/jsx-uses-react</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md">react/jsx-uses-vars</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md">react/no-access-state-in-setstate</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md">react/no-adjacent-inline-elements</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md">react/no-array-index-key</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md">react/no-arrow-function-lifecycle</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md">react/no-children-prop</a></h4>
<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md">react/no-danger</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md">react/no-danger-with-children</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md">react/no-deprecated</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md">react/no-did-mount-set-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md">react/no-did-update-set-state</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md">react/no-direct-mutation-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md">react/no-find-dom-node</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md">react/no-invalid-html-attribute</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md">react/no-is-mounted</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md">react/no-multi-comp</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md">react/no-namespace</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md">react/no-redundant-should-component-update</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md">react/no-render-return-value</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md">react/no-set-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md">react/no-string-refs</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md">react/no-this-in-sfc</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md">react/no-typos</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md">react/no-unescaped-entities</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md">react/no-unknown-property</a></h4>

```json
[{ "ignore": ["css"] }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md">react/no-unsafe</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md">react/no-unstable-nested-components</a></h4>
<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md">react/no-unused-class-component-methods</a></h4>
<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md">react/no-unused-prop-types</a></h4>

```json
[{ "customValidators": [], "skipShapeProps": true }]
```

<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md">react/no-unused-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md">react/no-will-update-set-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md">react/prefer-es6-class</a></h4>

```json
["always"]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md">react/prefer-exact-props</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md">react/prefer-read-only-props</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md">react/prefer-stateless-function</a></h4>

```json
[{ "ignorePureComponents": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md">react/prop-types</a></h4>

```json
[{ "customValidators": [], "ignore": [], "skipUndeclared": false }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md">react/react-in-jsx-scope</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md">react/require-optimization</a></h4>

```json
[{ "allowDecorators": [] }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md">react/require-render-return</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md">react/self-closing-comp</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md">react/sort-comp</a></h4>

```json
[
  {
    "groups": {
      "lifecycle": [
        "displayName",
        "propTypes",
        "contextTypes",
        "childContextTypes",
        "mixins",
        "statics",
        "defaultProps",
        "constructor",
        "getDefaultProps",
        "getInitialState",
        "state",
        "getChildContext",
        "getDerivedStateFromProps",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "getSnapshotBeforeUpdate",
        "componentDidUpdate",
        "componentDidCatch",
        "componentWillUnmount"
      ],
      "rendering": ["/^render.+$/", "render"]
    },
    "order": [
      "static-variables",
      "static-methods",
      "instance-variables",
      "lifecycle",
      "/^handle.+$/",
      "/^on.+$/",
      "getters",
      "setters",
      "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
      "instance-methods",
      "everything-else",
      "rendering"
    ]
  }
]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md">react/sort-prop-types</a></h4>

```json
[
  {
    "callbacksLast": false,
    "ignoreCase": true,
    "requiredFirst": false,
    "sortShapeProp": true
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md">react/state-in-constructor</a></h4>

```json
["always"]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md">react/static-property-placement</a></h4>

```json
["property assignment"]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md">react/style-prop-object</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md">react/void-dom-elements-no-children</a></h4>
<!-- END rules -->

## TypeScript

Here are the rules that override the basic rules when applied to a TypeScript file.

These rules are only applied on `.ts` and `.tsx` files

<!-- START rules-ts -->
<div align="center">

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 1     | 0        | 0          | 1           |

</div>

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md">react/prop-types</a></h4>

```json
[{ "customValidators": [], "ignore": [], "skipUndeclared": false }]
```

<!-- END rules-ts -->
