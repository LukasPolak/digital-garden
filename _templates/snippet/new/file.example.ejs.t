---
to: src/<%= directory %>/<%= name %>.example.<%= extension %>
---

import { <%= h.changeCase.camel(name) %> } from "./<%= name %>";

<%= h.changeCase.camel(name) %>();
