import React from 'react'
import { Typography } from "@material-ui/core";
import "../Styling-Components/Progress.css"
function Progress({attempt,guessList}) {
    return (
        <div>
            <Typography style={{marginTop:'50px'}} className="progressBar" variant="h2">Guess # {attempt}</Typography>
            <ul className="progressBar__history">
                {guessList}
            </ul>
        </div>
    )
}

export default Progress
