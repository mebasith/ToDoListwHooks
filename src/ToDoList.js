import React from "react"
import {Paper, List, Divider, ListItem, ListItemText} from "@material-ui/core"


export default function ToDoList(props){
    console.log(props.todos)
    return (
        <Paper>
            
            <List>
            {props.todos.map(todo=>(
                <>
                <ListItem key={todo.id}>
                    <ListItemText>{todo.task}</ListItemText>
                </ListItem> 
                 <Divider/> 
                 </>
            )
            )}
            </List>
        </Paper>
    )
}