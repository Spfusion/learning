function setdata(){
    var user = document.getElementById('name').value
    var email = document.getElementById('email').value
    var address = document.getElementById('address').value
    var city = document.getElementById('city').value




   if(user == "" || email == "" || address == "" || city == "")
     {
    //  alert("Please fill the form first");
     }
     else
     {


     localStorage.setItem("name",user)
     localStorage.setItem("email",email)
     localStorage.setItem("address",address)
     localStorage.setItem("city",city)
     }

        }

        $("#form1").validate();