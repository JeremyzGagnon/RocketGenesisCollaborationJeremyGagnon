const form = document.getElementById("contact-form");

// POST method for the contact form
form.addEventListener('submit', function(event) {

    let user = {
      fullname: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      company_name: document.getElementById("company-name").value,
      project_name: document.getElementById("project_name").value,
      project_desc: document.getElementById("project_description").value,
      department: document.getElementById("department").value,
      message: document.getElementById("message").value,
      file: document.getElementById("attachment").value
  }

    fetch("http://99.79.77.144:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
        })
        .then((response) =>  {return response.json()})
        .then((data) => {
            console.log(data)
            window.alert('Success:', data);
        })
        .catch( (error) => {
            window.alert( 'Error:', error);
        });
  }
)
