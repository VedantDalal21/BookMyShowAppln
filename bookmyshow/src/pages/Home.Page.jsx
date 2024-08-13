import React, { useState } from 'react';

// layoutHoc
import DefaultLayoutHoc from '../layouts/Default.Layout';

// components
import EntertainmentCardComponent from '../components/Entertainment/EntertainmentCardComponent';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

const HomePage = () =>{
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreams, setOnlineStreams] = useState([]);
    return(
        <>
            <HeroCarousel/>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The best of Entertainment</h1>
                <EntertainmentCardComponent/>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider 
                title ="Recommended Movies"
                 subject ="List of recommended movies"
                  posters = {recommendedMovies}
                  isDark ={false}/>
            </div>

            <div className='bg-premier-800 py-12'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src="" 
                        alt="RupayImage" className='w-full h-full' 
                        />
                    </div>
                    <PosterSlider 
                    title= "Premier"
                    subject = "Brand new release every Friday"
                    posters = {premierMovies}
                    isDark ={true}
                    />
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8 '>
            <PosterSlider 
                    title= "Online Streaming"
                    subject = "Online Stream Events"
                    posters = {onlineStreams}
                    isDark ={false}
                    />
            </div>
        </>
    )
}

export default DefaultLayoutHoc(HomePage);