import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
        <div className = 'container'>
            <h1 className = 'title text-light'>Quysy</h1>

            <ol>
                <li>In this quiz, 10 questions will be asked to answer.</li>
                <li>You will earn 10 points for every question answered correctly.</li>
                <li>Each question has four options. Select one you believe is correct.</li>
                <li>You can review and change answers before submitting the quiz.</li>
                <li>The result is revealed at end of quiz once all questions are answered.</li>
            </ol>

            <form id="form">
                <input ref={inputRef} className='userid' type="text" placeholder="Username*" />
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>

        </div>
    )
}