import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

/** Custom Hook */
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'

export default function Questions() {
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions?.options.length).fill(undefined));

    useEffect(() => {
        dispatch(updateResult({ trace, checked: selectedAnswers[trace] }));
    }, [selectedAnswers]);

    function onSelect(i) { 
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[trace] = i;
        setSelectedAnswers(updatedAnswers);
    }

    if (isLoading) return <h3 className='text-light'>isLoading</h3>
    if (serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>

            <ul key={questions?.id}>
                {questions?.options.map((q, i) => (
                    <li key={i}>
                        <input
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                            checked={selectedAnswers[trace] === i}
                        />
                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
