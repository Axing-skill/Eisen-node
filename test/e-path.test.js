const process = require("process");
const path = require("path");

const { judgeAbsolutePath, getAbsolutePath } = require("../src/e-path");

describe("测试 judgeAbsolutePath 函数", () => {
  test("测试绝对路径 1", () => {
    expect(judgeAbsolutePath(`D:\\Eisen\\Code\\Project\\`)).toBe(true);
  });
  test("测试绝对路径 2", () => {
    expect(judgeAbsolutePath(`D://Eisen//Code//Project//`)).toBe(true);
  });
  test("测试绝对路径 3", () => {
    expect(judgeAbsolutePath(`D://Eisen\\Code//Project\\`)).toBe(true);
  });
  test("测试绝对路径 4", () => {
    expect(judgeAbsolutePath(`D://Eisen\Code/Project\\`)).toBe(true);
  });
  test("测试相对路径 1", () => {
    expect(judgeAbsolutePath(`./path/to/file`)).toBe(false);
  });
  test("测试相对路径 2", () => {
    expect(judgeAbsolutePath(`path\\to/file`)).toBe(false);
  });
  test("传入非字符串类型", () => {
    expect(() => {
      judgeAbsolutePath([]);
    }).toThrow("传入参数必须为字符串");
  });
});

describe("测试 getAbsolutePath 函数", () => {
  test("测试绝对路径 1", () => {
    expect(getAbsolutePath(`D:\\Eisen\\Code\\Project\\`)).toBe(
      `D:\\Eisen\\Code\\Project\\`
    );
  });
  test("测试绝对路径 2", () => {
    expect(getAbsolutePath(`D:\\Eisen//Code\\Project//`)).toBe(
      `D:\\Eisen\\Code\\Project\\`
    );
  });
  test("测试相对对路径 1", () => {
    expect(getAbsolutePath(`./path/to/file`)).toBe(
      `${process.cwd()}\\path\\to\\file`
    );
  });
  test("测试相对对路径 2", () => {
    expect(getAbsolutePath(`path/to/file`)).toBe(
      `${process.cwd()}\\path\\to\\file`
    );
  });
  test("测试相对对路径 3", () => {
    expect(getAbsolutePath(`../path/to/file`)).toBe(
      `${path.dirname(process.cwd())}\\path\\to\\file`
    );
  });
  test("传入非字符串类型", () => {
    expect(() => {
      getAbsolutePath([]);
    }).toThrow("传入参数必须为字符串");
  });
});
