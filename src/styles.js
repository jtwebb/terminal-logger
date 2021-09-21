export const styleDefs = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],

    // Bright color
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],

    // Bright color
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};

export const color = (color, text) => {
  if (!styleDefs.color[color]) {
    return text;
  }

  const [start, end] = styleDefs.color[color];

  return `\u001B[${start}m${text}\u001B[${end}m`;
};

export const bgColor = (bgColor, text) => {
  if (!styleDefs.bgColor[bgColor]) {
    return text;
  }

  const [start, end] = styleDefs.bgColor[bgColor];

  return `\u001B[${38};5;${start}m${text}\u001B[${end}m`;
};

export const modifier = (modifiers, text) => {
  modifiers = Array.isArray(modifier) ? modifiers : [modifiers];

  for (const modifier of modifiers) {
    if (styleDefs.modifier[modifier]) {
      const [start, end] = styleDefs.modifier[modifier];

      text = `\u001B[${start}m${text}\u001B[${end}m`;
    }
  }

  return text;
};

export const styles = { color, bgColor, modifier };
