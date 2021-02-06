import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { useTheme } from 'styled-components';
import Select, {
  OptionTypeBase,
  Props as SelectProps,
  Theme as SelectTheme
} from 'react-select';
import { useField } from '@unform/core';

import { LabelContainer } from './styles';

interface Props extends SelectProps<OptionTypeBase>{
  name: string;
  label?: string;
}

const SimpleSelect: React.FC<Props> = ({ 
  name,
  label,
  defaultValue: RSdefaultValue,
  ...rest
 }) => {
    const selectRef = useRef<Select<OptionTypeBase>>(null);
    const { fieldName, defaultValue = RSdefaultValue, registerField } = useField(
      name,
    );

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: selectRef.current,
        getValue: (ref: any) => {
          if (rest.isMulti) {
            if (!ref.state.value) {
              return [];
            }
            return ref.state.value.map((option: OptionTypeBase) => option.value);
          }
          if (!ref.state.value) {
            return '';
          }
          return ref.state.value.value;
        },
        setValue: (ref: any, value: any) => {
          ref.state.value = value;
        },
        clearValue: (ref: any, value: any) => {
          ref.select.clearValue();
        },
      });
    }, [fieldName, registerField, rest.isMulti]);
    
  return (
    <LabelContainer>
      { label && <small>{label}</small>}

      <Select
        
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
    </LabelContainer>
  );
}

export default SimpleSelect;
