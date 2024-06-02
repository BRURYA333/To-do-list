import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './addItem.css'


export class AddItem extends React.Component{

state={
    value:'',
}

handleChange=(e)=>{
    this.setState({value:e.target.value})
}

handleClick=()=>{
    const{value}=this.state
    const{onAdd}=this.props
    this.setState({value:''})
    onAdd(value)
}

render(){
    const{value}=this.state;
    return(
        <div className="container">
             <TextField 
             id="outlined-basic" 
             label="To do" 
             variant="outlined" 
             value={value} 
             onChange={this.handleChange} 
             />
             <br></br>
            
            <Button variant="contained" onClick={this.handleClick}>Add</Button>
        </div>
    )
}
}



