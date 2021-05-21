function CopyEmailToClipboard()
{

    window.getSelection().removeAllRanges();

    var selectionRange = document.createRange();

    selectionRange.selectNode(document.getElementById("emailText"));
    
    window.getSelection().addRange(selectionRange);
    
    document.execCommand('copy');
    
    window.getSelection().removeAllRanges();
    
}
