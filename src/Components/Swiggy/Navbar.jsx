import React from 'react'
import './Navbar.css'
import Section from './Section'
const Navbar = () =>{
    return(
        <div className="container">
            <div className="content">
                <a href="/"><img id='logo' src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="Logo" /></a>
                <div className="nav-head">
                    <a href="a" id='swiggy'>Swiggy Corporate</a>
                    <a href="a" id='partner'>Partner with us</a>
                    <a href="a" id='get-app'>Get the App</a>
                    <a href="a" id='sign-in'>Sign in</a>
                </div>
            </div>

            <div className='hero-img'>
                <img id='left-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="hero-img" />
                <div id='hero-text'>Order food & groceries. Discover <br /> best restaurants. Swiggy it!</div>
                <div className='search'>
                    <div className='location'>
                        <i class="fa-solid fa-location-dot" id='location-icon'></i>
                        <div>
                            <input type="text" id="search" placeholder='Enter your delivery location' />
                        </div>
                        <div>
                        <i class="fa-solid fa-angle-down" id='location-down'></i>
                        </div>
                    </div>

                    <div className='search-box'>
                        <div>
                            <input type="text" id="search-field"placeholder='Search for restaurant, item or more' />
                        </div>
                        <i class="fa-solid fa-magnifying-glass" id='search-icon'></i>
                    </div>
                </div>
                <img id='right-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="right-img" />
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <a href="a"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="Food" /></a>
                </div>
                <div className="hero-content">
                    <a href="a"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png" alt="Instamart" /></a>
                </div>
                <div className="hero-content">
                    <a href="a"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" alt="Dineout" /></a>
                </div>
                <div className="hero-content">
                    <a href="a"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" alt="Genie" /></a>
                </div>
                
            </div>
            <Section/>
        </div>
    )
}

export default Navbar