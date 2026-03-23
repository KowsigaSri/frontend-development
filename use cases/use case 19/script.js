// JSON Data

const dashboardData = {
    stats:[
        {title:"Total Users",value:1200},
        {title:"Revenue",value:"$8,500"},
        {title:"Orders",value:320},
        {title:"Conversion Rate",value:"12%"}
    ],
 
    sales:{
        labels:["Jan","Feb","Mar","Apr","May","Jun"],
        data:[120,190,300,250,220,310]
    },

    users:{
        labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        data:[50,70,90,120,150,170,200]
    }
};


// Render Cards

const cardsContainer = document.getElementById("cardsContainer");

dashboardData.stats.forEach(stat => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <p>${stat.title}</p>
        <h2>${stat.value}</h2>
    `;

    cardsContainer.appendChild(card);

});


// Sales Chart

const salesCtx = document.getElementById("salesChart");

new Chart(salesCtx, {
    type: "bar",
    data: {
        labels: dashboardData.sales.labels,
        datasets: [{
            label: "Sales",
            data: dashboardData.sales.data,
            backgroundColor: "#4CAF50"
        }]
    }
});


// Users Chart

const userCtx = document.getElementById("userChart");

new Chart(userCtx, {
    type: "line",
    data: {
        labels: dashboardData.users.labels,
        datasets: [{
            label: "Users",
            data: dashboardData.users.data,
            borderColor: "#2196F3",
            fill:false
        }]
    }
});