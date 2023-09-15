import fs from "node:fs/promises";
import path from "node:path";

import errors from "./broker-logos.json" assert { type: "json" };

const LOGO_DIR = ".logocache";

const logoDir = path.join(process.cwd(), LOGO_DIR);

const logos = await fs.readdir(logoDir);

console.log(`## LOGOS (${logos.length})`);
console.log("BROKER | LOGO\n:----|:----");
for (const logo of logos) {
  console.log(`${logo.replace(/\.ico$/, "")} | ![](./${LOGO_DIR}/${logo})`);
}

console.log(`\n\n## ERRORS (${Object.keys(errors).length})`);
console.log("BROKER | MESSAGE | LOGO \n:----|:----|:----");
for (const [broker, data] of Object.entries(errors)) {
  console.log(`${broker} | ${data.message} | ${data.ico}`);
}
