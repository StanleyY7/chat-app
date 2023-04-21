// global.d.ts
import React from 'react';

declare module 'react' {
  interface JSX {
    // define the types for HTML elements used in your project
    // for example:
    interface IntrinsicElements {
      div: React.HTMLProps<HTMLDivElement>;
      form: React.HTMLProps<HTMLFormElement>;
      input: React.HTMLProps<HTMLInputElement>;
      button: React.HTMLProps<HTMLButtonElement>;
    }
  }
}
