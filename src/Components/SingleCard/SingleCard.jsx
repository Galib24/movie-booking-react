import React from 'react';

const SingleCard = (props) => {
    const {movie} = props;
    console.log(movie);
    return (
        <div className="movie-card card text-center w-100 m-auto">
            <div className="movie-poster w-25 m-auto">\
                <img className='w-75' src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg" alt="" />
            </div>
            <h3>Dark hole</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="timeAndRating d-flex justify-content-around">
                <p>watchTime</p>
                <p>Rating</p>
            </div>
            <button className='btn btn-info w-75 m-auto'>Book Now</button>
        </div>
    );
};

export default SingleCard;