import mongoose from 'mongoose'
import { config } from 'dotenv'

config()
const url = process.env.MONGODB_URL

mongoose
  .connect(url)
  .then(res => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB', error.message)
  })

const articleSchema = new mongoose.Schema({
  articleId: String,
  title: String,
  content: String,
  createTime: { type: Date, default: Date.now}
})

const Article = mongoose.model("Article", articleSchema)

export default Article
