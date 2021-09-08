import React, {useState} from "react"
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core"
import ToDoList from "./ToDoList"
import ToDoForm from "./ToDoForm"

export default function ToDoApp(){
    const initialTodos = [
        {id: 1, task: "Clean Fishtank", completed: false}, 
        {id: 2, task: "Wash Car", completed: true},
        {id:3, task: "Grow Beard", completed: false}
    ]
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodoText => {
        setTodos([...todos, {id:4, task: newTodoText, completed: false}])
    }
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
                <ToDoList todos={todos}/>
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