import { useEffect, useState } from "react"
import ProductBox from "../components/ProductBox"
import { ThemeContext } from "@mui/styled-engine"
import axios from 'axios'

import './Product.css'

function Product(){
    const [bookmark, setBookmark] = useState(true)
    const handleBookmark = ()=>{
        setBookmark(!bookmark)
    }
    const [productList, setProductList] = useState([])
    useEffect(
        ()=>{
            axios.get('https://dummyjson.com/products')
            .then(result => result.data.products)
            .then(data => setProductList(data))
            .catch(err=> console.log('Product API not working'))
        }, []
    )
    return(
        <div>
            <ProductBox productList = {productList} bookmark = {bookmark} setBookmark = {handleBookmark}/>
        </div>
    )
}

export default Product