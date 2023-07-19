const express = require ("express");
const app = express();

const path = require('path'); 
app.use(express.static('public'));


app.get('/',function(req,res) {
    res.send("betaHome");});

app.get('/betaHome', (req,res) => {
    res.sendFile (path.join(__dirname, '/views/betaHome.html'))});

    app.get('/crearCuenta', (req,res) => {
        res.sendFile (path.join(__dirname, '/views/crearCuenta.html'))});

/*app.listen(3001 ,() => console.log('sevidor corriendo beta'));*/

const port = process.env.PORT || 3001;
app.listen(port,()=>console.log(`servidor corriendo en el puerto ${port}`))
