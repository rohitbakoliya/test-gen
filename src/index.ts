#!/usr/bin/env node

import Random from './helper/RandomMT';

const rnd = new Random();
for (let i = 0; i < 10; i++) console.log(rnd.random([1, 14]));

console.log(String.fromCharCode(rnd.random([48, 57])));
