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

function TileImage(src, imageID)
{

    return "<img src='" + src + "'id='" + imageID + "' class='tileImage'>";

}

function TileTitle(s, id)
{
    
    return "<p id='" + id + "' class='tileTitle'>" + s + "</p>";

}

function TileDescription(s)
{
    
    let strings = s.split("\n");

    var output = "<p class='tileDescription'><span class='sectionTitle'>" + strings[0] + "</span>";

    for (var i = 1; i < strings.length; i++)
    {

        output += strings[i];

    }
    
    return output + "</p>";

}

function AddTile(title, descriptionArray, htmlPage, normalImage, hoverImage)
{

    let postID = title + "Tile";

    let imageID = title + "Image";

    document.getElementById("postTiles").innerHTML += PostTile(postID, htmlPage, imageID, normalImage, hoverImage);

    let newPost = document.getElementById(postID);

    newPost.innerHTML += TileImage(normalImage, imageID);

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

window.addEventListener("load", CorrectImage);

window.addEventListener("resize", CorrectImage);
