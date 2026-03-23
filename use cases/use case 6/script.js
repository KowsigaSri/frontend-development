const notificationList = document.getElementById("notificationList");
const countBadge = document.getElementById("count");


let notificationCount = 0;


// Sample notifications (simulated streaming data)
const messages = [
    "New user registered",
    "New order received",
    "Server backup completed",
    "Password changed successfully",
    "New comment on post",
    "Payment received",
    "Profile updated"
];


// Add notification
function addNotification() {
    const message = messages[Math.floor(Math.random() * messages.length)];
 

    const li = document.createElement("li");
    li.textContent = message;


    notificationList.prepend(li);


    notificationCount++;
    countBadge.textContent = notificationCount;


    // Limit notifications to last 5
    if (notificationList.children.length > 5) {
        notificationList.removeChild(notificationList.lastChild);
    }
}


// Simulate real-time streaming (every 3 seconds)
setInterval(addNotification, 3000);
