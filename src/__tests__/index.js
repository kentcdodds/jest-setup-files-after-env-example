import React, {useState} from 'react'
import {render, fireEvent, debugDOM} from '@testing-library/react'
import Counter from '..'

test('renders counter', () => {
  const {getByText} = render(<Counter />)
  const count = getByText('0')
  const button = getByText(/click me/i)
  fireEvent.click(button)
  expect(count).toHaveTextContent('1')
})

test('renders counter 2', () => {
  const {getByText} = render(<Counter />)
  const count = getByText('0')
  const button = getByText(/click me/i)
  fireEvent.click(button)
  expect(count).toHaveTextContent('1')
})
