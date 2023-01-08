import { renderHook } from "@testing-library/react";
import { FC } from "react";
import { useAppContext, AppContextProvider } from "./use-app-context";

describe("useAppContext", () => {
  it("throw an error if hook is called outside of provider", () => {
    // disable error logs
    jest.spyOn(console, "error").mockImplementation(() => null);

    expect(() => renderHook(() => useAppContext())).toThrow(
      "`useAppContext` must be used within a `AppContextProvider`"
    );
  });

  it("should return value", () => {
    const Wrapper: FC<{
      children: React.ReactNode;
    }> = ({ children }) => <AppContextProvider>{children}</AppContextProvider>;

    const { result } = renderHook(
      () => {
        return useAppContext();
      },
      {
        wrapper: Wrapper,
      }
    );

    expect(result.current.foo).toBe("bar");
  });
});
