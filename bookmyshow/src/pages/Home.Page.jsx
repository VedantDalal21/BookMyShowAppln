import React, { useEffect, useState } from 'react';
import axios from "axios";

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

    useEffect(()=>{
        const requestPopularMovies = async () =>{
            const getPopularMovies = await  axios.get(
                 "https://api.themoviedb.org/3/movie/popular?api_key=ccfa4ecd270cd9e26cc5791a495b5aca"
                );
            setPremierMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    useEffect(()=>{
        const requestTopRatedMovies = async () =>{
            const getTopRatedMovies = await axios.get(
                 "https://api.themoviedb.org/3/movie/top_rated?api_key=ccfa4ecd270cd9e26cc5791a495b5aca"
                );
            setRecommendedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(()=>{
        const requestUpcomingMovies = async () =>{
            const getUpcomingMovies = await axios.get(
                 "https://api.themoviedb.org/3/movie/upcoming?api_key=ccfa4ecd270cd9e26cc5791a495b5aca"
                );
            setOnlineStreams(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

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
                 subtitle ="List of recommended movies"
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
                    subtitle = "Brand new release every Friday"
                    posters = {premierMovies}
                    isDark ={true}
                    />
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8 '>
            <PosterSlider 
                    title= "Online Streaming"
                    subtitle = "Online Stream Events"
                    posters = {onlineStreams}
                    isDark ={false}
                    />
            </div>
        </>
    )
}

export default DefaultLayoutHoc(HomePage);