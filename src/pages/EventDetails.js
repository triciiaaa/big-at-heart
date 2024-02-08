import React from "react";

import { Stack } from '@mui/material';

import "./EventDetails.css";
import Navbar from "../components/VolunteerNavbar";
import labour_day_charity_walk from "../graphics/Labour Day Charity Walk.jpg";

const EventDetails = () => {
  return (
    <body>
      {/* <nav>
      <img src="Big At Heart Logo.png" alt="Nav Image" class="nav-image" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="profile-button">P</div>
    </nav> */}

      <Navbar />

      <div class="event-container-new">
        <Stack direction="row" alignItems="center" gap="50px" padding="50px">
          <div class="event-image">
            <img src={labour_day_charity_walk} alt="Event" />
          </div>
          <div class="event-details">
            <h2>Labour Day Charity Walk</h2>
            <p>Date: 4 September 2023</p>
            <p>Time: 6:00 PM - 9:00 PM</p>
            <p>Venue: Pipeline Trail</p>

            <div class="volunteer-form">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />

              <label for="contact">Contact:</label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Your Contact Number"
                required
              />

              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div class="volunteer-button">
              <a href="#">Volunteer with Us</a>
            </div>
          </div>
        </Stack>
        <div class="event-description">
          <h3>About the Event</h3>
          <p>
            Walk the lush green, scenic, serene Pipeline Trail that runs on top
            of the pipes that brings in water from Malaysia to Singapore. Bring
            your family and friends along on this meaningful walk for charity.
            The raised funds will be used for providing necessities to Migrant
            Workers on Labour Day under the guidance of Ministry of Manpower.
          </p>
        </div>
      </div>

      <footer>
        <p>Contact Us: team@bigatheart.org | +65 8776 5740</p>
      </footer>
    </body>
  );
};

export default EventDetails;
