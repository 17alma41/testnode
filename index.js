const express = require('express')
const app = express()

let txt = ""

app.get('/', (req, res)=>{
    res.send("Hola Mundo");
});

app.get('/grab', (req, res) => {
    const data = req.query.data
    //Guardamos la data que el usuario nos manda en una variable global
    txt += data
    res.send(data);
})

app.get('/read', (req, res) =>{
    //Leemos el valor que nos envian a txt
    res.send(txt)
})

app.listen(3000, () => {
    console.log(`Escuchando en el puerto 3000`)
})