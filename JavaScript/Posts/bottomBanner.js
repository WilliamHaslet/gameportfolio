function SetBottomBannerWidth()
{

    if (!isMobile)
    {

        let windowWidth = document.documentElement.clientWidth;
        let currentContentWidth = (GetCSSVariablePercent("--contentWidth") / 100) * windowWidth;
        let maxContentWidth = GetCSSVariablePixel("--contentMaxWidth");

        let bottomBanner = document.getElementById("bottomBanner");

        if (currentContentWidth > maxContentWidth)
        {

            bottomBanner.style.width = document.documentElement.clientWidth.toString() + "px";

            let left = (document.documentElement.clientWidth - maxContentWidth) / 2;

            bottomBanner.style.left = (-left).toString() + "px";
            
        }
        else
        {

            bottomBanner.style.width = document.documentElement.clientWidth.toString() + "px";
            bottomBanner.style.left = (-(windowWidth - currentContentWidth) / 2).toString() + "px";
            
        }

    }
    else
    {
        
        bottomBanner.style.width = "100%";

        bottomBanner.style.left = "0";

    }

}

window.addEventListener("load", SetBottomBannerWidth);

window.addEventListener("resize", SetBottomBannerWidth);
