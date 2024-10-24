import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from './forNews/Slider';
import NewsTop from './forNews/NewsTop';


const News = () => {
    return (
        <div>
            <Header/>
            <NewsTop/>
            <div className='bg-[url(./images/bg_login.png)] bg-cover'>
                <Slider/>
            </div>
            <Footer/>
        </div>
    )
}

export default News;
