const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Pokemon = require("./pokemon/pokController");
const connection = require('./bd/bd');
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/pokemons', Pokemon);
const baseDir = `${__dirname}/front/`


connection.authenticate().then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!');
}).catch((err) => {
    console.log('Erro ao se conectar com o banco de dados: ' + err);
});

// Rota para a página inicial (Reactjs)
app.use(express.static(`${baseDir}`));
app.get('*', (req, res) => {
    res.sendFile(`${baseDir}index.html`);
}
);

app.listen(PORT, () => {
    console.log('Server is running on port 4000');
}
);