import { connect } from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

export const connectToMongoDB = async () => {

  await connect(process.env.MONGODB_CONNECTION_URL)

}
