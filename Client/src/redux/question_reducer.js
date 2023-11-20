import { createSlice } from '@reduxjs/toolkit'

/** create reducer  */
export const questionReducer = createSlice({
    name : 'questions',
    initialState : {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers : {
        startExamAction : (state, action) => {
            let { question, answers } = action.payload;
            return {
                ...state,
                queue : question,
                answers
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : () => {
            return {
                queue : [],
                answers : [],
                trace : 0
            }
        },
        addCustomQuestionAction: (state, action) => {
            console.log('Adding custom question to array:', action.payload);
            const { question, options } = action.payload;
            const newQuestion = {
                id: state.queue.length + 1,
                question,
                options,
            };
            console.log('New object:', newQuestion);
            return {
                ...state,
                queue: [...state.queue, newQuestion], // Add new question to the end of the array
                answers: [...state.answers, 0], // Correct answer is always the first option (index 0)
            };
        }    
    }
})

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction, addCustomQuestionAction } = questionReducer.actions;

export default questionReducer.reducer;