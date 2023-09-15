#!/usr/bin/env node

import path from "node:path";
import download from "image-downloader";
import { fetchBrokers } from "./lib.js";

const dest = path.join(process.cwd(), ".logocache");

const errors = {};
const brokers = await fetchBrokers();

// console.log(brokers.length);

for (const broker of brokers.sort()) {
  const url = `https://icons.duckduckgo.com/ip3/${broker}.ico`;
  const options = {
    url,
    dest,
  };
  await download.image(options)
    .then(({ filename }) => {
      // console.log('Saved to', filename);
    })
    .catch((err) => {
      errors[broker] = {
        message: err.message.replace(/\s+/g, " "),
        ico: url,
      };
    });
}

console.log(JSON.stringify(errors, null, 2));
