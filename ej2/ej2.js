const express=require('express')
const app=express()
app.listen("3001",()=>{
    console.log('Servidor levantado en el puerto 3001');
})
app.get('/productos/',(req,res)=>{
    res.send('Listado de productos:')
})
app.use(express.json())
app.post('/productos/',(req,res)=>{
    res.send('Crear un producto:' + req.body.product)
})

app.put('/productos/',(req,res)=>{
    res.send('Actualizar un producto:' + req.body.product)
})

app.delete('/productos/',(req,res)=>{
    res.send('Borrar un producto:' + req.body.product)
})
// --------------------------------------------------------------

app.get('/Usuarios/',(req,res)=>{
    res.send('Listado de usuarios:'+req.query.user)
})
// localhost:3001/Usuarios?user=ana

app.use(express.json())
app.post('/Usuarios/',(req,res)=>{
    res.send('Crear un usuario:' + req.body.user)
})
app.put('/Usuarios/',(req,res)=>{
    res.send('Actualizar un usuario:' + req.body.user)
})
app.delete('/Usuarios/',(req,res)=>{
    res.send('Borrar un usuario:' + req.body.user)
})



