import React, { Component } from 'react'


import {movies} from '../movieData'
 
export class MovieList extends Component {
  render() {
      let moviesArr = movies.results
   
console.log(moviesArr)
    return (
       <>
        <div>
          <h3 className='text-center'> <strong>Trending</strong></h3>
        </div>   
        

        
        <div className='movies-list'>
                
                    <div className='row'>
                        {
                    moviesArr.map((movieElem)=>(
                        <div className='col-md-4 my-2'>
                        <div className="card" style={{minHeight:"50vh"}}>
                        <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{movieElem.title}</h5>
                        </div>
                        </div>
                        </div>
                  ))
                  

                }</div>
        </div>
        </> 
    )
  }
}

export default MovieList