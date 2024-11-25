const eNode = require("../src/main");
const enode = require("../dist/main");

describe("测试入口", () => {
  test("测试 getAbsolutePath", () => {
    expect(eNode.ePath.getAbsolutePath(`D:\\Eisen\\Code\\Project\\`)).toBe(
      `D:\\Eisen\\Code\\Project\\`
    );
  });
  test("测试 getAbsolutePath", () => {
    expect(enode.ePath.getAbsolutePath(`D:\\Eisen\\Code\\Project\\`)).toBe(
      `D:\\Eisen\\Code\\Project\\`
    );
  });
});
