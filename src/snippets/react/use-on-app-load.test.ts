import { renderHook } from "@testing-library/react";
import { useOnAppLoad } from "./use-on-app-load";

describe("useOnAppLoad", () => {
  it("should callback only once", () => {
    const callback = jest.fn();

    const { rerender } = renderHook(() => {
      useOnAppLoad(callback);
    });

    rerender();

    expect(callback).toBeCalledTimes(1);
  });
});
