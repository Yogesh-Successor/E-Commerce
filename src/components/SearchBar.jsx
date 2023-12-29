import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

function SearchBar(){
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState({name : ''})
    const handleSearch = (e)=>{
        setSearchValue({name: e.target.value})
    }
    const handleNavigate = ()=>{
        navigate(`/products/${searchValue.name}`)
    }
    return (
        <div>
            <select onChange={handleSearch}>
            <option value='electronics'>Electronics</option>
            <option value='phone'>Phone</option>
            <option value='laptop-pc'>Laptop and PC</option>
            <option value='clothings'>Clothings</option>
            </select>
            <br />
            <button onClick = {handleNavigate}>Move to Product</button>
        </div>
    )
}

export default SearchBar