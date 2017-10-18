$(document).ready(function() {
    
    $(".menu-item").on('click',function() {
        
        $("#second_page").removeClass("second_page").addClass("second_content");
           
    });
    
    $(".close-item").on('click',function() {
        
        $("#second_page").removeClass("second_content").addClass("second_page");
           
    });
    
});