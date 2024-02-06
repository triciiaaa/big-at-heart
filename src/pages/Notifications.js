import React from 'react'

import "./Notifications.css";
import AdminNavbar from '../components/AdminNavbar'

const Notifications = () => {
  return (
    <body> 
	
	{/* <!-- for header part --> */}
	<header> 

		<div class="logosec"> 
			<div class="logo">Big At Heart</div> 
		</div> 

		<div class="searchbar"> 
			<input type="text"
				placeholder="Search"/> 
			<div class="searchbtn"> 
			<img src= 
"https://static-00.iconduck.com/assets.00/search-icon-2048x2048-zik280t3.png"
					class="icn srchicn"
					alt="search-icon"/> 
			</div> 
		</div> 

		<div class="message"> 
			<div class="circle"></div> 
			<img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
				class="icn"
				alt=""/> 
			<div class="dp"> 
			<img src= 
"data:image/jpeg;base64,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"
					class="dpicn"
					alt="dp"/> 
			</div> 
		</div> 

	</header> 

	<div class="main-container"> 
		<div class="navcontainer"> 
            <AdminNavbar/>
			{/* <nav class="nav"> 
				<div class="nav-upper-options"> 
					<div class="option2 nav-option"> 
						<img src= 
"https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-smbjyr2w.png"
							class="nav-img"
							alt="dashboard"/> 
						<h3> Dashboard</h3> 
					</div> 

					<div class="nav-option option1"> 
						<img src= 
"https://cdn-icons-png.freepik.com/256/2077/2077502.png"
							class="nav-img"
							alt="projects"/> 
						<h3> Projects</h3> 
					</div> 
 

					<div class="nav-option option4"> 
						<img src= 
"https://static.thenounproject.com/png/4869734-200.png"
							class="nav-img"
							alt="volunteers"/> 
						<h3> Volunteers</h3> 
					</div> 

					<div class="nav-option option5"> 
						<img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
							class="nav-img"
							alt="form"/> 
						<h3> Forms</h3> 
					</div> 

                    <div class="nav-option option3"> 
						<img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
							class="nav-img"
							alt="report"/> 
						<h3> Report</h3> 
					</div>

					<div class="nav-option option6"> 
						<img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
							class="nav-img"
							alt="settings"/> 
						<h3> Settings</h3> 
					</div> 

					<div class="nav-option logout"> 
						<img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
							class="nav-img"
							alt="logout"/> 
						<h3>Logout</h3> 
					</div> 

				</div> 
			</nav>  */}
		</div> 
		<div class="main"> 

			<div class="searchbar2"> 
				<input type="text"
					name=""
					id=""
					placeholder="Search"/> 
				<div class="searchbtn"> 
				<img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
						class="icn srchicn"
						alt="search-button"/> 
				</div> 
			</div> 

			<div class="box-container"> 

			
				<div class="notifications-container">
					<h1>Notifications</h1>
					<ul id="notifications-list"/>
					 
					
					  
				  </div>
				  <script src="Notifscript.js"></script> 

			

		</div> 
	</div> 
    </div>

	

	
</body>
  )
}

export default Notifications