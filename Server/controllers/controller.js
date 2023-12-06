import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res) {
    try {
       const q = await Questions.find()
       res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questions */
export async function insertQuestions(req, res){
    try {
        if (!req.body.question && !req.body.options) {
            await Questions.insertMany({ questions, answers }); 
            res.json({ msg: "Data Saved Successfully" });
        } else {
            const { question, options } = req.body;
            const newQuestion = {
                id: questions.length + 1,
                question,
                options,
            }
            questions.push(newQuestion); // add user inputted question to questions array
            answers.push(0); // add 0 (correct answer) to answers array
            await Questions.deleteMany(); // delete all questions from database
            await Questions.insertMany({ questions, answers }); // insert new questions array into database
            res.json({ msg: "User Q&A Saved Successfully" });
        }

    } catch (error) {
        res.json({ error });
    }
}

/** Delete all questions */
export async function dropQuestions(req, res) { 
    try {
       await Questions.deleteMany();
       res.json({ msg: "Questions Deleted Successfully"});
    } catch (error) {
        res.json({ error })
    }
}

/** get all results */
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
       res.json({ error }) 
    }
}

/** post all result */
export async function storeResult(req, res){
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if(!username && !result) {
             throw new Error('Data not provided...!');
        }

        const data = await Results.create({
            username,
            result,
            attempts,
            points,
            achieved,
          });
      
          res.json({ msg: "Result saved successfully" });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }

/** delete all result */
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully"})
    } catch (error) {
        res.json({ error })
    }
}
