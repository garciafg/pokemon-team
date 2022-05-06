import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';

const Header = () => {

    return (
       
        <header>
            <StyledHeader />
            
                <section>
                    <h1>Topo</h1>
                    <ul>
                        <li><Link className="menu" to="/">Home</Link></li>
                        <li><Link className="menu" to="/create">Criar equipe</Link></li>
                    </ul>
                </section>
        </header>
    );
};

export default Header;