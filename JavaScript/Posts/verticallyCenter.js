function VerticallyCenter()
{

    let elements = document.getElementsByClassName("verticallyCenter");

    if (isMobile)
    {
        
        for (var i = 0; i < elements.length; i++)
        {
            
            elements[i].firstElementChild.style = "";
            elements[i].lastElementChild.style = "";

        }
        
    }
    else
    {

        for (var i = 0; i < elements.length; i++)
        {

            let element1 = elements[i].firstElementChild;
            let element2 = elements[i].lastElementChild;

            let element1Height = element1.getBoundingClientRect().height;
            let element2Height = element2.getBoundingClientRect().height;

            if (element1Height > element2Height)
            {

                element2.style.marginTop = ((element1Height / 2) - (element2Height / 2)).toString() + "px";
                
            }
            else if (element1Height < element2Height)
            {

                element1.style.marginTop = ((element2Height / 2) - (element1Height / 2)).toString() + "px";

            }
            
        }
        
    }

}

window.addEventListener("load", VerticallyCenter);

window.addEventListener("resize", VerticallyCenter);
