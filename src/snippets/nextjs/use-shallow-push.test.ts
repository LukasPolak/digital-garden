import { renderHook } from "@testing-library/react";
import { useShallowPush } from "./use-shallow-push";

let mockedRouter = {
  push: jest.fn(),
};

jest.mock("next/router", () => ({
  useRouter() {
    return mockedRouter;
  },
}));

describe("useShallowPush", () => {
  it("should be called with `shallow` option", () => {
    renderHook(() => {
      const { shallowPush } = useShallowPush();
      shallowPush("/foo");
    });

    expect(mockedRouter.push).toHaveBeenCalledWith("/foo", undefined, {
      shallow: true,
    });
  });
});
