#!/usr/bin/env node

import { fetchBrokers } from "./lib.js";

const brokers = await fetchBrokers();
console.log(JSON.stringify(brokers, null, 2));
