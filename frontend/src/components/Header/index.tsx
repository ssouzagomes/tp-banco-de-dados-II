import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse'

import { Container } from './styles';
import { DateUtils } from 'react-day-picker';


interface FormData {
    to: string;
    from: string;
}

const Header: React.FC = () => {
   
    return (
        <Container>
        <div className="de">
            <p>DE</p>
            <DayPickerInput
                dayPickerProps={{
                    month: new Date(Date.now()),
                    showWeekNumbers: true, 
                }}
            />
        </div>

        <div className="ate">
            <p>ATÉ</p>
            <DayPickerInput
                dayPickerProps={{
                    month: new Date(Date.now()),
                    showWeekNumbers: true,
                    
                }}
            />
        </div>

        </Container>
    );
}

export default Header;