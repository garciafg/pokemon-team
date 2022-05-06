import React from 'react';
import {GlobalContext} from '../../GlobalContext';

const Create = () => {

    const values  = React.useContext(GlobalContext);

    // Reccarregar lista de pokemons
    React.useEffect(() => {
        const intersectionObserver = new IntersectionObserver(( entries ) => {
            if (entries.some(entry => entry.isIntersecting)) { 
                values.setCurrentPage((currentPageInsideState) => currentPageInsideState + 16);
            }
        })
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
    }, [values]);

    return (
        <div>
            <h1 className='title-page'>CREATE NEW TEAM</h1>

            <main>
                <input
                    className='input-team'
                    type='text'
                    placeholder='Team Name'
                    value={values.nameTeam}
                    onChange={(e) => values.setNameTeam(e.target.value)}
                />
                <div className='my-team'>
                    <ul>
                        {
                            values.slotsTeam.map(slotTeam => (
                                <li key={slotTeam.id}>
                                    <img src={slotTeam.src} alt='img' />
                                </li>
                            ))
                        }
                    </ul>
                    <div className='btns-create-team'>
                        <button
                            disabled={values.statusBtnSucess} 
                            className='btn-team'
                            onClick={values.handleSalveTeam}
                        >
                            <img className={`btn-success-${values.statusBtnSucess}`} src={values.Success} alt='img' />
                        </button>
                        <button
                            className='btn-team'
                            disabled={values.statusBtnDanger} 
                            onClick={() => values.handleClear()}
                        >
                            <img className={`btn-danger-${values.statusBtnDanger}`} src={values.Danger} alt='img' />
                        </button>

                    </div>
                </div>

                <h1>Choose 6 Pokemons</h1>
                <div className='choose-pokemons'>
                        <ul className='pokemon-list'>

                            {values.fullPokeList.map(pokemon => (
                                    <li key={pokemon.id} className='card'>
                                        <label htmlFor={pokemon.id}>
                                            <span className='idpok'>{values.returnDataPok(pokemon.id)?.id}</span>
                                            <img src={values.returnDataPok(pokemon.id)?.sprites.other.dream_world.front_default}  alt='img' />
                                            <p className='namePok'>{pokemon.name}</p>
                                             <input
                                                className='hide-checkbox'
                                                type="checkbox"
                                                id={pokemon.id}
                                                data-image={values.returnDataPok(pokemon.id)?.sprites.other.dream_world.front_default}
                                                data-namepokemon={pokemon.name}
                                                value={pokemon.id}
                                                onChange={values.handleCheck}
                                            />
                                        </label>
                                    </li>

                            ))}
                            <li id='sentinela'></li>
                        </ul>
                </div>
            </main>
        </div>
    );
};

export default Create;