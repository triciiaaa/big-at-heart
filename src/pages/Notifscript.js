document.addEventListener("DOMContentLoaded", function() {
    
    const notificationsData = [
      "New Submitted Form: BeKind",
      "New User: Jamie",
      "Interview: Derek accepted the interview invitation",
      "New Submitted Form: BeKind",
      "New Submitted Form: BeKind",
      "New Submitted Form: BeKind",
    ];
  
    const notificationsList = document.getElementById("notifications-list");
  
  
    function renderNotifications() {
      notificationsList.innerHTML = ''; 
      notificationsData.forEach((notification, index) => {
        const li = document.createElement("li");
        li.textContent = notification;
  
    
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "buttons-container";

       
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
  
       
        deleteBtn.addEventListener("click", function() {
          deleteNotification(index);
        });
        
       
        const viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.className = "view-btn";
        
        
        viewBtn.addEventListener("click", function() {
          //put the form here
        });

        
        buttonsContainer.appendChild(deleteBtn);
        buttonsContainer.appendChild(viewBtn);
        
        
        li.appendChild(buttonsContainer);
        li.className = "notification";
        notificationsList.appendChild(li); 
      });
    }
  
   
    function deleteNotification(index) {
      notificationsData.splice(index, 1); 
      renderNotifications(); 
    }
  
  
    renderNotifications();

    

   
});
