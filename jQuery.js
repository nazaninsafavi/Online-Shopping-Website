
$(document).ready(function(){
    $('#show-more').click(function($e){
        $e.preventDefault();
        $('#show-more').hide();
        $('.section-2').show();
    })
    $('#show-less').click(function($e){
        $e.preventDefault();
        $('.section-2').hide();
        $('#show-more').show()
    })
})



window.addEventListener("resize", function() {
    "use strict"; window.location.reload(); 
  });
 document.addEventListener("DOMContentLoaded", function()
 {
 /////// Prevent closing from click inside dropdown
 document.querySelectorAll('.dropdown-menu').forEach(function(element)
 {
         element.addEventListener('click', function(e)
         {
                 e.stopPropagation();
         });
 })
 // make it as accordion for smaller screens
 if (window.innerWidth < 992)
 {
         // close all inner dropdowns when parent is closed
         document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown)
         {
                 everydropdown.addEventListener('hidden.bs.dropdown', function()
                 {
                         // after dropdown is hidden, then find all submenus
                         this.querySelectorAll('.submenu')
                                 .forEach(function(everysubmenu)
                                 {
                                         // hide every submenu as well
                                         everysubmenu
                                                 .style
                                                 .display =
                                                 'none';
                                 });
                 })
         });
         document.querySelectorAll('.dropdown-menu a').forEach(function(element)
         {
                 element.addEventListener('click', function(e)
                 {
                         let nextEl = this.nextElementSibling;
                         if (nextEl && nextEl.classList
                                 .contains('submenu'))
                         {
                                 // prevent opening link if link needs to open dropdown
                                 e.preventDefault();
                                 console.log(nextEl);
                                 if (nextEl.style.display ==
                                         'block')
                                 {
                                         nextEl.style.display =
                                                 'none';
                                 }
                                 else
                                 {
                                         nextEl.style.display =
                                                 'block';
                                 }
                         }
                 });
         })
 }
 // end if innerWidth
 });
 // DOMContentLoaded  end

 function showRegisterForm(){
        $('.loginBox').fadeOut('fast',function(){
            $('.registerBox').fadeIn('fast');
            $('.login-footer').fadeOut('fast',function(){
                $('.register-footer').fadeIn('fast');
            });
            $('.modal-title').html('Register with');
        }); 
        $('.error').removeClass('alert alert-danger').html('');
           
}
function showLoginForm(){
        $('#loginModal .registerBox').fadeOut('fast',function(){
            $('.loginBox').fadeIn('fast');
            $('.register-footer').fadeOut('fast',function(){
                $('.login-footer').fadeIn('fast');    
            });
            
            $('.modal-title').html('Login with');
        });       
         $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
        showLoginForm();
        setTimeout(function(){
            $('#loginModal').modal('show');    
        }, 230);
        
}
function openRegisterModal(){
        showRegisterForm();
        setTimeout(function(){
            $('#loginModal').modal('show');    
        }, 230);
        
}
    
function loginAjax(){
        /*   Remove this comments when moving to server
        $.post( "/login", function( data ) {
                if(data == 1){
                    window.location.replace("/home");            
                } else {
                     shakeModal(); 
                }
            });
        */
    
    /*   Simulate error message from the server   */
         shakeModal();
}
    
function shakeModal(){
        $('#loginModal .modal-dialog').addClass('shake');
                 $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
                 $('input[type="password"]').val('');
                 setTimeout( function(){ 
                    $('#loginModal .modal-dialog').removeClass('shake'); 
        }, 1000 ); 
}





 





        











     