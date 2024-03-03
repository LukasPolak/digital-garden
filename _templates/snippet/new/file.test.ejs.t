---
to: src/<%= directory %>/<%= name %>.test.<%= extension %>
---

import { describe } from "bun:test";

describe.todo("<%= h.changeCase.camel(name) %>", () => {});
