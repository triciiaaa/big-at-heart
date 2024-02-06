import React from 'react'

import "./VolunteerHomePage.css";
import Navbar from '../components/VolunteerNavbar'
import migrant_blog from '../graphics/Migrant Blog.png'
import migrant_blog_2 from '../graphics/Migrant Blog Two.png'
import volunteer_breakdown from '../graphics/Volunteer Breakdown.png'

const VolunteerHomePage = () => {
  return (
    <body>
    {/* <nav>
      <img src={big_at_heart_logo} alt="Nav" class="nav-image" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="profile-button">P</div>
    </nav> */}

    <Navbar/>

    <div class="dashboard-container">
      <div class="events-section">
        <h2>Upcoming Events</h2>
        <br/>

        <div class="event-box-new">
          <h3>Labour Day Charity Walk</h3>
          <p>Date: January 10, 2024</p>
          <button class="more-details-button-new"><a href="/event-details">More Details</a></button>
        </div>

        <br/>

        <h2>You may be interested in</h2>
        <br/>
        <div class="event-box-new">
          <h3>All About Women Talk</h3>
          <p>Date: February 15, 2024</p>
          <button class="more-details-button">More Details</button>
        </div>

        <br/>

        <div class="event-box-new">
          <h3>Pongol Celebration with Migrant Brothers</h3>
          <p>Date: February 10, 2024</p>
          <button class="more-details-button">More Details</button>
        </div>
      </div>

      <div class="center-section">
        <div class="contribution-header">Your Contribution</div>

        <div class="contribution-section">
          <div class="hours-section">
            <div class="hours-volunteered">1282</div>
            <div class="hours-text">hours volunteered</div>
          </div>
          <img
            src={volunteer_breakdown}
            alt="Volunteer Breakdown"
            class="event-breakdown"
          />
        </div>

        <div class="achievements-header">Achievements</div>

        <div class="achievement-box">
          <div class="achievement-details">
            <div class="achievement-name">First Volunteer Event</div>
            <div class="short-description">
              Thank you for volunteering your time with us! Hope to see you more
              often :)
            </div>
            <div class="achieved-box">Achieved</div>
          </div>
        </div>

        <div class="achievement-box">
          <div class="achievement-details">
            <div class="achievement-name">A Giving Heart</div>
            <div class="short-description">
              Achieve 50 volunteer hours with Big At Heart
            </div>
            <div class="achieved-box">Achieved</div>
          </div>
        </div>

        <div class="achievement-box">
          <div class="achievement-details">
            <div class="achievement-name">Migrant Workers Advocate</div>
            <div class="short-description">
              Volunteer at 10 migrant-related events
            </div>
            <div class="achieved-box">Achieved</div>
          </div>
        </div>

        <div class="view-more">View More</div>
      </div>

      <div class="feed-section">
        <div class="feed-header">
          <h2>Our Impact</h2>
          <button class="add-post-button"><a href="/blog">+</a></button>
        </div>

        <div class="post-container">
          <img src={migrant_blog_2} alt="Post" class="post-image" />
          <div class="post-title">
            Dressing Dreams : Volunteering To Provide Affordable Clothings To
            Migrant Domestic Workers
          </div>
          <div class="like-button">
            <span class="like-icon">&#10084;</span> 20
          </div>
        </div>
        <div class="post-container">
          <img src={migrant_blog} alt="Post" class="post-image" />
          <div class="post-title">
            International Migrant's Day Celebration - My experience
          </div>
          <div class="like-button">
            <span class="like-icon">&#10084;</span> 37
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p>Contact Us: team@bigatheart.org | +65 8776 5740</p>
    </footer>
  </body>
  )
}

export default VolunteerHomePage