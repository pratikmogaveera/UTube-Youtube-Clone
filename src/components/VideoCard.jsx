import { Link } from 'react-router-dom'; 
import { Typography, Card, CardContent, CardMedia } from '@mui/material'; 
import { CheckCircle } from '@mui/icons-material'; 
import {  demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    <Card sx={{
            width:{xs: '90vw', sm: '90vw', md: '360px'}, 
            boxShadow:'none', borderRadius:'none', p:1, background:'#1e1e1e'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url} 
                alt={snippet?.title}
                sx = {{ 
                        width: {xs:'90vw', sm:'90vw', md:'358px'}, 
                        height: '180px' }}
            />
        </Link>
        <CardContent sx={{background: '#1e1e1e', height:'90px', p:0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#fff' sx={{pt:2}}>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 50)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                    {snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 50)}
                    <CheckCircle sx={{fontSize:12, color:'gray', ml: '5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )

export default VideoCard