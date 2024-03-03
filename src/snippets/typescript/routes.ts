const validateRequiredArguments = (args: { [key: string]: string }) => {
  Object.keys(args).forEach((key) => {
    const value = args[key];

    if (value === undefined || value === null || value === "") {
      throw new Error(`\`${key}\` is required. Received \`${value}\``);
    }

    if (typeof value !== "string") {
      throw new Error(
        `\`${key}\` must be a string. Received \`${JSON.stringify(value)}\``,
      );
    }
  });
};

export const routes = {
  COMPANIES_COMPANY_ID_WORKSPACES_WORKSPACE_ID_USERS_USER_ID: (args: {
    companyId: string;
    workspaceId: string;
    userId: string;
  }) => {
    validateRequiredArguments(args);
    const { companyId, workspaceId, userId } = args;

    return `companies/${companyId}/workspaces/${workspaceId}/users/${userId}`;
  },
};

export const routesKeys = Object.keys(routes).reduce(
  (acc: object, key: string) => ({
    ...acc,
    [key]: key,
  }),
  {},
) as Record<keyof typeof routes, string>;
