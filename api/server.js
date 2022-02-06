const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())


server.get('/', (req, res) => [
    res.send('Hello from server!')
])

const users = [
    {
        user: 'spongebob',
        password: 'krustykrablover'
    },
    {
        user: 'patrick',
        password: 'rock'
    },
    {
        user: 'squidward',
        password: 'clarinet777'
    }
];

const register = [
    {
        user: 'spongebob',
        password: 'krustykrablover'
    }
]

const login = [
    {
        user: 'spongebob',
        password: 'krustykrablover'
    }
]

server.get('/api/users', (req,res) => {
    res.status(200).json(users)
})

server.post('/api/register', (req, res) => {
  res.status(201).json(register)
})

server.post('api/login', (req, res) => {
   if(!login){
      res.status(404).json({
          message: 'Please enter correct credentials'
      })
   }
   else{
       res.status(200).json({
           message: 'Welcome'
       })
   }
})

module.exports = server;

