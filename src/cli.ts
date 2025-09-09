import "@swc-node/register";
import { pathToFileURL } from "url";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: nodev <file.ts> [args...]");
  process.exit(1);
}

const entry = args[0] || "";
const entryArgs = args.slice(1);

// Adjust process.argv so user code sees expected args
process.argv = [process.argv[0] || "", entry, ...entryArgs];

// Import target file (relative to cwd)
import(pathToFileURL(entry).href).catch((err) => {
  console.error(err);
  process.exit(1);
});
