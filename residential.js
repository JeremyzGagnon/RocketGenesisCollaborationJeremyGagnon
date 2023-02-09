let first_name = document.querySelectorAll(".first-name");
let last_name = document.querySelectorAll(".last-name");
let rating = document.querySelectorAll(".rating");
let fee = document.querySelectorAll(".fee");

let top_tier = [];






// GET method
fetch("http://99.79.77.144:3000/api/agents", {
    method: "GET"
})
.then(res => {
    console.log(res.ok)
    console.log(res.status)
    if (res.ok) return res.json()//JSON.parse(res)
    return Promise.reject(res)
})
.then(data => {
    for(let i = 0; i < data.length; i++) {
        // console.log(data[i])
        if (data[i].rating >= 95) {
            // console.log("YES") //4 times
            top_tier.push(data[i])
            // document.querySelector(".agent-data").innerHTML = data[i].first_name + " " + data[i].last_name
            // console.log(first_name.length)
        }
    for(let i = 0; i < top_tier.length; i++) {
        // console.log(top_tier.length)
        first_name[i].innerHTML = top_tier[i].first_name;
        last_name[i].innerHTML = top_tier[i].last_name;
        rating[i].innerHTML = top_tier[i].rating;
        fee[i].innerHTML = top_tier[i].fee;

    }

    }
})
.catch(res => console.error(res.status))


