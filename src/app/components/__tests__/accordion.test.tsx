// import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {Accordion} from '../Accordion'
import * as React from 'react';
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Accordion />)
 
    const heading = screen.getByText('xyz Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.')
 
    expect(heading).toBeInTheDocument()
  })
})