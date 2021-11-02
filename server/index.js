import express from 'express'
import Article from './db.js'
import { config } from 'dotenv'

config()

const app = express()

app.use(express.json())

app.get('/api/articles', (req, res) => {
  Article.find({}).then(articles => {
    res.json(articles)
  })
})

app.get('/api/articles/:id', (req, res) => {
  Article.find({ articleId: req.params.id})
    .then(article => {
      if (article) {
        res.json(article)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.post('/api/articles', (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const article = new Article({
    articleId: "generateID2",
    title: body.title,
    content: body.content
  })

  article.save().then(saveArticle => {
    res.json(saveArticle)
  })
})

app.delete('/api/articles/:id', (req, res) => {
  Article.findOneAndRemove({ articleId: req.params.id})
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
