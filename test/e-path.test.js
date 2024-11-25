const process = require("process");
const path = require("path");
const ePath = require("../src/e-path");

describe("测试 ePath.judgeAbsolutePath 函数", () => {
  test("测试绝对路径 1", () => {
    expect(ePath.judgeAbsolutePath(`D:\\Eisen\\Code\\Project\\`)).toBe(true);
  });
  test("测试绝对路径 2", () => {
    expect(ePath.judgeAbsolutePath(`D://Eisen//Code//Project//`)).toBe(true);
  });
  test("测试绝对路径 3", () => {
    expect(ePath.judgeAbsolutePath(`D://Eisen\\Code//Project\\`)).toBe(true);
  });
  test("测试绝对路径 4", () => {
    expect(ePath.judgeAbsolutePath(`D://Eisen\Code/Project\\`)).toBe(true);
  });
  test("测试相对路径 1", () => {
    expect(ePath.judgeAbsolutePath(`./path/to/file`)).toBe(false);
  });
  test("测试相对路径 2", () => {
    expect(ePath.judgeAbsolutePath(`path\\to/file`)).toBe(false);
  });
  test("传入非字符串类型", () => {
    expect(() => {
      ePath.judgeAbsolutePath([]);
    }).toThrow("传入参数必须为字符串");
  });
});

describe("测试 ePath.getAbsolutePath 函数", () => {
  test("测试绝对路径 1", () => {
    expect(ePath.getAbsolutePath(`D:\\Eisen\\Code\\Project\\`)).toBe(
      `D:\\Eisen\\Code\\Project\\`
    );
  });
  test("测试绝对路径 2", () => {
    expect(ePath.getAbsolutePath(`D:\\Eisen//Code\\Project//`)).toBe(
      `D:\\Eisen\\Code\\Project\\`
    );
  });
  test("测试相对对路径", () => {
    expect(ePath.getAbsolutePath(`./path/to/file`)).toBe(
      `${process.cwd()}\\path\\to\\file`
    );
  });
  test("测试相对对路径, 以指定文件路径为路径前缀", () => {
    expect(
      ePath.getAbsolutePath(`./path/to/file`, "D:\\Eisen\\Code\\Project\\")
    ).toBe(`D:\\Eisen\\Code\\Project\\path\\to\\file`);
  });
  test("测试相对对路径", () => {
    expect(ePath.getAbsolutePath(`path/to/file`)).toBe(
      `${process.cwd()}\\path\\to\\file`
    );
  });
  test("测试相对对路径", () => {
    expect(ePath.getAbsolutePath(`../path/to/file`)).toBe(
      `${path.resolve(process.cwd(), "..")}\\path\\to\\file`
    );
  });
  test("传入非字符串类型", () => {
    expect(() => {
      ePath.getAbsolutePath([]);
    }).toThrow("传入参数必须为字符串");
  });
});
