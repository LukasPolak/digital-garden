import { copyToClipboard } from "./copy-to-clipboard";

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe("copyToClipboard", () => {
  it("should ", () => {
    jest.spyOn(navigator.clipboard, "writeText");
    const data = "test";

    copyToClipboard({ data });
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(data);
  });
});
