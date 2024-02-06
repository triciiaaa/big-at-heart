import './App.css'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Profile from './pages/Profile'
import Blog from './pages/Blog'
import Achievements from './pages/Achievements'
import Error from './pages/Error'
import Login from './pages/Login'
import Report from './pages/Report'
import Calendar from './pages/Calendar'
import AdminHomePage from './pages/AdminHomePage'
import VolunteerHomePage from './pages/VolunteerHomePage'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import AddProject from './pages/AddProject'
import MainProject from './pages/MainProject'
import Responses from './pages/Responses'
import CreateForm from './pages/CreateForm'
import Notifications from './pages/Notifications'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* tricia */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/profile" element={<Profile />} />

          {/* huiling */}
          <Route path="/admin-homepage" element={<AdminHomePage />} />
          <Route path="/report" element={<Report />} />
          <Route path="/calendar" element={<Calendar />} />

          {/* shir er */}
          <Route path="/volunteer-homepage" element={<VolunteerHomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event-details" element={<EventDetails />} />

          {/* nurin */}
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/main-project" element={<MainProject />} />
          <Route path="/create-form" element={<CreateForm />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/responses" element={<Responses />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
