import React from 'react';
import { Container, Header } from './styles';

import NavBar from '../../components/NavBar';
import Items from '../../components/Items';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar/>
            <Header>
                <h1>Agendamentos</h1>
                <span>2 carros</span>
            </Header>
            <main>
                <div className="items">
                    <div className="card">
                        <Items/>
                        <div className="period">
                            <p>
                                PERÍODO 18 Junho - 22 Junho 
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <Items/>
                        <div className="period">
                            <p>
                                PERÍODO 18 Junho - 22 Junho 
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <Items/>
                        <div className="period">
                            <p>
                                PERÍODO 18 Junho - 22 Junho 
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <Items/>
                        <div className="period">
                            <p>
                                PERÍODO 18 Junho - 22 Junho 
                            </p>
                        </div>
                    </div><div className="card">
                        <Items/>
                        <div className="period">
                            <p>
                                PERÍODO 18 Junho - 22 Junho 
                            </p>
                        </div>
                    </div><div className="card">
                        <Items/>
                        <div className="period">
                            <p>
                                PERÍODO 18 Junho - 22 Junho 
                            </p>
                        </div>
                    </div>  
                </div>
            </main>
        </Container>        
    );
}

export default Home;