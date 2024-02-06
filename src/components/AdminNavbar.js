import React from "react";

const AdminNavbar = () => {
  return (
    <nav class="nav">
      <div class="nav-upper-options">
        <div class="option2 nav-option">
          <img
            src="https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-smbjyr2w.png"
            class="nav-img"
            alt="dashboard"
          />
          <h3><a href="/admin-homepage">Dashboard</a></h3>
        </div>

        <div class="nav-option option1">
          <img
            src="https://cdn-icons-png.freepik.com/256/2077/2077502.png"
            class="nav-img"
            alt="projects" 
          />
          <h3><a href="/main-project">Projects</a></h3>
        </div>

        <div class="nav-option option4">
          <img
            src="https://static.thenounproject.com/png/4869734-200.png"
            class="nav-img"
            alt="volunteers"
          />
          <h3>Volunteers</h3>
        </div>

        <div class="nav-option option5">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
            class="nav-img"
            alt="form"
          />
          <h3><a href="/create-form">Forms</a></h3>
        </div>

        <div class="nav-option option3">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
            class="nav-img"
            alt="report"
          />
          <h3><a href="/report">Report</a></h3>
        </div>

        <div class="nav-option option6">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
            class="nav-img"
            alt="settings"
          />
          <h3>Settings</h3>
        </div>

        <div class="nav-option logout">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
            class="nav-img"
            alt="logout"
          />
          <h3>Logout</h3>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
