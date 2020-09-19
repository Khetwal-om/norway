import React from 'react'
import './NewsDetail.css'

import FavoriteIcon from '@material-ui/icons/Favorite';


import TvIcon from '@material-ui/icons/Tv';

// function NewsDetail({title,author,content,description,publishedAt,url,urlToImage}) {
const base_url="https://image.tmdb.org/t/p/original/";

function NewsDetail({title,overview,original_name,backdrop_path,poster_path,vote_count,release_date}) {
    return (
        <div className="newsdetail">
            
            <div className="newsdetail__image">
                <img src={`${base_url}${backdrop_path||poster_path}`} alt=""/>
            </div>
            <div className="newsdetail__title">
                {title ||original_name}      <span> {release_date} </span>
            </div>
            <div className="newsdetail__description">
                {vote_count}    <FavoriteIcon />
            </div>
        </div>
    )
}

export default NewsDetail
