import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                pl: 2,
                border: '2px solid #e3e3e3',
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                placeholder="Search.."
                onChange={(e) => setSearchTerm(e.target.value)}
                className='search-bar'
                value={searchTerm}
            />
            <IconButton type="submit">
                <Search sx={{ p: '10px', color: 'red' }} />
            </IconButton>
        </Paper>
    )
}

export default SearchBar