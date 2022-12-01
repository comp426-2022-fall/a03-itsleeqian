#!/usr/bin/env node

import { roll } from "../lib/roll.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

const sides = args.sides || 6; //default 6 sided dice
const dice = args.dice || 1; //default 1 dice
const rolls = args.rolls || 1; //default 1 roll

console.log(roll(sides, dice, rolls));
process.exit(0);
