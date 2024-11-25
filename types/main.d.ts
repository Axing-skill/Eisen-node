declare module "Eisen-node" {
  const ePath: {
    judgeAbsolutePath(pathStr: string): boolean;
    getAbsolutePath(pathStr: string): string;
  };
}
