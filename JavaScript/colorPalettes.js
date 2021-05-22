function LoadPalette(index)
{
    SetCSSVariable("--tileColor", GetCSSVariable("--tileColor" + index.toString()));
    SetCSSVariable("--tileHoverColor", GetCSSVariable("--tileHoverColor" + index.toString()));
    SetCSSVariable("--tileBackgroundColor", GetCSSVariable("--tileBackgroundColor" + index.toString()));
    SetCSSVariable("--pageForegroundColor", GetCSSVariable("--pageForegroundColor" + index.toString()));
    SetCSSVariable("--pageBackgroundColor", GetCSSVariable("--pageBackgroundColor" + index.toString()));
    SetCSSVariable("--bannerColor", GetCSSVariable("--bannerColor" + index.toString()));
    SetCSSVariable("--textColor", GetCSSVariable("--textColor" + index.toString()));
    SetCSSVariable("--bannerTextColor", GetCSSVariable("--bannerTextColor" + index.toString()));

    if (GetCSSVariable("--textColor" + index.toString()) == GetCSSVariable("--black"))
    {
        SetCSSVariable("--iconFilter", "invert()");
    }
    else
    {
        SetCSSVariable("--iconFilter", "none");
    }

    if (GetCSSVariable("--bannerTextColor" + index.toString()) == GetCSSVariable("--black"))
    {
        SetCSSVariable("--bannerIconFilter", "invert()");
    }
    else
    {
        SetCSSVariable("--bannerIconFilter", "none");
    }
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

LoadPalette(9);
