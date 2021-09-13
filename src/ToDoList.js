import React, {Fragment} from "react"
import {Paper, List, Divider, ListItem, ListItemText} from "@material-ui/core"
import ToDo from "./ToDo"

export default function ToDoList({todos, removeTodo, toggleTodo, editTodo}){
    if(todos.length){
        return (
            <Paper>
                <List>
                {todos.map((todo, i)=>(
                    <Fragment key={i}>
                    <ToDo 
                        {...todo}
                        key={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                        />
                        {i < todos.length -1 && <Divider />}
                     </Fragment>
                )
                )}
                </List>
            </Paper>
        )
    }
    return null
}