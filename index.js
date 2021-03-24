const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())

const users = ["asad" , "korim" , 'rohim' , "shahin" , "sifat" , "salman"]



app.get('/', (req,res) => {
    const fruits = {
        name: "ada",
        price:10
    }
    res.send(fruits)
})


app.get('/users/:id', (req,res)=>{
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({name,id})
})
// post
app.post('/addUser', (req,res) =>{
    const user = req.body;
    user.id = 27;
    res.send(user)
})

app.listen(3000, () => {
    console.log('listing to port 3000')
})