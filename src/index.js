import { Logger } from './logger.js';

const defaultOptions = {
  logLevel: process.env.NODE_ENV === 'development' ? 4 : 2,
  // https://nodejs.org/api/util.html#util_util_inspect_object_showhidden_depth_colors
  formatOptions: {
    colors: true,
    sorted: true
  }
};

if (!global.logger) {
  global.logger = new Logger(defaultOptions);
}

export const logger = global.logger;
