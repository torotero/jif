$(document).ready(function(){

    
    
    
    
    
    
    
    
    
    
    
    
    $("#navi_home").click(function(){
        $("#content").fadeOut("slow");
    
    });
    
    
    
    
    $("#navi_event").click(function(){
        
        $("#content").fadeOut("slow",function(){
            $("#content_event").show("slow");
        });
        
        
        
        
        
        
        
        
    
    });
    
    
      $("#navi_news").click(function(){
        $("#content").fadeOut();
    
    });
    
    
      $("#navi_contact").click(function(){
        $("#content").fadeOut();
    
    });
    
    
    
      $("#navi_idol").click(function(){
        $("#content").fadeOut();
    
    });
    
    

});


