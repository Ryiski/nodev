// types/swc-cli.d.ts

declare module "@swc/cli" {
  interface CliOptions {
    readonly outDir?: string;
    readonly outFile?: string;
    readonly stripLeadingPaths?: boolean;
    /**
     * Invoke swc using transformSync. It's useful for debugging.
     */
    readonly sync?: boolean;
    readonly workers?: number | undefined;
    readonly sourceMapTarget?: string;
    readonly filename?: string;
    readonly filenames?: string[];
    readonly extensions?: string[];
    readonly watch?: boolean;
    readonly copyFiles?: boolean;
    readonly outFileExtension?: string;
    readonly includeDotfiles?: boolean;
    readonly deleteDirOnStart?: boolean;
    readonly quiet?: boolean;

    readonly only?: string[];
    readonly ignore?: string[];
  }

  interface Callbacks {
    readonly onSuccess?: (data: {
      duration: number;
      /** count of compiled files */
      compiled?: number;
      /** count of copied files */
      copied?: number;
      filename?: string;
    }) => any;
    readonly onFail?: (data: {
      duration: number;
      reasons: Map<string, string>;
    }) => any;
    readonly onWatchReady?: () => any;
  }

  type SwcDirArgs = {
    cliOptions?: CliOptions;
    swcOptions?: import("@swc/core").Options;
    callbacks?: Callbacks;
  };

  export function swcDir(args: SwcDirArgs): void;
}
