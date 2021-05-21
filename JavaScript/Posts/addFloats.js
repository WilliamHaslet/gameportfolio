function AddFloats()
{

    let elements = document.getElementsByClassName("pair");
    
    for (var i = 0; i < elements.length; i++)
    {
        
        elements[i].firstElementChild.className += " floatLeft";
        elements[i].lastElementChild.className += " floatRight";
        
    }
    
}

window.addEventListener("load", AddFloats);
