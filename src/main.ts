import * as dotenv from 'dotenv'
dotenv.config();

import express, { Request, Response, NextFunction } from 'express'
import { json, urlencoded } from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import { 
    newGroupRouter, 
    deleteGroupRouter, 
    updateGroupRouter, 
    showGroupRouter, 
    showMembersRouter,
    joinGroupRouter,
    leaveGroupRouter
} from './routers'

const app = express()

app.use(cors(
    {
        origin: "*",
        optionsSuccessStatus: 200
    }
))

app.use(urlencoded({
    extended: false
}))
app.use(json())

app.use(newGroupRouter)
app.use(deleteGroupRouter)
app.use(updateGroupRouter)
app.use(showGroupRouter)
app.use(showMembersRouter)

app.use(joinGroupRouter)
app.use(leaveGroupRouter)


declare global {
    interface CustomError extends Error {
        status?: number
    }
}

app.use((error: CustomError, req: Request, res: Response, next: NextFunction) => {
    if(error.status) {
        return res.status(error.status).json({ message: error.message });
    }
    res.status(500).json({ message: 'something went wrong' })
})

const start = async () => {
    if(!process.env.MONGO_URI) throw new Error('MONGO_URI is required!')
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(8080, ()=>console.log('server is up and running on port 8080'))
    } catch (err) {
        throw new Error('database error!')
    }
}

start()