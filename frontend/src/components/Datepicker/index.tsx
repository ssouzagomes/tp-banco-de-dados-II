import React, { useRef, useState, useEffect, useCallback } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';
import { getYear, getMonth } from 'date-fns';
import { selectRange } from '../../utils/range';

import { Container, Label } from './styles';

interface Props extends ReactDatePickerProps {
  name: string;
  labelName?: string;
}

const Datepicker: React.FC<Props> = ({ name, labelName, ...rest }) => {
  const datePickerRef = useRef(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  const [dateNow] = useState(defaultValue || null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!datePickerRef.current);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const years = selectRange(getYear(new Date()), 1950);

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datePickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Label isFocused={isFocused} isFilled={isFilled}>
        {labelName}
      </Label>
      <Container isFocused={isFocused} isFilled={isFilled}>
        <ReactDatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div>
              <button
                type="button"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {'<'}
              </button>
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(Number(value))}
              >
                {years.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {'>'}
              </button>
            </div>
          )}
          ref={datePickerRef}
          selected={dateNow}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          dateFormat="dd/MM/yyyy"
          locale={ptBR}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
          {...rest}
        />
      </Container>
    </>
  );
};

export default Datepicker;
