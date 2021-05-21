function SetBottomBannerWidth()
{
    
    let maxWidth = GetCSSVariablePixel("--postTilesMaxWidth");
    let tileSpacing = GetCSSVariablePixel("--tileSpacing");
    let switchWidth = maxWidth + (tileSpacing * 2);
    
    let bottomBanner = document.getElementById("bottomBanner");

    if (window.innerWidth > switchWidth)
    {

        bottomBanner.style.width = document.documentElement.clientWidth.toString() + "px";

        let left = (document.documentElement.clientWidth - maxWidth) / 2;

        bottomBanner.style.left = (-left).toString() + "px";

    }
    else if (window.innerWidth <= switchWidth)
    {

        bottomBanner.style.width = document.documentElement.clientWidth.toString() + "px";
        bottomBanner.style.left = (-tileSpacing).toString() + "px";
        
    }

}

window.addEventListener("load", SetBottomBannerWidth);

window.addEventListener("resize", SetBottomBannerWidth);
