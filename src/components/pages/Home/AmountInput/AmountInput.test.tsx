import { ChangeEvent, FC, useState } from 'react';

import { AMOUNT_INPUT_TEST_ID } from '__testing__/consts';
import { fireEvent, render, screen } from '__testing__/unit';

import { AmountInput } from './AmountInput';

const ControllingAmountInput: FC<{
  mockOnChange: jest.Mock;
}> = ({ mockOnChange }) => {
  const [amount, setAmount] = useState('1');

  mockOnChange.mockImplementation((event: ChangeEvent<HTMLInputElement>) =>
    setAmount(event.target.value)
  );

  return <AmountInput amount={amount} symbol="₽" onChange={mockOnChange} />;
};

describe('Ввод суммы', () => {
  const mockOnChange = jest.fn();
  render(<ControllingAmountInput mockOnChange={mockOnChange} />);

  const input = screen.getByTestId<HTMLInputElement>(AMOUNT_INPUT_TEST_ID);

  test('Ожидается пустая строка при вводе "-"', () => {
    fireEvent.change(input, { target: { value: '-' } });

    expect(input.value).toBe('');
  });

  test('Ожидается пустая строка при вводе "+"', () => {
    fireEvent.change(input, { target: { value: '+' } });

    expect(input.value).toBe('');
  });

  test('Ожидается пустая строка при вводе букв', () => {
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('');
  });

  test('Ожидается число', () => {
    fireEvent.change(input, { target: { value: '1015' } });

    expect(input.value).toBe('1015');
  });

  test('Ожидается число с плавающей точкой', () => {
    fireEvent.change(input, { target: { value: '1.25' } });

    expect(input.value).toBe('1.25');
  });
});
