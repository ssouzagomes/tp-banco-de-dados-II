import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import House from '../../assets/icons/house.svg';
import Car from '../../assets/icons/car.svg';
import Calendar from '../../assets/icons/calendar.svg';
import User from '../../assets/icons/user.svg';

const NavBar: React.FC = () => {
    return (
        <Container>
            <div>
            <Link to="#">
                <img src={House} alt="House"/>
            </Link>

            <Link to="#">
                <img src={Car} alt="Car"/>
            </Link>

            <Link to="#">
                <img src={Calendar} alt="Calendar"/>
            </Link>
            </div>

            <div>
            <Link to="#">
                <img src={User} alt="User"/>
            </Link>
                <span>Usuário</span>
            </div>
        </Container>
    )
}

export default NavBar;