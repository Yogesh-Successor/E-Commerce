import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';



import './ProductBox.css'
import { useState } from 'react';

function ProductBox({ productList, bookmark, setBookmark }) {
    return (
        <div className='product-list'>
            {productList.map(val => <div key={val.id}
                className='product-box'>
                <div className='product-title'>
                    <Avatar className='char'>Y</Avatar>
                    <h4>{val.title}</h4>
                    <button onClick={setBookmark}>
                        {bookmark ? <BookmarkAddIcon/> : <BookmarkAddedIcon/>}
                    </button>
                </div>
                <img src = {val.images[0]}/>
                <div className='product-body'>
                    <button>
                        <FavoriteIcon style={{ width: '20px' }} />
                    </button>
                    <button>
                        <ThumbDownAltIcon style={{ width: '20px' }} />
                    </button>
                </div>
            </div>
            )}

        </div>
    )
}

export default ProductBox