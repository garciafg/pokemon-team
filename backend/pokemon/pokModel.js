const Sequelize = require('sequelize');
const connection = require('../bd/bd');

const Pokemon = connection.define('pokemons', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameTeam: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pokemon: {
        type: Sequelize.JSON,
        allowNull: false
    }
}
);

// Cria a tabela no bd
    // Pokemon.sync({ force: true }).then(() => {
    //     console.log('Tabela criada com sucesso!');
    // }).catch((err) => {
    //     console.log('Erro ao criar a tabela: ' + err);
    // });

module.exports = Pokemon;