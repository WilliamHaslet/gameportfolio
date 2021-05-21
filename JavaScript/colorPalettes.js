function SetColors(themeColor, darkColor, lightColor)
{
    SetCSSVariable("--themeColor", themeColor);
    SetCSSVariable("--themeColorDark", darkColor);
    SetCSSVariable("--themeColorLight", lightColor);
}

function LoadPalette(index)
{
    let main = GetCSSVariable("--palette" + index.toString() + "Main");
    let dark = GetCSSVariable("--palette" + index.toString() + "Dark");
    let light = GetCSSVariable("--palette" + index.toString() + "Light");
    SetColors(main, dark, light);
}

var controlDown = false;

window.addEventListener("keydown", function(e) 
{

    if (e.ctrlKey)
    {

        controlDown = true;

    }

    if (!controlDown)
    {

        LoadPalette(parseInt(e.key));

    }

});

window.addEventListener("keyup", function(e) 
{

    if (e.ctrlKey)
    {

        controlDown = false;

    }

});

LoadPalette(0);
