import React from 'react';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        // create a form that allows the user to enter a question and four options
        // the form should have a submit button that sends the question and options to the server

        <div className= 'container'>
            <h1 className = 'title text-light'>User Inputted Q&A's</h1>

            <form id="form">
                <input className='userid' type="text" placeholder="Enter a question*" />

                {/* <input className='userid' type="text" placeholder="Enter option 1*" />
                <input className='userid' type="text" placeholder="Enter option 2*" />
                <input className='userid' type="text" placeholder="Enter option 3*" />
                <input className='userid' type="text" placeholder="Enter option 4*" /> */}

            </form>

            <div className='start'>
                <Link className='btn_user' to={'/result'}>Cancel</Link>
            </div>

        </div>
    )
}
