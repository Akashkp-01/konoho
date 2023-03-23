import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addmovie = (props) => {
    var [movies, setMovies] = useState(props.data)

    const handleChange = (e) => {
        const { name, value } = e.target
        setMovies({ ...movies, [name]: value })
        console.log(movies)
    }
    const saveData = () => {
        console.log("Button clicked")
        if (props.method === "post") {
            axios.post("http://localhost:3005/movies", movies)
                .then(response => {
                    alert("Successfully added")
                })
                .catch(error => {
                    alert("Failed")
                })
        } else if (props.method === "put") {
            axios.put("http://localhost:3005/movies/"+ value.id, movies)
                .then((response) => {
                    console.log("put data" + response.data)
                    alert("success")
                    window.location.reload(false);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div>
   <Typography>Add Students</Typography>
            <form>
                <br /> <TextField label='id' variant='outlined' value={movies.id} name='id' onChange={handleChange} /><br /><br />
                <TextField label='movie' variant='outlined' value={movies.movies} name='movies' onChange={handleChange} /><br /><br />
                <TextField label='director' variant='outlined' value={movies.director} name='director' onChange={handleChange} /><br /><br />
                <TextField label='language' variant='outlined' value={movies.language} name='language' onChange={handleChange} /><br /><br />
                <TextField label='genere' variant='outlined' value={movies.genere} name='genere' onChange={handleChange} /><br /><br />
                <TextField label='release year' variant='outlined' value={movies.releaseyear} name='releaseyear' onChange={handleChange} /><br /><br />
                <Button id='outlined-basic' variant='contained' onClick={saveData}>submit</Button>
            </form>
            
        </div>
    )
}

export default Addmovie