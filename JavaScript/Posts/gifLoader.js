let ids = [];
let srcs = [];

function QueueGifLoad(id, src)
{
    
    ids.push(id);
    
    srcs.push(src);

}

function BeginLoadGifs()
{
    
    for (var i = 0; i < ids.length; i++)
    {

        var img = new Image();

        let index = i;

        function LateLoad()
        {
            
            document.getElementById(ids[index]).src = srcs[index];

        }

        img.onload = LateLoad;

        img.src = srcs[i];

    }

}

window.addEventListener("load", BeginLoadGifs);
