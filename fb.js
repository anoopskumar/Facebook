
$(document).ready(function(){
    
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,minlength:4
                
            },
            sname:{
                required:true,minlength:4
            },
            fmail:{
                required:true,
                
                email:true
            },
            pass:{
                required:true,
                pwcheck:true,
                minlength:4,
                maxlength:9
                
            },
           
            repass:{
                required:true,
                minlength:4,
                maxlength:9
                
            },
          /*  repass:{
               required:true,
                equalTo:"#pass",
                minlength:4,
                maxlength:9
            },*/
            fday:{
                required:true
            },
            fmon:{
                required:true
            },
            fyear:{
                required:true
            },
            ge:{
                required:true
            }

            
        },
        messages:{
            
            repass:{
                required:"retype password"
            }
        }
    })
   
})