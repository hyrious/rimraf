import { rm } from 'node:fs/promises'
import { rmSync } from 'node:fs'

const IGNORE_CODES = new Set(['ENOTDIR', 'ENOENT'])

export async function rimraf(path) {
  try {
    await rm(path, { recursive: true, maxRetries: 3 })
  } catch (err) {
    if (IGNORE_CODES.has(err.code)) return
    throw err
  }
}

export function rimrafSync(path) {
  try {
    rmSync(path, { recursive: true, maxRetries: 3 })
  } catch (err) {
    if (IGNORE_CODES.has(err.code)) return
    throw err
  }
}

rimraf.sync = rimrafSync
export default rimraf
