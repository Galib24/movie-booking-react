import React from 'react';

const SingleCard = ({movie,handleWatchTime}) => {
    console.log(movie);

  const [disable, setDisable] = React.useState(false)


    return (
        <div className="movie-card card text-center w-100 m-auto col-md-6">
            <div className="movie-poster w-25 m-auto">\
                <img className='w-75' src={movie.poster} alt="" />
            </div>
            <h3>{movie.movieName}</h3>
            <p>{movie.description}</p>
            <div className="timeAndRating d-flex justify-content-around">
                <p>watchTime {movie.watchTime}</p>
                <p>ImBDRating: {movie.imdbRating}</p>
            </div>
            <button disabled = {disable}
            onClick={()=>{
                setDisable(true);
                handleWatchTime(movie.watchTime)}} className='btn btn-info w-75 m-auto'>Book Now</button>
        </div>
    );
};

export default SingleCard;