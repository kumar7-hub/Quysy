import React from 'react';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className= 'container'>
            <h1 className = 'title text-light'>User Inputted Q&A's</h1>

            <form id="form">
                <input className='userid' type="text" placeholder="Enter a question*" />

                {/* <input className='userid' type="text" placeholder="Enter option 1*" />
                <input className='userid' type="text" placeholder="Enter option 2*" />
                <input className='userid' type="text" placeholder="Enter option 3*" />
                <input className='userid' type="text" placeholder="Enter option 4*" /> */}

            </form>

            <Link className='btn_user' to={'/result'}>Cancel</Link>

        </div>
    )
}
