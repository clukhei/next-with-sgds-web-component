'use client'
import SgdsReactInput from "@govtechsg/sgds-web-component/react/input/index.js";
import { useState } from 'react';
import type { SgdsInput as SgdsInputElement } from '@govtechsg/sgds-web-component/components';


export const Input = () => {
  const [value, setValue] = useState('');
  const handleInputChange = (event: Event) => {
    const target = event.target as SgdsInputElement
    setValue(target.value)
  }

  return (
    <>
    <SgdsReactInput
      disabled={ value === 'disabled'}
      onSgdsInput={handleInputChange}
      type="text"
      label="Label"
      hintText="This is a hint text"
      name="email"
      pattern="undefined"
      invalidFeedback=""
      icon='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>'
      placeholder="Placeholder"
    ></SgdsReactInput>
    <h1>value: {value}</h1>
    </>
  );
};
