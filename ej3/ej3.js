const express=require('express')
const app=express()


const productos={
    description: 'Productos',
    items: [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
      {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
      {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
      {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ]
  }


app.get('/product',(req,res)=>{
    res.send(productos)
})
app.use(express.json())
app.post('/product/new_prod',(req,res)=>{
    const new_product={
        id: productos.items.length+1,
        nombre: req.body.nombre,
        precio: req.body.precio
    }
    if(!req.body.nombre || !req.body.precio){
        res.status(400).send({message:'Field require'})
    }else{
        productos.items.push(new_product)
        res.status(201).send({ results: productos})
    }
})

app.put('/product/:id', (req,res)=> {
    const found=productos.items.filter(prod => prod.id == req.params.id)
    if (found){
        found[0].nombre=req.body.nombre
        res.send(found) 
    } else {
        res.status(400).send({message: `The product with id ${req.params.id} not found `})
       }
    })

app.delete('/product/:id', (req,res)=> {
    const found=productos.items.some(prod => prod.id == req.params.id)
    if (found){
        res.status(201).send(productos.items.filter(prod => prod.id != req.params.id))
    }else{
        res.status(404).send({message: `The product with id ${req.params.id} not found `})
    }
})

app.get('/product', (req,res)=> {
    const foundPrice=productos.items.filter((price) => price.precio >=50 && price.precio<=250)
    if (foundPrice){
        res.send(foundPrice)
    } else {
        res.status(400).send({message: `The product  not found `})
       }
    })
    //localhost:3000/product?precio<=50&precio>=250

    app.get('/product/:id', (req, res) => {
        const foundID = productos.filter((product) => product.id == req.params.id)
        res.send(foundID)
    });

    app.get('/product/:nombre', (req, res) => {
        const foundName = productos.filter((product) => product.nombre == req.params.nombre)
        res.send(foundName)
    });


app.listen("3000",()=>{
    console.log('Servidor levantado en el puerto 3000');
})
