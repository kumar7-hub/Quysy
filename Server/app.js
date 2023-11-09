const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb} = require('./db')

//init app & middleware
const app = express()
app.use(express.json())
//db connection
let db
connectToDb((err) => {
  if (!err){
    app.listen(3000, () => {
        console.log('app listening on port 3000')
    })
    db = getDb()
  }
})

//routes
app.get('/problems', (req,res) => {
//current page
const page = req.query.p || 0
const problemsPerPage = 10


    let problems = []

    db.collection('problems')
        .find() //cursor toArray OR forEach
        .sort({questions: 10 })
        .skip(page * problemsPerPage)
        .limit(problemsPerPage)
        .forEach(problem => problems.push(problem))
        .then(() => {
            res.status(200).json(problems)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documants'})
        })
});

//for a single problem
app.get('/problems/:id', (req,res) => {

    if(ObjectId.isValid(req.params.id)) {
        db.collection('problems')
        .findOne({ _id: ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not fetch the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})

app.post('/problems', (req, res) => {
    const problem = req.body

    db.collection('problems')
    .insertOne(problem)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json({err: 'Could not create a new document'})
    })
})

app.delete('/problems/:id', (req,res) => {
    if(ObjectId.isValid(req.params.id)) {
        db.collection('problems')
        .deleteOne({ _id: ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not delete the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
    })

app.patch('/problems/:id', (req,res) => {
    const updates = req.body

    if(ObjectId.isValid(req.params.id)) {
        db.collection('problems')
        .updateOne({ _id: ObjectId(req.params.id)}, {$set: updates })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not update the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})