function CenterBottomBannerContent()
{

    let elements = document.getElementsByClassName("linkGroup");
    
    for (var i = 0; i < elements.length; i++)
    {
        
        elements[i].style.marginLeft = "";

    }

    if (isMobile)
    {

        for (var i = 0; i < elements.length; i++)
        {
            
            elements[i].style.marginLeft = ((document.documentElement.clientWidth - elements[i].getBoundingClientRect().width) / 2).toString() + "px";

        }

    }
    else
    {

        var contentWidth = GetCSSVariablePixel("--linkSpacing") * 3;

        for (var i = 0; i < 4; i++)
        {

            contentWidth += elements[i].getBoundingClientRect().width;

        }

        elements[0].style.marginLeft = ((document.documentElement.clientWidth - contentWidth) / 2).toString() + "px";
        elements[2].style.marginLeft = "0px";

        elements[4].style.marginLeft = ((document.documentElement.clientWidth - elements[4].getBoundingClientRect().width) / 2).toString() + "px";

        contentWidth = GetCSSVariablePixel("--linkSpacing");

        for (var i = 5; i < 7; i++)
        {

            contentWidth += elements[i].getBoundingClientRect().width;

        }
        
        elements[5].style.marginLeft = ((document.documentElement.clientWidth - contentWidth) / 2).toString() + "px";

    }

}

window.addEventListener("load", CenterBottomBannerContent);

window.addEventListener("resize", CenterBottomBannerContent);
