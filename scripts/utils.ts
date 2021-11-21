import path from 'path'
import fs from "fs";
import glob from "glob";

const { resolve } = path;

export const port = parseInt(process.env.PORT || '') || 3303
export const r = (...args: string[]) => resolve(__dirname, '..', ...args)
export const isDev = process.env.NODE_ENV !== 'production'
