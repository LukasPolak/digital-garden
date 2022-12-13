import { renderHook } from "@testing-library/react";
import {
  useGetRouteParameter,
  useGetRouteCompanyId,
  useGetRouteUserId,
  useGetRouteWorkspaceId,
} from "./use-get-route-company-id";

const query = {
  "company-id": "foo",
  "workspace-id": "bar",
  "user-id": "baz",
} as const;

let mockedRouter = {
  pathname: "/[company-id]/[workspace-id]/[user-id]",
  route: "/[company-id]/[workspace-id]/[user-id]",
  query,
  asPath: "/foo/bar/baz",
  isReady: true,
};

jest.mock("next/router", () => ({
  useRouter() {
    return mockedRouter;
  },
}));

describe("useGetRouteParameter", () => {
  const keys = Object.keys(query) as Array<keyof typeof query>;

  it.each(keys)("should return '%s'", (parameter) => {
    const { result } = renderHook(() => {
      const { value } = useGetRouteParameter({ parameter });
      return value;
    });

    expect(result.current).toBe(query[parameter]);
  });

  it("should return undefined", () => {
    const { result } = renderHook(() => {
      const { value } = useGetRouteParameter({ parameter: "foo" });
      return value;
    });

    expect(result.current).toBeUndefined();
  });

  it("should call 'onError'", () => {
    const onError = jest.fn();

    renderHook(() => {
      useGetRouteParameter({ parameter: "foo", onError });
    });

    expect(onError).toHaveBeenCalled();
  });

  it("should NOT call 'onError' if router is not ready", () => {
    const onError = jest.fn();
    mockedRouter.isReady = false;

    renderHook(() => {
      useGetRouteParameter({ parameter: "foo", onError });
    });

    expect(onError).not.toHaveBeenCalled();
  });
});

describe("Specialized functions", () => {
  it("should return 'companyId'", () => {
    const { result } = renderHook(() => {
      const { companyId } = useGetRouteCompanyId();
      return companyId;
    });

    expect(result.current).toBe(query["company-id"]);
  });

  it("should return 'workspaceId'", () => {
    const { result } = renderHook(() => {
      const { workspaceId } = useGetRouteWorkspaceId();
      return workspaceId;
    });

    expect(result.current).toBe(query["workspace-id"]);
  });

  it("should return 'userId'", () => {
    const { result } = renderHook(() => {
      const { userId } = useGetRouteUserId();
      return userId;
    });

    expect(result.current).toBe(query["user-id"]);
  });
});
