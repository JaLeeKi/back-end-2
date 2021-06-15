const express = require('express');
const cors = require('cors');
const ctrl = require('./controller');
const app = express();
const SERVER_PORT = 4004;
const { getAllHouses, deleteHouse, createHouse, updateHouse } = ctrl;

app.use(express.json());
app.use(cors());

app.listen(SERVER_PORT, () => {
    console.log(`Server livin it's short life on ${SERVER_PORT}`)});

app.get ('/api/houses', getAllHouses);
app.delete('/api/houses/:id', deleteHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
