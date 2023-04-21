

function create(){
    var firstname = document.getElementById("firstnameinput").value;
    var lastname = document.getElementById("lastnameinput").value;
    var phonenumber = document.getElementById("phonenumberinput").value;
    var email = document.getElementById("emailinput").value;
    var zipcode = document.getElementById("Zipinput").value;
    var placeofbirth = document.getElementById("placeofbirthinput").value;
    var website = document.getElementById("websiteinput").value;
    var selectgender = document.getElementById("selectgender").value;
    var about = document.getElementById("about").value;
    if(firstname == ''){
        alert("Please write your firstname");
    }else if(lastname == ''){
        alert("Please write your lastname");
    }else if(selectgender == 'Select'){
        alert("Please Select your gender");
    }else if(email == ''){
        alert("Please write your email");
    }else{
        localStorage.setItem("name" , firstname+lastname); // set data
        var name = localStorage.getItem('name'); // get data
        
        localStorage.setItem("email" , email); // set data
        var email = localStorage.getItem('email'); // get data
        
        localStorage.setItem("phonenumber" , phonenumber); // set data
        var phonenumber = localStorage.getItem('phonenumber'); // get data

        localStorage.setItem("website" , website); // set data
        var website = localStorage.getItem('website'); // get data

        localStorage.setItem("placeofbirth" , placeofbirth); // set data
        var placeofbirth = localStorage.getItem('placeofbirth'); // get data

        localStorage.setItem("zipcode" , zipcode); // set data
        var zipcode = localStorage.getItem('zipcode'); // get data

        localStorage.setItem("gender" , selectgender); // set data
        var selectgender = localStorage.getItem('gender'); // get data

        localStorage.setItem("about" , about); // set data
        var about = localStorage.getItem('about'); // get data

        location.replace("templates.html");
    }
    
}
