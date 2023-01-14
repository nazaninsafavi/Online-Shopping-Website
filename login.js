$(document).ready(function(){
    var toggleSubmit = function() {
            var isDisabled = ![].some.call(document.querySelectorAll("input[type=text]"), function(input) {
                    return input.value.length;
              
            });
            
            var submitBtn = document.querySelector("input[type=submit]");
        

            
            if (isDisabled) {
              submitBtn.setAttribute("disabled", "disabled");
            } else {
                    var x = document.getElementById("sara").value;
                    console.log(x.length)
                   
                    if(x.length >10 ){
                            submitBtn.removeAttribute("disabled");
                   }
                    else{
                          submitBtn.setAttribute("disabled", "disabled");  
                    }        
                   
                    
              
            }

          };
          
    document.querySelector(".form-one").addEventListener("input", toggleSubmit, false);
})    