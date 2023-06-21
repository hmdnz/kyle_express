const express =require('express')
const app = express()

app.get('/', (req,res) =>{
    console.log('Hola Mundo')
    res.send('Brka da zuwa')
})

app.listen(3159)