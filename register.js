$(document).ready(function(){
    
    var validinput= function() {
        var btnDisabled = ![].some.call(document.getElementById("ali"), function(input) {
                return input.value.length;
          
        });
        
        var submitbutton = document.getElementById("confirmcode2");
        var x = document.getElementById("ali").value;
        console.log(x.length)

        
        if (x.length >10) {
                alert("لطفا رمز عبور خود را با حداقل 6 کاراکتر وارد کنید");
                submitbutton.removeAttribute("disabled");
               
        } 
        else{
            submitbutton.setAttribute("disabled", "disabled");  
        }   
         
    }

      
document.querySelector(".form-two").addEventListener("click", validinput, false);
document.querySelector(".form-two").addEventListener("input", validpass, false);
    var validpass= function() {
        var btnDisabled = ![].some.call(document.getElementById("pass-two"), function(input) {
                return input.value.length;
        
        });
        
        if (btnDisabled) {
            submitBtn.setAttribute("disabled", "disabled");
          } else {
                  var y = document.getElementById("pass-two").value;
                  console.log(y.length)
                 
                  if(y.length >6 ){
                          submitBtn.removeAttribute("disabled");
                 }
                  else{
                        submitBtn.setAttribute("disabled", "disabled");  
                  }        
                 
                  
            
          } 
        
    }

    

})