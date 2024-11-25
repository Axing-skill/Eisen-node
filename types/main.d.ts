declare module "@eisen-node" {
  const ePath: {
    judgeAbsolutePath(pathStr: string): boolean;
    getAbsolutePath(pathStr: string): string;
  };
}
