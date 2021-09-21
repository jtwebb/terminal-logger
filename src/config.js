import { logLevels } from './log-levels.js';

export const loggers = {
  log: {
    color: 'whiteBright',
    label: {
      text: ' Log ',
      color: 'whiteBright',
      modifiers: ['bold']
    },
    level: logLevels.log
  },
  warn: {
    color: 'yellowBright',
    label: {
      text: ' Warn ',
      color: 'yellowBright',
      modifiers: ['bold']
    },
    level: logLevels.warn
  },
  info: {
    color: 'cyanBright',
    label: {
      text: ' Info ',
      color: 'cyanBright',
      modifiers: ['bold']
    },
    level: logLevels.info
  },
  debug: {
    color: 'magentaBright',
    label: {
      text: ' Debug ',
      color: 'magentaBright',
      modifiers: ['bold']
    },
    level: logLevels.info
  },
  verbose: {
    color: 'blackBright',
    label: {
      text: ' Verbose ',
      color: 'blackBright',
      modifiers: ['bold']
    },
    level: logLevels.verbose
  },
  error: {
    color: 'red',
    label: {
      text: ' Error ',
      color: 'red',
      modifiers: ['bold']
    },
    level: logLevels.error
  },
  trace: {
    color: 'white',
    label: {
      text: ' Trace ',
      color: 'white',
      modifiers: ['bold']
    },
    level: logLevels.trace
  },
  success: {
    color: 'greenBright',
    label: {
      text: ' Success ',
      color: 'greenBright',
      modifiers: ['bold']
    },
    level: logLevels.info
  }
};
