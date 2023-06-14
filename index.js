const express = require('express')
const app = express()

const cors = require('cors')
const {productsRouter} = require('./apis')

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Servidor vivo')
})

app.use('/productos', productsRouter)


const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})