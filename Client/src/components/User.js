import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postServerData } from '../helper/helper';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';

export default function User() {
    const dispatch = useDispatch();

    function onRestart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    const initialFormData = {
        question: '',
        options: ['', '', '', ''],
    };

    const [formData, setFormData] = useState(initialFormData);
    const [showsubmissionMessage, setShowSubmissionMessage] = useState(false);

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        if (name === 'options') {
            const updatedOptions = [...formData.options];
            updatedOptions[index] = value;
            setFormData({ ...formData, options: updatedOptions });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Validate if all fields are filled
        if (formData.question && formData.options.every((option) => option.trim() !== '')) {
           try {
                // Make a POST request to the server to add the user-inputted question
                postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, formData, (data) => data);
                
                // Reset form data after submission
                setFormData(initialFormData);
                // Display submission message
                setShowSubmissionMessage(true);
                setTimeout(() => setShowSubmissionMessage(false), 3000);

            } catch (error) {
                console.error('Error submitting user question:', error);
            }

        } else {
            alert('Please fill in all fields before submitting.');
        }
    };

    const handleReset = () => {
        setFormData(initialFormData);
    };

    return (
        <div className='container'>
            <h1 className='title text-light'>User Inputted Q&A's</h1>

            <form id="form_user" onSubmit={handleFormSubmit} onReset={handleReset}>
                <input
                    className='userid'
                    type="text"
                    placeholder="Enter a question*"
                    name="question"
                    value={formData.question}
                    onChange={(e) => handleInputChange(e)}
                    autoComplete='off'
                />

                {[1, 2, 3, 4].map((index) => (
                    <input
                        key={index}
                        className='userid'
                        type="text"
                        placeholder={`Enter option ${index}*${
                            index === 1 ? '      -    correct answer' : '     -    wrong answer'
                        }`}
                        name="options"
                        value={formData.options[index - 1]}
                        onChange={(e) => handleInputChange(e, index - 1)}
                        autoComplete='off'
                    />
                ))}

                <div className='start_user'>
                    <Link className='btn_cancel' to={'/'} onClick={onRestart}>Home</Link>
                    <input className='btn_reset' type="reset" value="Reset" />
                    <input className='btn_user' type="submit" value="Submit" />
                </div>

                {showsubmissionMessage && (
                    <div className='submission-message show glass'>
                        Question and options submitted successfully!
                    </div>
                )}

            </form>

        </div>
    );
}
