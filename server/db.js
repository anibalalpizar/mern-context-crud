import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js"

export const connect = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI)
        console.log(`Connected to database ${connection.name} on ${connection.host}:${connection.port}`)
    } catch (error) {
        console.log("Error connecting to database", error)
    }
}