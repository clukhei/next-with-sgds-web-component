import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "sgds-masthead": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}