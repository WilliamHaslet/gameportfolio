var isMobile;

window.addEventListener("load", function() 
{

    isMobile = window.matchMedia("screen and (max-width: 800px)").matches;

});

window.addEventListener("resize", function()
{

    isMobile = window.matchMedia("screen and (max-width: 800px)").matches;
    
});
