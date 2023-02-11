// Variables declarations
let first_name = document.querySelectorAll(".first-name");
let last_name = document.querySelectorAll(".last-name");
let rating = document.querySelectorAll(".ratings");
let fee = document.querySelectorAll(".fee");
let region = document.querySelectorAll(".region");
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
        region[i].innerHTML = top_tier[i].region;

    }

    }
})
.catch(res => console.error(res.status))

// Sorts the table by first and last name
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

// Filter the table by regions

function filterTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// With button
// function filterTableNorth() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.querySelector(".myInput2").value;
//   filter = input.toUpperCase();
//   table = document.getElementById("table");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[4];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }

// function filterTableSouth() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.querySelector(".myInput3").value;
//   console.log(input)
//   filter = input.toUpperCase();
//   table = document.getElementById("table");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[4];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }


  
