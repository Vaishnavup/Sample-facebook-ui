$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minLength:4
            },sname:{
                required:true,
                minLength:1
            },emailadds:{
                required:true,
                email:true
            },pass:{
                minLength:4,
                maxLength:16
            },Day:{
                required:true,

            },gender:{
                required:true,  
            }
        }
    })
})