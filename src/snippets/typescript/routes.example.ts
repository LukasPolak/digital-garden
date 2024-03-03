import { routes, routesKeys } from "./routes";

const route = routes.COMPANIES_COMPANY_ID_WORKSPACES_WORKSPACE_ID_USERS_USER_ID(
  {
    companyId: "foo",
    userId: "baz",
    workspaceId: "bar",
  },
);

route; // "companies/foo/workspaces/bar/users/baz"

routesKeys.COMPANIES_COMPANY_ID_WORKSPACES_WORKSPACE_ID_USERS_USER_ID; // "COMPANIES_COMPANY_ID_WORKSPACES_WORKSPACE_ID_USERS_USER_ID"
