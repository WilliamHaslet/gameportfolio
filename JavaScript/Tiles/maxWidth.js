var lastScreenWidth = 0;

window.addEventListener("resize", function()
{
    
    let maxWidth = GetCSSVariablePixel("--postTilesMaxWidth");
    let tileSpacing = GetCSSVariablePixel("--tileSpacing");
    let switchWidth = maxWidth + (tileSpacing * 2);
    
    let element = document.getElementById("postTiles");

    if (window.innerWidth > switchWidth && lastScreenWidth <= switchWidth)
    {

        element.style.marginLeft = "calc((100% - var(--postTilesMaxWidth)) / 2)";
        //element.style.marginLeft = ((window.innerWidth - maxWidth) / 2).toString() + "px";
        
    }
    else if (window.innerWidth <= switchWidth && lastScreenWidth > switchWidth)
    {

        element.style.marginLeft = "var(--tileSpacing)";

    }

    lastScreenWidth = window.innerWidth;

});

window.addEventListener("load", function()
{

    let maxWidth = GetCSSVariablePixel("--postTilesMaxWidth");
    let tileSpacing = GetCSSVariablePixel("--tileSpacing");
    let switchWidth = maxWidth + (tileSpacing * 2);
    
    let element = document.getElementById("postTiles");

    if (window.innerWidth > switchWidth)
    {

        element.style.marginLeft = "calc((100% - var(--postTilesMaxWidth)) / 2)";
        
    }
    else if (window.innerWidth <= switchWidth)
    {

        element.style.marginLeft = "var(--tileSpacing)";

    }

    lastScreenWidth = window.innerWidth;

});
