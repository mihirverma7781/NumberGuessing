import React from 'react'
import  { TextField, Button } from  '@material-ui/core';

function MyForm({returnGuessToApp}) {
    const onSubmit=(event)=>{
event.preventDefault();
// console.log(event.target.elements.guess.value) 
const guess=event.target.elements.guess.value
returnGuessToApp(guess);
}
    return (

        <form style={{marginTop:'20px'}} onSubmit={onSubmit}>
            <TextField style={{paddingBottom:"20px"}} fullWidth type="number" name ="guess" label="Enter Your Guess..." required/>
            <Button fullWidth variant="contained" color="primary" type="submit">Guess</Button>
        </form>
    )
}


export default MyForm
