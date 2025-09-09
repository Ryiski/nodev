import { swcDir, type CliOptions, type SwcDirArgs } from "@swc/cli";
import type { Options } from "@swc/core";
import merge from "deepmerge";

const baseSwcOptions: Options = {
  jsc: {
    parser: {
      syntax: "typescript",
      tsx: false,
      dynamicImport: false,
      decorators: true,
    },
    transform: {},
    target: "esnext",
    loose: false,
    externalHelpers: false,
    keepClassNames: false,
    minify: { compress: true },
  },
  minify: true,
};

const baseCliOptions: CliOptions = {
  outDir: "./dist",
  watch: false,
  filenames: ["./src"],
  extensions: [".ts"],
  stripLeadingPaths: true,
  deleteDirOnStart: true,
};

export function swcBuild(args: SwcDirArgs): void {
  return swcDir({
    cliOptions: merge(baseCliOptions, args?.cliOptions || {}),
    swcOptions: merge(baseSwcOptions, args?.swcOptions || {}),
    callbacks: args?.callbacks,
  });
}

export * from "@swc/cli";
