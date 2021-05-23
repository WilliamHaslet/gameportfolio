var imageSwitchDelay;

let imageData = [];

function SwitchToGif(id, src)
{
    
    if (!isMobile)
    {

        let fullCurrentSrc = document.getElementById(id).src;
        
        let lastIndex = fullCurrentSrc.lastIndexOf("/");

        let currentSrc = fullCurrentSrc.substring(lastIndex + 1, fullCurrentSrc.length);

        lastIndex = src.lastIndexOf("/");

        let newSrc = src.substring(lastIndex + 1, src.length);
        
        if (currentSrc != newSrc)
        {

            document.getElementById(id).src = src;

        }
        else
        {

            clearTimeout(imageSwitchDelay);

        }

    }
    
}

function SwitchToImage(id, src)
{
    
    if (!isMobile)
    {

        imageSwitchDelay = setTimeout(function()
        {

            document.getElementById(id).src = src;

        }, 10);
        
    }
    
}

function PostTile(id, htmlPage, imageID, normalSrc, hoverSrc)
{

    imageData.push([imageID, normalSrc, hoverSrc]);

    return "<a href='" + htmlPage + "' \
            onmouseover='SwitchToGif(\"" + imageID + "\", \"" + hoverSrc + "\")' \
            onmouseout='SwitchToImage(\"" + imageID + "\", \"" + normalSrc + "\")' \
            class='postLink'><div id='" + id + "' class='postTile'></div></a>";

}

function TileImage(normalSrc, hoverSrc, imageID)
{

    return `<img src="${normalSrc}" id="${imageID}" class='tileImage'>
            <img src="${hoverSrc}" width=0>`;

}

function TileTitle(s, id)
{
    
    return "<p id='" + id + "' class='tileTitle'>" + s + "</p>";

}

function TileDescription(s)
{
    
    let strings = s.split("\n");
    
    var output;

    if (strings.length == 1)
    {

        output = "<p class='tileDescription sectionTitle'>" + strings[0] + "</p>";

    }
    else
    {

        output = "<p class='tileDescription sectionTitle sectionTitleSpacing'>" + strings[0] + "</p>";

    }

    for (var i = 1; i < strings.length; i++)
    {

        if (i == strings.length - 1)
        {

            output += "<p class='tileDescription bulletSpacing bulletSpacingBig'>" + strings[i] + "</p>";

        }
        else
        {

            output += "<p class='tileDescription bulletSpacing'>" + strings[i] + "</p>";

        }

    }
    
    return output;

}

function AddTile(title, descriptionArray, htmlPage, normalImage, hoverImage)
{

    let postID = title + "Tile";

    let imageID = title + "Image";

    document.getElementById("postTiles").innerHTML += PostTile(postID, htmlPage, imageID, normalImage, hoverImage);

    let newPost = document.getElementById(postID);

    if (window.matchMedia("screen and (max-width: 800px)").matches)
    {
        
        newPost.innerHTML += TileImage(hoverImage, "", imageID);
        
    }
    else
    {

        newPost.innerHTML += TileImage(normalImage, hoverImage, imageID);

    }
    
    newPost.innerHTML += TileTitle(title, title);

    for (var i = 0; i < descriptionArray.length; i++)
    {

        newPost.innerHTML += TileDescription(descriptionArray[i]);

    }

}

function AddTileSpacer()
{

    document.getElementById("postTiles").innerHTML += "<div class='postTile tileSpacer'></div>";

}

function CorrectImage()
{

    for (var i = 0; i < imageData.length; i++)
    {

        if (isMobile)
        {
        
            document.getElementById(imageData[i][0]).src = imageData[i][2];

        }
        else
        {

            document.getElementById(imageData[i][0]).src = imageData[i][1];

        }

    }

}

window.addEventListener("resize", CorrectImage);
