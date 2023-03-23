import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addmovie from './Addmovie'

const Read1 = () => {
    var [update, setUpdate] = useState(false)
    var [singleValue, setSingleValue] = useState([])
    var [movies, setmovies] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/moviess")
            .then(response => {
                console.log(response.data)
                setmovies(movies = response.data)
            })
            .catch(err => console.log(err))
    }, [])
    const updateMovies = (value) => {
        setSingleValue(value);
        setUpdate(true);
    }
    const deleteMovies = (id) => {
        console.log("delete cllicked" + id);
        axios.delete("http://localhost:3005/movies/" + id)
            .then(response => {
                alert("deleted")
                window.location.reload(false)
            })
    }
    var finalJSX =  <TableContainer>
        <Table>
            <TableHead>
                <TableRow><TableCell>id</TableCell>
                    <TableCell>Movie</TableCell>
                    <TableCell>Director</TableCell>
                    <TableCell>Language</TableCell>
                    <TableCell>Genere</TableCell>
                    <TableCell>Release year</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {movies.map((value, index) => {

                    return <TableRow> <TableCell>{value.id}</TableCell>
                        <TableCell>{value.movie}</TableCell>
                        <TableCell>{value.director}</TableCell>
                        <TableCell>{value.language}</TableCell>
                        <TableCell>{value.genere}</TableCell>
                        <TableCell>{value.releaseyear}</TableCell>
                        <TableCell>
                            <Button color='success' onClick={() => updateMovies(value)}>Update</Button>

                        </TableCell>
                        <TableCell>
                            <Button color='error' onClick={() => deleteMovies(value.name)}>Delete</Button>

                        </TableCell>

                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
    if(update)
    finalJSX=<Addmovie data={singleValue}method="put"/>
    return (
        <div>
            <br/>
            <br/>
            <br/>
            {finalJSX}


        </div>
    )
}

export default Read1
