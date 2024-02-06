import React from 'react'

import './Event.css'
import Navbar from '../components/VolunteerNavbar'
import labour_day_charity_walk from '../graphics/Labour Day Charity Walk.jpg'
import all_about_women from '../graphics/All About Women.png'
import book_santa from '../graphics/Book Santa.png'
import charity_walk from '../graphics/Charity Walk.png'
import pongol_celebration from '../graphics/Pongol Celebration.png'
import sponsor_a_birthday from '../graphics/Sponsor A Birthday.png'
// import big_at_heart_logo from '../graphics/Big At Heart Logo.png'

const Events = () => {
  return (
    <body>
    {/* <nav>
      <img src="Big At Heart Logo.png" alt="Nav" class="nav-image" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="profile-button">P</div>
    </nav> */}

    <Navbar/>   
    
    <div class="event-container">
      <div class="event-box">
        <img
          src={labour_day_charity_walk}
          alt="Event"
          class="event-image"
        />
        <div class="event-details">
          <h3>Labour Day Charity Walk</h3>
          <p>Date: January 10, 2024</p>
          <a href="#" class="learn-more-btn">Learn More</a>
        </div>
      </div>

      <div class="event-box">
        <img src={all_about_women} alt="Event" class="event-image" />
        <div class="event-details">
          <h3>All About Women Talk</h3>
          <p>Date: February 15, 2024</p>
          <a href="#" class="learn-more-btn">Learn More</a>
        </div>
      </div>

      <div class="event-box">
        <img src={book_santa} alt="Event" class="event-image" />
        <div class="event-details">
          <h3>Be a Book Santa</h3>
          <p>Date: January 3, 2024</p>
          <a href="#" class="learn-more-btn">Learn More</a>
        </div>
      </div>

      <div class="event-box">
        <img src={pongol_celebration} alt="Event" class="event-image" />
        <div class="event-details">
          <h3>Pongol Celebration with Migrant Brothers</h3>
          <p>Date: February 10, 2024</p>
          <a href="#" class="learn-more-btn">Learn More</a>
        </div>
      </div>

      <div class="event-box">
        <img src={sponsor_a_birthday} alt="Event" class="event-image" />
        <div class="event-details">
          <h3>Sponsor a Birthday</h3>
          <p>Date: March 16, 2024</p>
          <a href="#" class="learn-more-btn">Learn More</a>
        </div>
      </div>

      <div class="event-box">
        <img src={charity_walk} alt="Event" class="event-image" />
        <div class="event-details">
          <h3>Labour Day Charity Drive 2022</h3>
          <p>Date: March 20, 2024</p>
          <a href="#" class="learn-more-btn">Learn More</a>
        </div>
      </div>
    </div>
    <footer>
      <p>Contact Us: team@bigatheart.org | +65 8776 5740</p>
    </footer>
  </body>
  )
}

export default Events