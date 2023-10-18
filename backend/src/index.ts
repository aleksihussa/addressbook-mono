import express, { Application, Request, Response } from 'express'
import { Client } from '@googlemaps/google-maps-services-js'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const app: Application = express()

const PORT: number = 3001
app.use(cors())
app.use(bodyParser.json())

app.get(
    '/api/coordinates',
    async (req: Request, res: Response): Promise<void> => {
        const client = new Client({})
        const address = req.query.address
        const coordinates = []
        await client
            .geocode({
                params: {
                    address: address.toString(),
                    key: process.env.GEOCODING_API_KEY as string,
                },
                timeout: 1000, // milliseconds
            })
            .then((r) => {
                coordinates.push(r.data.results[0].geometry.location)
            })
            .catch((e) => {
                console.log(e.response.data.error_message)
            })

        res.send({ coordinates })
    }
)
app.get('/api/*', (req: Request, res: Response): void => {
    res.status(404).send('Fell to the catcher route, endpoint not found')
})

const start = async () => {
    try {
        await mongoose.connect('mongodb://mongo-srv:27017/')
        console.log('success')
    } catch (error) {
        console.error(error)
    }
    app.listen(PORT, (): void => {
        console.log('SERVER IS UP ON PORT:', PORT)
    })
}

start()
