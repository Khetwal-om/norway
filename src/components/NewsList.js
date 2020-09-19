import './NewsList.css'

import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchMyMovie} from '../actions'
import NewsDetail from './NewsDetail'
const API_KEY="66985d7ca06f85297148a6ea70d9ea67"

const Trending=`/trending/all/week?api_key=${API_KEY}&language=en-US`;
const TopRated=`/discover/movie?api_key=${API_KEY}&with_genres=28`;
const ActionMovies=`/discover/movie?api_key=${API_KEY}&with_genres=10749`;
const ComedyMovies= `/discover/movie?api_key=${API_KEY}&with_genres=27`;
const HorrorMovies= `/discover/movie?api_key=${API_KEY}&with_genres=878`;
const RomanceMovies= `/discover/movie?api_key=${API_KEY}&with_genres=9648`;



class NewsList extends Component {
    componentDidMount(){
        this.props.fetchMyMovie(Trending)
    }
    renderNews(){
        return this.props.movies.map(({id,...otherNewsProps})=>
            <NewsDetail key={id} {...otherNewsProps}/>
        )
    }
    render() {
        console.log('about to print the props !')
        console.log(this.props.rated)
        return (
        
           <div className="newslist">
            {this.renderNews()}
           </div>
            
        )
    }
}



const mapStateToProps=state=> {

    return {movies:state}
}


export default connect(mapStateToProps,{fetchMyMovie})(NewsList)
