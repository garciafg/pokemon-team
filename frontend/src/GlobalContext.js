import React from "react";
import { api } from './services/api';
import { apiLocal } from './services/api';
const bgCircle = require('./assets/img/bg-circle.png');
const Success = require('./assets/img/success.png');
const Danger = require('./assets/img/danger.png');

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    
    const [ slotsTeam, setSlotsTeam] = React.useState([
        {
            id: 1,
            idPokemon: null,
            namePokemon: null,
            src: bgCircle,
            status: 'empty'
        },
        {
            id: 2,
            idPokemon: null,
            namePokemon: null,
            src: bgCircle,
            status: 'empty'
        },
        {
            id: 3,
            idPokemon: null,
            namePokemon: null,
            src: bgCircle,
            status: 'empty'
        },
        {
            id: 4,
            idPokemon: null,
            namePokemon: null,
            src: bgCircle,
            status: 'empty'
        },
        {
            id: 5,
            idPokemon: null,
            namePokemon: null,
            src: bgCircle,
            status: 'empty'
        },
        {
            id: 6,
            idPokemon: null,
            namePokemon: null,
            src: bgCircle,
            status: 'empty'
        },
    ]);

    // Estados dos dados da aplicação
    const [fullPokeList, setFullPokeList] = React.useState([]); // Lista de todos os pokemons
    const [pokeDetail, setPokeDetail] = React.useState([]); // Detalhes do pokemon selecionado
    const [team, setTeam] = React.useState([]); // Recebe dados da equipe
    const [nameTeam, setNameTeam] = React.useState(''); // Nome da equipe
    const [statusBtnSucess, setStatusBtnSucess] = React.useState(true); // Status do botão de salvar
    const [statusBtnDanger, setStatusBtnDanger] = React.useState(true); // Status do botão de deletar
    const [currentPage, setCurrentPage] = React.useState(16); // Pega o numero da pagina atual na requesição
    const [getListPoke, setGetListPoke] = React.useState([]); // Recebe listagem das equipes cadastradas 
    const [currentListHome, setCurrentListHome] = React.useState(2); // Recarrega listagem de equipes

    // Retorna lista de pokemons
    React.useEffect(() => {
        async function loadPokemon() {
            const response = await api.get(`/pokemon?limit=${currentPage}`);
            setFullPokeList(
                response.data.results.map((pokemon, index) => ({
                    name: pokemon.name,
                    id: index + 1,
                }))
            );
        }  
        loadPokemon();
    }, [currentPage]);


    // Retornar detalhes do pokemon pelo id
    React.useEffect(() => {
        async function loadDetail() {
            for (let i = 0; i < fullPokeList.length; i++) {
                const response = await api.get(`/pokemon/${fullPokeList[i].id}`);
                setPokeDetail(pokeDetail => [...pokeDetail, response.data]);
            }
        }
        loadDetail();
    }, [fullPokeList]);

    // Monta o objeto com os detalhes do pokemon pelo id
    function returnDataPok(id) {
        const valuesByPok = pokeDetail.find(pokemon => pokemon.id === id);
        return valuesByPok;
    }

    // Função verifica se o pokemon já está na equipe, caso não esteja, o adiciona
    const handleCheck = ({target}) => {

        const {id} = target;
        const {image} = target.dataset;
        const {namepokemon} = target.dataset;

        // Se o checkbox foi checado
        if (target.checked) {
            if(slotsTeam.filter(slot => slot.status === 'checked').length === 6) {
                alert('VocÇe só pode escolher 6 pokemons');
                target.checked = false;
                return;
            }

        // Se o pokemon já estiver na slotsTeam, não faz nada
        if(slotsTeam.filter(slot => slot.idPokemon === id).length > 0) {
            return;
        }
    
        // Adiciona o pokemon na equipe
        const slot = slotsTeam.filter(slot => slot.status === 'empty')[0];
        slot.idPokemon = id;
        slot.namePokemon = namepokemon;
        slot.src = image;
        slot.status = 'checked';
        setTeam(team => [...team, slot]);
        const success = document.createElement('img');
        success.src = Success;
        success.className = 'icon-success';
        target.parentNode.appendChild(success);
    
        } else { // Se o checkbox for desmarcado...
            const slot = slotsTeam.filter(slot => slot.idPokemon === id)[0];
            slot.idPokemon = null;
            slot.src = bgCircle;
            slot.status = 'empty';
            const idPokemon = slot.idPokemon;
            const newTeam = team.filter(pokemon => pokemon.idPokemon !== idPokemon);
            setTeam(newTeam);
            target.parentNode.removeChild(target.parentNode.lastChild);
        }

        // Verifica se todos os pokemons foram selecionados, Habilita e desabiita os botoes salvar e deletar
        if(slotsTeam.filter(slot => slot.status === 'empty').length === 0) { // 
            setStatusBtnSucess(false);    
        } else {
            setStatusBtnSucess(true);
        }
        if(slotsTeam.filter(slot => slot.status === 'checked').length === 0) {
            setStatusBtnDanger(true);
        }else{
            setStatusBtnDanger(false);
        }
    }

    // Limpa tudo ao clicar no botão limpar
    const handleClear = () => {
        setFullPokeList([]);
            api.get('/pokemon?limit=16').then(response => {
                setFullPokeList(
                    response.data.results.map((pokemon, index) => ({
                        name: pokemon.name,
                        id: index + 1,
                    })));
            });
        setTeam([]);
        setNameTeam('');
        setStatusBtnSucess(true);
        setStatusBtnDanger(true);
        slotsTeam.forEach(slot => {
            slot.idPokemon = null;
            slot.src = bgCircle;
            slot.status = 'empty';
        });
    }

    // Função para salvar os dados no banco de dados
    const handleSalveTeam = () => {

    if (nameTeam === '' || nameTeam.length < 4) {
        alert('Nome do time inválido');
            return;
    }else{
        apiLocal.post('/pokemons/savePok', {
            nameTeam: nameTeam,
            team: team
        }).then(response => {
            alert('Time salvo com sucesso');
            setNameTeam('');
            setTeam([]);
            setStatusBtnSucess(true);
            setStatusBtnDanger(true);
            setCurrentPage(16);
            handleClear();
            window.location.href = "/";
        }).catch(error => {
            alert('Erro ao salvar o time');
        });
    }}

    // Request todos os pokemons no banco de dados
    React.useEffect(() => {
        async function getPokemons() {
            const response = await apiLocal.get(`/pokemons/index/${currentListHome}`);	
            setGetListPoke(response.data);
        }
        getPokemons();
    }, [currentListHome]);
    return (
        <GlobalContext.Provider value={
            {
                setCurrentListHome,
                currentListHome,
                setCurrentPage,
                getListPoke,
                handleSalveTeam,
                currentPage, 
                handleClear,
                statusBtnSucess,
                statusBtnDanger, 
                nameTeam, 
                setNameTeam , 
                returnDataPok, 
                fullPokeList, 
                pokeDetail, 
                team, 
                setTeam, 
                bgCircle, 
                Success, 
                Danger, 
                slotsTeam, 
                setSlotsTeam, 
                handleCheck
            }}>
            {children}
        </GlobalContext.Provider>
    );
};