const express =  require('express');
const cors =  require('cors');

const port = 8000;
const app = express();

const avaliacoesRoutes = require("./src/routes/avaliacoesRoutes");
const { lockIt } = require('./src/utils');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Documentação");
});

// CARREGUE AS ROTAS PROTEGIDAS A PARTIR DAQUI

app.use("/avaliacoes", avaliacoesRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});