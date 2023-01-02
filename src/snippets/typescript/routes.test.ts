import { routes, routesKeys } from "./routes";

const testCases = [
  {
    companyId: "",
    userId: "baz",
    workspaceId: "bar",
    expected: "`companyId` is required. Received ``",
  },
  {
    companyId: "foo",
    userId: null,
    workspaceId: "bar",
    expected: "`userId` is required. Received `null`",
  },
  {
    companyId: "foo",
    userId: "baz",
    workspaceId: undefined,
    expected: "`workspaceId` is required. Received `undefined`",
  },
  {
    companyId: 0,
    userId: "baz",
    workspaceId: "bar",
    expected: "`companyId` must be a string. Received `0`",
  },
  {
    companyId: "foo",
    userId: false,
    workspaceId: "bar",
    expected: "`userId` must be a string. Received `false`",
  },
  {
    companyId: "foo",
    userId: "baz",
    workspaceId: [],
    expected: "`workspaceId` must be a string. Received `[]`",
  },
  {
    companyId: "foo",
    userId: "baz",
    workspaceId: {},
    expected: "`workspaceId` must be a string. Received `{}`",
  },
];

describe("routes", () => {
  it("should return route", () => {
    expect(
      routes.COMPANIES_COMPANY_ID_WORKSPACES_WORKSPACE_ID_USERS_USER_ID({
        companyId: "foo",
        userId: "baz",
        workspaceId: "bar",
      })
    ).toBe("companies/foo/workspaces/bar/users/baz");
  });

  describe("throw an error", () => {
    test.each(testCases)(
      "$expected",
      ({ companyId, expected, userId, workspaceId }) => {
        const callback = () => {
          routes.COMPANIES_COMPANY_ID_WORKSPACES_WORKSPACE_ID_USERS_USER_ID({
            // @ts-expect-error - this is intentional for testing purposes
            companyId,
            // @ts-expect-error - this is intentional for testing purposes
            userId,
            // @ts-expect-error - this is intentional for testing purposes
            workspaceId,
          });
        };

        expect(callback).toThrow(expected);
      }
    );
  });
});

describe("routesKeys", () => {
  it("should return object with keys", () => {
    expect(routesKeys).toEqual({
      COMPANIES_COMPANY_ID_WORKSPACES_WORKSPACE_ID_USERS_USER_ID:
        "COMPANIES_COMPANY_ID_WORKSPACES_WORKSPACE_ID_USERS_USER_ID",
    });
  });
});
