function CenterContent()
{

    let content = document.getElementById("content");

    if (!isMobile)
    {

        let currentContentWidth = (GetCSSVariablePercent("--contentWidth") / 100) * window.innerWidth;
        let maxContentWidth = GetCSSVariablePixel("--contentMaxWidth");

        if (currentContentWidth > maxContentWidth)
        {

            content.style.left = "calc((100% - var(--contentMaxWidth)) / 2)";

        }
        else if (currentContentWidth <= maxContentWidth)
        {

            content.style.left = "var(--desktopContentLeft)";

        }

        content.style.width = "var(--contentWidth)";

    }
    else
    {
        
        content.style.width = "100%";
        content.style.left = "0";

    }

}

window.addEventListener("load", CenterContent);

window.addEventListener("resize", CenterContent);
