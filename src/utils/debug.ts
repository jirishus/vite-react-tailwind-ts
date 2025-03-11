const DEBUG_ENABLED = import.meta.env.VITE_DEBUG === 'true';

export const debug = {
  log: (...args: any[]) => {
    if (DEBUG_ENABLED) {
      console.log(...args);
    }
  },
  warn: (...args: any[]) => {
    if (DEBUG_ENABLED) {
      console.warn(...args);
    }
  },
  error: (...args: any[]) => {    
    console.error(...args);
  }
};