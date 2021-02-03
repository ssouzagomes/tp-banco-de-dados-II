import React from 'react';

import { Container } from './styles';

import House from '../../assets/icons/house.svg';
import Car from '../../assets/icons/car.svg';
import Calendar from '../../assets/icons/calendar.svg';
import User from '../../assets/icons/user.svg';

const NavBar: React.FC = () => {
    return (
        <Container>
            <div>
                <img src={House} alt="House"/>
                <img src={Car} alt="Car"/>
                <img src={Calendar} alt="Calendar"/>
            </div>

            <div>
                <img src={User} alt="User"/>
                <span>Usuário</span>
            </div>
        </Container>
    )
}

export default NavBar;