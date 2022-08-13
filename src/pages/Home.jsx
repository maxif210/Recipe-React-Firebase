import React from 'react'
import {WebsiteList} from '../components/WebsiteList';
import RecipePage from '../components/RecipePage';

const Home = () => {
    const flexbox = document.querySelector('.d-flex')

    

  return (
    <div>
        <div className="container p-2 bg-secondary bg-gradient">
        <div className="d-flex gap-3 md:flex-column home">
        <WebsiteList/>  
        <RecipePage/>
        </div>

    </div>
    </div>
  )
}

export default Home