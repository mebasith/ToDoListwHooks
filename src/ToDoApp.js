import React from "react"
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core"
export default function ToDoApp(){

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
        </Paper>
    )
}

/**
 * TodoForm
 * TodoList
 *  - TodoItem
 */