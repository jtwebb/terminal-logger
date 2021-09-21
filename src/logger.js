import { formatWithOptions } from 'util';
import { sep } from 'path';
import { loggers } from './config.js';
import { logLevels } from './log-levels.js';
import { styles } from './styles.js';

const cwd = `${process.cwd()}${sep}`;

export class Logger {
  constructor(options) {
    this.logLevel = options.logLevel;
    this.formatOptions = options.formatOptions;
    this.titleChar = options.titleChar || '#';
    this.widestLabel = this.getWidestLabel();
    this.init();
  }

  /**
   * @private
   */
  getWidestLabel() {
    return Object.keys(loggers).reduce((acc, current) => {
      current = loggers[current];
      const text = (current.label || {}).text || '';
      if (text.length > acc) {
        acc = text.length;
      }

      return acc;
    }, 0);
  }

  setTitleChar(character) {
    this.titleChar = character;
  }

  setLogLevel(level) {
    if (level in logLevels) {
      this.logLevel = logLevels[level];
      return this.logLevel;
    }

    const parsed = parseInt(level, 10);
    if (!isNaN(parsed) && parsed >= -1 && parsed <= 6) {
      this.logLevel = parsed;
    }

    return this.logLevel;
  }

  /**
   * @private
   */
  init() {
    const { error, trace, ...logs } = loggers;
    for (const logger in logs) {
      const logMeta = loggers[logger];
      this[logger] = (...args) => {
        if (logMeta.level > this.logLevel) {
          return;
        }

        const label = this.createText(logMeta.label, true);
        const formatted = `${formatWithOptions(this.formatOptions, ...args)}`;
        const text = this.createText({ ...logMeta, text: formatted });

        const log = console[logger] ? console[logger] : console.log;
        log(`${label} ${text}`);
      };
    }
  }

  error(...args) {
    const logMeta = loggers.error;

    this.stackLogs(console.error, logMeta, true, ...args);
  }

  trace(...args) {
    const logMeta = loggers.trace;
    args.push(new Error());

    this.stackLogs(console.debug, logMeta, false, ...args);
  }

  title(...args) {
    const width = process.stdout.columns || 80;
    const formatted = formatWithOptions(this.formatOptions, ...args);
    const willWrap = formatted.length > width - 4;

    console.log(`\n${this.titleChar.repeat(width)}`);

    if (willWrap) {
      console.log(`${formatted}`);
    } else {
      const whitespace = ' '.repeat(width - (formatted.length + 3));
      console.log(`${this.titleChar} ${formatted}${whitespace}${this.titleChar}`);
    }

    console.log(this.titleChar.repeat(width));
  }

  /**
   * @private
   */
  stackLogs(log, logMeta, isError, ...args) {
    if (logMeta.level > this.logLevel) {
      return;
    }

    const _args = args.map((arg) => {
      if (arg && typeof arg.stack === 'string') {
        return `${arg.message}\n${this.formatStack(arg.stack, isError)}`;
      }
      return arg;
    });

    const formatted = formatWithOptions(this.formatOptions, ..._args);
    const label = this.createText(logMeta.label, true);
    const text = this.createText({ ...logMeta, text: `${formatted}` });

    log(`${label} ${text}`);
  }

  /**
   * @private
   */
  formatStack(stack, isError) {
    return stack
      .split('\n')
      .splice(1)
      .map((l) => l.trim().replace('file://', '').replace(cwd, ''))
      .map((line) => {
        line = line
          .replace(/^at +/, (m) => `   ${styles.color('blackBright', m)}`)
          .replace(/\((.+)\)/, (_, m) => `(${isError ? styles.color('red', m) : styles.color('cyanBright', m)})`);
        return ` ${line}`;
      })
      .join('\n');
  }

  /**
   * @private
   */
  createText({ text, bg, color, modifiers } = {}, isLabel) {
    if (!text) {
      return '';
    }

    let modified = styles.color(color, text);
    modified = styles.bgColor(bg, modified);
    modified = styles.modifier(modifiers, modified);

    if (isLabel) {
      const spaces = this.widestLabel - text.length;
      return `${modified}:${' '.repeat(spaces + 2)}`;
    }

    return modified;
  }
}
