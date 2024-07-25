const express =  require('express');
const cors =  require('cors');

const port = 8000;
const app = express();

const usuarioRoutes = require('./src/routes/usuarioRoute')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Documentação");
});

app.use('/usuarios', usuarioRoutes)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});