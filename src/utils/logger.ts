// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
};

export class Logger {
  private spinnerText: string | null = null;

  success(message: string): void {
    console.log(`${colors.green}✓${colors.reset}`, message);
  }

  error(message: string): void {
    console.error(`${colors.red}✗${colors.reset}`, message);
  }

  warn(message: string): void {
    console.log(`${colors.yellow}!${colors.reset}`, message);
  }

  info(message: string): void {
    console.log(`${colors.blue}→${colors.reset}`, message);
  }

  debug(message: string): void {
    if (process.env.DEBUG) {
      console.log(`${colors.gray}[DEBUG]${colors.reset}`, message);
    }
  }

  startSpinner(text: string): void {
    this.spinnerText = text;
    console.log(`${colors.cyan}⋯${colors.reset}`, text);
  }

  updateSpinner(text: string): void {
    if (this.spinnerText) {
      this.spinnerText = text;
      console.log('  ', text);
    }
  }

  succeedSpinner(text?: string): void {
    if (this.spinnerText) {
      console.log(`${colors.green}✓${colors.reset}`, text || this.spinnerText);
      this.spinnerText = null;
    }
  }

  failSpinner(text?: string): void {
    if (this.spinnerText) {
      console.log(`${colors.red}✗${colors.reset}`, text || this.spinnerText);
      this.spinnerText = null;
    }
  }

  stopSpinner(): void {
    this.spinnerText = null;
  }

  log(message: string): void {
    console.log(message);
  }

  bold(text: string): string {
    return `${colors.bold}${text}${colors.reset}`;
  }

  dim(text: string): string {
    return `${colors.dim}${text}${colors.reset}`;
  }
}

export const logger = new Logger();