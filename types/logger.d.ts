import { InspectOptions } from 'util';

export enum logLevel {
  silent = -1,
  error = 0,
  warn = 1,
  log = 2,
  info = 3,
  debug = 4,
  trace = 5,
  verbose = 6
}

export enum logLevelString {
  'silent',
  'error',
  'warn',
  'log',
  'info',
  'debug',
  'trace',
  'verbose'
}

export interface LoggerOptions {
  logLevel?: logLevel,
  formatOptions?: InspectOptions,
  titleChar?: string
}

export declare class Logger {
  constructor(options: LoggerOptions)
  setTitleChar(character: string): void
  setLogLevel(logLevel: logLevelString|logLevel): number
  error(...args: any[]): void
  trace(...args: any[]): void
  title(...args: any[]): void
  log(...args: any[]): void
  warn(...args: any[]): void
  info(...args: any[]): void
  debug(...args: any[]): void
  verbose(...args: any[]): void
  success(...args: any[]): void
}
