import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HighScore(props) {
    const [name, setName] = useState('')
    
    const handleChange = e => {
        if (e.target.value.length < 13) {
            setName(e.target.value)
        }
    }
    
    const handleSubmit = () => {
        props.submitScore(name)
    }
    
    return (
        <div className="high-score">
            <h2>You got a high score!</h2>
            <h1>{props.score}</h1>
            <h3>Enter your trivia alias below:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={name}
                />
                <br/>
                (limit: 12 characters)
                <br/>
                <Link to="/leaderboard">
                    <button onClick={handleSubmit}>Submit</button>
                </Link>                
            </form>
        </div>
    )
}

export default HighScore