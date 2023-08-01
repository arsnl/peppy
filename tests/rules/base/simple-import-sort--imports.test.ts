import { validateESLintRule } from "@tests/utils";

validateESLintRule({
  cwd: __dirname,
  ruleName: "simple-import-sort/imports",
  file: "file.ts",
  valid: [
    // Imports should be in alphabetical order
    `
    import z from "a";
    import y from "b";
    `,
    // Named import should be in alphabetical order
    `
    import { a, b, c } from "foo";
    `,
    // Side effect should always be on the top
    `
    import "z";
    import React from "react";
    `,
    // Style side effect should also always be on the top
    `
    import "style.css";
    import foo from "foo";
    `,
    // React should be before other packages
    `
    import React from "react";
    import a from "a";
    `,
    // Even React sub-modules should be before other packages
    `
    import someReactLib from "react/some/path";
    import a from "a";
    `,
    // Other packages starting with "react" should not be before other packages
    `
    import a from "a";
    import someCommunityReactLib from "react-icons";
    `,
    // Absolute access should be after packages
    `
    import foo from "@foo";
    import bar from "@/bar";
    import baz from "~src/baz";
    `,
    // Relative access should be after absolute access
    `
    import bar from "@/bar";
    import foo from "../";
    import baz from "./";
    `,
    // Type import should be after regular import
    `
    import { foo } from "foo";
    import type { Foo } from "foo";
    `,
    // Style import should be after type import
    `
    import type { Foo } from "foo";
    import BarCSS from "bar.css";
    import BarLESS from "bar.less";
    import BarSASS from "bar.sass";
    import BarSCSS from "bar.scss";
    `,
    // Integration
    `
    import "z"; // Side effect
    import React from "react"; // React
    import { useA, useB, useC } from "react/some/path"; // React sub-paths
    import { scopedLibraryA1 } from "@some-library"; // Package scoped
    import _ from "lodash"; // Package
    import { PackageA, PackageB, PackageC } from "react-icons/md"; // Package starting with the name react
    import { absoluteA1 } from "@/some/absolute/path/a"; // Absolute starting with @/
    import { absoluteB1, absoluteB2 } from "~/some/absolute/path/b"; // Absolute starting with ~.*/
    import { absoluteB3, absoluteB4 } from "~src/some/absolute/path/b"; // Absolute starting with ~.*/
    import { relativeA1, relativeA2 } from "../../some/path/a"; // Relative
    import { relativeB1 } from "./some/path/b"; // Relative
    import type { ScopedLibraryA1Style } from "@some-library"; // Package scoped
    import type { LodashStyle } from "lodash"; // Package
    import type { ReactType } from "react"; // React
    import type { UseAStyle } from "react/some/path"; // React sub-paths
    import type { PackageAStyle } from "react-icons"; // Package starting with the name react
    import type { AbsoluteA1Style } from "@/some/absolute/path"; // Absolute starting with @/
    import type { AbsoluteB1Style } from "~/some/absolute/path"; // Absolute starting with ~.*/
    import type { AbsoluteB3Style } from "~src/some/absolute/path"; // Absolute starting with ~.*/
    import type { RelativeA1Style } from "../../some/path"; // Relative
    import type { RelativeB1Style } from "./some/path"; // Relative
    import scopedLibraryA1Style from "@some-library/style.css"; // Package scoped
    import lodashStyle from "lodash/style.scss"; // Package
    import useAStyle from "react/some/path.less"; // React sub-paths
    import reactTypeStyle from "react/style.css"; // React
    import packageAStyle from "react-icons/md.scss"; // Package starting with the name react
    import absoluteA1Style from "@/some/absolute/path/a.css"; // Absolute starting with @/
    import absoluteB1Style from "~/some/absolute/path/b.css"; // Absolute starting with ~.*/
    import absoluteB3Style from "~src/some/absolute/path/b.sass"; // Absolute starting with ~.*/
    import relativeA1Style from "../../some/path/a.scss"; // Relative
    import relativeB1Style from "./some/path/b.less"; // Relative
    `,
  ],
  invalid: [
    // Imports should be in alphabetical order
    {
      code: `
          import y from "b";
          import z from "a";
          `,
      errors: ["Run autofix to sort these imports!"],
    },

    // Named import should be in alphabetical order
    {
      code: `
          import { b, a, c } from "foo";
          `,
      errors: ["Run autofix to sort these imports!"],
    },
    // Side effect should always be on the top
    {
      code: `
      import React from "react";
      import "z"; 
      `,
      errors: ["Run autofix to sort these imports!"],
    },
    // Style side effect should also always be on the top
    {
      code: `
      import foo from "foo";
      import "style.css"; 
      `,
      errors: ["Run autofix to sort these imports!"],
    },
    // React should be before other packages
    {
      code: `
      import a from "a";
      import React from "react";
      `,
      errors: ["Run autofix to sort these imports!"],
    },
    // Even React sub-modules should be before other packages
    {
      code: `
      import a from "a";
      import someReactLib from "react/some/path";
      `,
      errors: ["Run autofix to sort these imports!"],
    },
    // Other packages starting with "react" should not be before other packages
    {
      code: `
      import someCommunityReactLib from "react-icons";
      import a from "a";
      `,
      errors: ["Run autofix to sort these imports!"],
    },
    // Absolute access should be after packages
    {
      code: `
          import bar from "@/bar";
          import baz from "~src/baz";
          import foo from "@foo";
          `,
      errors: ["Run autofix to sort these imports!"],
    },
    // Relative access should be after absolute access
    {
      code: `
            import foo from "../";
            import baz from "./";
            import bar from "@/bar";
            `,
      errors: ["Run autofix to sort these imports!"],
    },
    // Type import should be after regular import
    {
      code: `
      import type { Foo } from "foo";
      import { foo } from "foo";
      `,
      errors: ["Run autofix to sort these imports!"],
    },
    // Style import should be after type import
    {
      code: `
          import BarCSS from "bar.css";
          import BarLESS from "bar.less";
          import BarSASS from "bar.sass";
          import BarSCSS from "bar.scss";
          import type { Foo } from "foo";
          `,
      errors: ["Run autofix to sort these imports!"],
    },
  ],
});
