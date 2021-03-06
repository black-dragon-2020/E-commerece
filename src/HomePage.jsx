import React from 'react'
import './HomePage.scss'
const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
              {/*//! Hats  */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Hats</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                {/* //!Jackets */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Jackets</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                {/* //!Snakers*/}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Snakers</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                {/* //!Womens */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Womens</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                {/* //!Mens */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Mens</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;