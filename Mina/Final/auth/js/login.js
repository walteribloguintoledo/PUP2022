
    const str = localStorage.getItem("alluser");
    const parsedArr = JSON.parse(str);
    console.log(parsedArr);
    $("#login").click(function(){
         var search =  $("#user").val();
         var pass =  $("#password").val();
        
        for (var i= 0; i < parsedArr.length; i++) {
            if(parsedArr[i]["username"] == search||parsedArr[i]["email"] == search){
                console.log("Confirm");
                if(parsedArr[i]["password"] == pass){
                    alert("Your Log-in is successfull!!! \n Welcome, "+ parsedArr[i]["name"]);
                    const jsonArr = JSON.stringify(parsedArr[i]);
                    localStorage.setItem("currentuser", jsonArr);
                    window.location.href = 'http://joshuamina/Day3/Authentication/#/home';
                }
                else{
                    alert("Incorrect username/email or password\n Please Try Again!")
                }
            }
            
        }
        

    });
    $("#logout").click(function(){
        //const str = localStorage.getItem("currentuser");
        // const parsedArr = JSON.parse(str);
        // var blank = "";
        // const jsonArr = JSON.stringify(blank);
        // localStorage.setItem("currentuser", jsonArr);
        localStorage.removeItem('currentuser');

    });
