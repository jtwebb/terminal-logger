import { logLevels } from './log-levels.js';

export const loggers = {
  log: {
    color: 'whiteBright',
    label: {
      text: ' Log ',
      color: 'whiteBright',
      modifiers: ['bold']
    },
    level: logLevels.log,
    std: process.stdout
  },
  warn: {
    color: 'yellowBright',
    label: {
      text: ' Warn ',
      color: 'yellowBright',
      modifiers: ['bold']
    },
    level: logLevels.warn,
    std: process.stdout
  },
  info: {
    color: 'cyanBright',
    label: {
      text: ' Info ',
      color: 'cyanBright',
      modifiers: ['bold']
    },
    level: logLevels.info,
    std: process.stdout
  },
  debug: {
    color: 'magentaBright',
    label: {
      text: ' Debug ',
      color: 'magentaBright',
      modifiers: ['bold']
    },
    level: logLevels.info,
    std: process.stdout
  },
  verbose: {
    color: 'blackBright',
    label: {
      text: ' Verbose ',
      color: 'blackBright',
      modifiers: ['bold']
    },
    level: logLevels.verbose,
    std: process.stdout
  },
  error: {
    color: 'red',
    label: {
      text: ' Error ',
      color: 'red',
      modifiers: ['bold']
    },
    level: logLevels.error,
    std: process.stderr
  },
  trace: {
    color: 'white',
    label: {
      text: ' Trace ',
      color: 'white',
      modifiers: ['bold']
    },
    level: logLevels.trace,
    std: process.stderr
  },
  success: {
    color: 'greenBright',
    label: {
      text: ' Success ',
      color: 'greenBright',
      modifiers: ['bold']
    },
    level: logLevels.info,
    std: process.stdout
  }
};
