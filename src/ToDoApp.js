import React, {useState, useEffect} from "react"
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core"
import ToDoList from "./ToDoList"
import ToDoForm from "./ToDoForm"
import useTodoState from "./hooks/useTodoState";

export default function ToDoApp(){
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)
    
    useEffect(()=>{
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <Paper
            style = {{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
        <AppBar color="primary" position='static' style={{ height: "64px"}}>
            <Toolbar>
                <Typography color="inherit">TODOS WITH HOOKS</Typography>
            </Toolbar>
        </AppBar>
        <Grid container justifyContent="center" style={{marginTop:"1rem"}}>
            <Grid item xs={10} md={8} lg={4}>
                <ToDoForm addTodo={addTodo}/>
                <ToDoList 
                    todos={todos}
                    removeTodo={removeTodo}
                    toggleTodo = {toggleTodo}
                    editTodo = {editTodo}
                    />
            </Grid>
        </Grid>
        
        </Paper>
    )
}

/**
 * TodoForm
 * TodoList
 *  - TodoItem
 * Each Todo: id, task, completed (t/f)
 */