$(document).ready(function(){

    
    
    
    
    
    
    
    
    
    
    //link home
    
    $("#navi_home").click(function(){
        $.each([ "#content_event","#content_news","#content_contact","#content_idol" ], function( index, value ) {
            //alert( index + ": " + value );
            
            $(value).fadeOut("slow",function(){
                $("#content").show("slow");
            });
            
            
            
        })
    
    });
    
    
    
    
   
    //link event
    
    
    $("#navi_event").click(function(){
        $.each([ "#content","#content_news","#content_contact","#content_idol" ], function( index, value ) {
            //alert( index + ": " + value );
            
            $(value).fadeOut("slow",function(){
                $("#content_event").show("slow");
            });
            
            
            
        })
    
    });
    
    
    
    //link news
    
      $("#navi_news").click(function(){
        $.each([ "#content","#content_event","#content_contact","#content_idol" ], function( index, value ) {
            //alert( index + ": " + value );
            
            $(value).fadeOut("slow",function(){
                $("#content_news").show("slow");
            });
            
            
            
        })
    
    });
    
    
    
    
    
    
    
    //link contact
    
    
    
    $("#navi_contact").click(function(){
        $.each([ "#content","#content_event","#content_news","#content_idol" ], function( index, value ) {
            //alert( index + ": " + value );
            
            $(value).fadeOut("slow",function(){
                $("#content_contact").show("slow");
            });
            
            
            
        })
    
    });
    
    
    
    
    
    //link idol
    
    
    
    $("#navi_idol").click(function(){
        $.each([ "#content","#content_event","#content_news","#content_contact"], function( index, value ) {
            //alert( index + ": " + value );
            
            $(value).fadeOut("slow",function(){
                $("#content_idol").show("slow");
            });
            
            
            
        })
    
    });
    
    
    
    
    
    
    
    
    
    
    
      
});


