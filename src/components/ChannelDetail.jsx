import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi';
import { Box } from '@mui/material';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const { id } = useParams() 
    
    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data.items[0]))
        
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items))
    }
        , [id])

    return (
        <Box minHeight='90vh'>
            <div style={{background: 'linear-gradient(90deg, rgba(234,146,184,1) 0%, rgba(131,178,234,1) 100%)',
                        zIndex: 10, height: '200px'}}></div>
            <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            
            <Box display='flex' p='2' margin='auto' 
            justifyContent= 'center'
            alignItems= 'center'>
                <Videos videos={videos} sideBarVisible={false} />
            </Box>
        </Box>
    )
}

export default ChannelDetail