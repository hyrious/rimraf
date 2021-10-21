#!/usr/bin/env node
import process from "node:process"
import rimraf from "./index.js"

const HELP_FLAGS = new Set(["--help", "-h"])

let help = false
const args = process.argv.slice(2).filter((arg) => {
  if (HELP_FLAGS.has(arg))
    help = true
  else
    return arg
})

if (help || args.length === 0) {
  console.log(`usage: rimraf path ...`)
} else {
  await Promise.all(args.map((path) => rimraf(path)))
}
