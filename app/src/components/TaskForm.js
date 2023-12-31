import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";

import {useState} from "react"  //....


export default function TaskForm() {

  const [task, setTask] = useState({  //..
    title: '',
    description: '',
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(task);

  }


  const handleChange = (e) =>  //..
    setTask({ ...task, [e.target.name]: e.target.value });
  

  return (
    <Grid container 
          direction="column" 
          alignItems="center" 
          justifyContent="center"
    >
      <Grid item xs={3}>
            <Card 
                sx={{ mt: 5 }} 
                style={{
                  backgroundColor: "#1e272e",
                  padding: "1rem",
                  }}
            >
            <Typography variant="5" textAlign="center" color="white">
              Agregar Infraccion
            </Typography>
            <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField 
                variant="filled"
                label="Titulo"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}

                name="title"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField variant="filled"
                label="Escribe la descripcion"
                multiline
                rows={4}
                sx={{
                  display: 'block',
                  margin: '.5rem 0',
                }}

                name="description"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <Button variant="contained" color="primary" type="submit">
                Enviar
              </Button>

            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
