---
to: pages/<%= directory %>/<%= name %>.mdx
---

---
title: "<%= title %>"
description: "<%= description %>"
---

import {
  SourceCode,
  getSourceCodeStaticProps,
} from "src/components/source-code.tsx";

export const getStaticProps = () =>
  getSourceCodeStaticProps([
    "<%= directory %>/<%= name %>.ts",
    "<%= directory %>/<%= name %>.example.ts",
    "<%= directory %>/<%= name %>.test.ts",
  ]);

# <%= title %>

<%= description %>

<SourceCode fileName="<%= directory %>/<%= name %>.ts" />

## Examples

<SourceCode fileName="<%= directory %>/<%= name %>.example.ts" />

## Tests

<SourceCode fileName="<%= directory %>/<%= name %>.test.ts" />

## Sources

- [source code](https://github.com/LukasPolak/digital-garden/blob/main/src/snippets/<%= directory %>/<%= name %>.<%= extension %>)
- [example](https://github.com/LukasPolak/digital-garden/blob/main/src/snippets/<%= directory %>/<%= name %>.example.<%= extension %>)
- [tests](https://github.com/LukasPolak/digital-garden/blob/main/src/snippets/<%= directory %>/<%= name %>.test.<%= extension %>)
