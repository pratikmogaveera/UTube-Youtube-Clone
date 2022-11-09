import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const {searchTerm} = useParams()
    // console.log(searchTerm)

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 1 }}>
            <Typography
                variant="h4"
                fontWeight='bold'
                mb={2}
                sx={{ color: "#FC1503" }}
            ><span style={{ color: 'white' }}>Search Results For: </span>{searchTerm}</Typography>
            
            <Videos videos={videos} sideBarVisible={false}/>
        </Box>
    )
}

export default SearchFeed