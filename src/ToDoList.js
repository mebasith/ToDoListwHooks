import React, {Fragment} from "react"
import {Paper, List, Divider, ListItem, ListItemText} from "@material-ui/core"


export default function ToDoList(props){
    console.log(props.todos)
    return (
        <Paper>
            
            <List>
            {props.todos.map(todo=>(
                <Fragment key={todo.id}>
                <ListItem >
                    <ListItemText>{todo.task}</ListItemText>
                </ListItem> 
                 <Divider/> 
                 </Fragment>
            )
            )}
            </List>
        </Paper>
    )
}