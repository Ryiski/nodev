# nodev

`nodev` is a custom build tool designed for Node.js and TypeScript projects, leveraging the speed and efficiency of SWC (Speedy Web Compiler) for compilation. It aims to be a modern replacement for tools like `ts-esm` and was specifically created to run development Node servers. It provides a streamlined way to build your TypeScript source code into JavaScript, ready for execution.

## Features

- **Fast Compilation**: Utilizes SWC for rapid TypeScript compilation.
- **Configurable**: Allows for custom SWC and CLI options.
- **Source Map Support**: Enables source maps for easier debugging of compiled code.

## Installation

```bash
pnpm i -g Ryiski/nodev
```

## Usage

### Running Development Servers

Once installed, you can use `nodev` to run your TypeScript files directly, which is ideal for development servers:

```bash
nodev index.ts
```

### Building Projects

`nodev` can be configured with custom SWC options for more control over your build.

For example, to configure `nodev` with specific SWC options.

```typescript
import { swcBuild } from "nodev";
import path from "path";

swcBuild({
  cliOptions: {
    includeDotfiles: true,
    stripLeadingPaths: true,
    copyFiles: true,
    deleteDirOnStart: true,
  },
  swcOptions: {
    jsc: {
      baseUrl: path.resolve(),
      paths: {
        "@/*": ["./src/*"],
      },
    },
    minify: true,
    module: {
      type: "es6",
      resolveFully: true,
    },
  },
});
```
