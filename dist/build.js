import { swcDir } from "@swc/cli";
import merge from "deepmerge";
const baseSwcOptions = {
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
const baseCliOptions = {
    outDir: "./dist",
    watch: false,
    filenames: ["./src"],
    extensions: [".ts"],
    stripLeadingPaths: true,
    deleteDirOnStart: true,
};
export function swcBuild(args) {
    return swcDir({
        cliOptions: merge(baseCliOptions, args?.cliOptions || {}),
        swcOptions: merge(baseSwcOptions, args?.swcOptions || {}),
        callbacks: args?.callbacks,
    });
}
export * from "@swc/cli";
//# sourceMappingURL=build.js.map