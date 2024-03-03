import { pluralize } from "./pluralize";

pluralize(1, "dog"); // dog
pluralize(2, "dog"); // dogs

pluralize(1, "company", "companies"); // company
pluralize(2, "company", "companies"); // companies
