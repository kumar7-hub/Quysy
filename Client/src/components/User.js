import React from 'react';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className= 'container'>
            <h1 className = 'title text-light'>User Inputted Q&A's</h1>

            <form id="form_user">
                <input className='userid' type="text" placeholder="Enter a question*" />
                
                <input className='userid' type="text" placeholder="Enter option 1*      -    correct answer" />
                <input className='userid' type="text" placeholder="Enter option 2*     -    wrong answer" />
                <input className='userid' type="text" placeholder="Enter option 3*     -    wrong answer" />
                <input className='userid' type="text" placeholder="Enter option 4*     -    wrong answer" />

                <div className='start_user'>
                    <Link className='btn_cancel' to={'/result'}>Cancel</Link>
                    <input className='btn_reset' type="reset" value="Reset" />
                    <input className='btn_user' type="submit" value="Submit" />
                </div>

            </form>

            {/* <div className='start'>
                <Link className='btn_user' to={'/result'}>Cancel</Link>
            </div> */}

        </div>
        
    )
}
