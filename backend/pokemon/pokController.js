const express = require('express');
const PokemonModel = require('./pokModel');
const router = express.Router();
const Sequelize = require('sequelize');

  
    router.post('/savePok', (req, res) => {
        
        const { nameTeam, team } = req.body;
        console.log(nameTeam, team);
        if(nameTeam, team){
            PokemonModel.create({
                nameTeam: nameTeam,
                pokemon: team
            }).then(() => {
                res.send({
                    status: true,
                    message: "Pokemon salvo com sucesso"
                });
            }).catch((err) => {
                res.send({
                    status: false,
                    message: "Erro ao salvar o pokemon"
                });
            }
            );
        }else{
            res.send({
                status: false,
                message: "Nome do time ou pokemon não informado"
            });
        }
    }
    );

    router.get('/index/:currentListHome', (req, res) => {
        const { currentListHome } = req.params;
        console.log(currentListHome);
        
        PokemonModel.findAll({
            offset: 0, 
            limit: parseInt(currentListHome),
            order: Sequelize.literal('id DESC')
        }).then((pokemons) => {
            res.send(pokemons);
        }
        ).catch((err) => {
            res.send(err);
        }
        );
    }
    );



module.exports = router;