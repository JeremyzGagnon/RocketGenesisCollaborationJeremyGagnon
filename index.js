let agents;
fetch('http://99.79.77.144:3000/api/agents', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  // use the json
//   console.log(json[0].first_name);
  agents = json;
});

console.log(agents)