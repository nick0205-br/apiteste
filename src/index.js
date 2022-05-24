import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import {somar, dobro, temperatura, tabuada, media} from './service.js'

const server = express();
server.use(cors());

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) => {
    try{
        const numero = Number(req.params.numero);

        const d = dobro(numero);
    
        resp.send({
            dobro: d
        })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/somar', (req, resp) => {
    try{
        const a = Number(req.query.a);
        const b = Number(req.query.b);

        const x = somar(a , b)
    
        resp.send({
            soma: x
    })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/somar', (req, resp) => {
    try{
        const { valores: { a, b } } = req.body;

        const x = somar(a , b);
    
        resp.send({
            soma: x
    })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
    
})

server.post('/media', (req, resp) => {
    try{
        const { valores: { a, b, c} } = req.body;

        const x = media(a, b, c);

        resp.send({
            media: x
        })

    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/temperatura', (req, resp) => {
    try{
        const a = Number(req.query.a);

        const x = temperatura(a)
    
        resp.send({
            febre: x
    })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try{
        const a = Number(req.query.a);

        const x = tabuada(a)
    
        resp.send({
            tabuada: x
    })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.listen(process.env.PORT,
              () => console.log(`API online na porta ${process.env.PORT}`));