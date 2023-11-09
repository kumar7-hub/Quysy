import React from 'react';
import '../styles/Result.css'
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';

/** import actions */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';


export default function Result() {

    const dispatch = useDispatch();

    function onRestart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())

    }

    return (
        <div className = 'container'>
            <h1 className = 'title text-light'>Results</h1>

            <div className='result flex-center'>
                <div className='flex'>
                    <span>Username</span>
                    <span className='bold'></span>
                </div>
                <div className='flex'>
                    <span>Total Quiz Points : </span>
                    <span className='bold'></span>
                </div>
                <div className='flex'>
                    <span>Total Questions : </span>
                    <span className='bold'></span>
                </div>
                <div className='flex'>
                    <span>Total Attempts : </span>
                    <span className='bold'></span>
                </div>
                <div className='flex'>
                    <span>Total Earn Points : </span>
                    <span className='bold'></span>
                </div>
                <div className='flex'>
                    <span>Quiz Result</span>
                    <span className='bold'></span>
                </div>
            </div>

            <div className='start'>
                <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>

            <div className='container'>
                {/* result table */}
                <ResultTable />
            </div>
        </div>
    )
}