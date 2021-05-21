function GetCSSVariable(name)
{

    let variableString = getComputedStyle(document.documentElement).getPropertyValue(name);

    return variableString;
    
}

function GetCSSVariablePercent(name)
{

    let variableString = GetCSSVariable(name);
    
    let variableFloat = parseFloat(variableString.substring(0, variableString.length - 1));

    return variableFloat;

}

function GetCSSVariablePixel(name)
{

    let variableString = GetCSSVariable(name);
    
    let variableFloat = parseFloat(variableString.substring(0, variableString.length - 2));

    return variableFloat;

}

function SetCSSVariable(name, s)
{

    document.documentElement.style.setProperty(name, s);

}
