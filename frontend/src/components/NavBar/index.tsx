import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import House from '../../assets/icons/house.svg';
import Car from '../../assets/icons/car.svg';
import Calendar from '../../assets/icons/calendar.svg';
import User from '../../assets/icons/user.svg';

const NavBar: React.FC = () => {
    const history = useHistory();

    const [data, setData] = useState(() => {
        const user = localStorage.getItem('@RENTX:loggedUser');
    
        if (user) {
            return { user: JSON.parse(user) };
        }
    
        return {};
    });

    const signOut = useCallback(() => {
        localStorage.removeItem('@RENTX:loggedUser');
        setData({});

        history.push('/')
    }, [history]);

    return (
        <Container>
            <div>
                <Link to="/home">
                    <img src={Car} alt="Car"/>
                </Link>

                <Link to="/schedule">
                    <img src={Calendar} alt="Calendar"/>
                </Link>
            </div>

            <div>
                <Link to="/profile">
                    <img src={User} alt="User" id="profile"/>
                </Link>
                <span>{data.user.name}</span>
                <button onClick={signOut}>
                    Sair
                </button>
            </div>
        </Container>
    )
}

export default NavBar;