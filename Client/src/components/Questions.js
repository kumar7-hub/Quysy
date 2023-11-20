import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

/** Custom Hook */
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'

export default function Questions({ onChecked, currentQuestionNumber }) {

    const [checked, setChecked] = useState(undefined)
    const { trace, queue } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError}] = useFetchQuestion()

    // const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const questions = queue[trace];
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log('Current trace:', trace);
        console.log("Queue:", queue);
        console.log('Current questions:', questions);

        dispatch(updateResult({ trace, checked}))
    }, [checked, queue])

    function onSelect(i) {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked}))
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unkown Error"}</h3>

    return (
        <div className='questions'>
            <h2 className='text-light'>{`${currentQuestionNumber}. ${questions?.question}`}</h2>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input 
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)}
                            />

                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div> 
                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}