import React from "react";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './addItem.css'



export class TodoItem extends React.Component{

handleRemove=()=> this.props.onRemove(this.props.id)

render(){
    const {text}=this.props;
    return(
   <div>
     <div> { text } </div> 
     <Grid item xs={4}>
       
      </Grid>
      <Grid item xs={8} onClick={this.handleRemove}>
        <DeleteOutlinedIcon />
      </Grid>
  
   </div>
    )
}


}