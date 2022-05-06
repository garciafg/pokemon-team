import React from 'react';
import {GlobalContext} from '../../GlobalContext';

const Home = () => {
    
    const values  = React.useContext(GlobalContext);

    React.useEffect(() => {
        const intersectionObserver = new IntersectionObserver(( entries ) => {
            if (entries.some(entry => entry.isIntersecting)) { 
                values.setCurrentListHome((currentListHomeInsideState) => currentListHomeInsideState + 2);
                
            }
        })
        intersectionObserver.observe(document.querySelector('#sentinela')); // Obervanso o elemento
        return () => intersectionObserver.disconnect(); // desconecta o observer
    }, [values]);
    return (
        <div>
            <h1 className='title-page'>TEAMS</h1>

            <main>
                <div className='my-team-home'>
                    <section id='home-list'>
                        <ul>
                            {values.getListPoke.map(poke => (
                                <li key={poke.id}>
                                    <h2>{poke.nameTeam}</h2>
                                    {
                                        JSON.parse(poke.pokemon).map(po => (
                                            <div className='detailHomePok' key={po.id}>
                                                <img src={po.src} alt='img' />
                                            </div>
                                        ))
                                    }
                                </li>
                            ))}
                            <div id="sentinela"></div>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Home;