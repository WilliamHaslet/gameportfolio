function NewLinkGroup(linkHref, imgSrc, textContent)
{

    return `
    <div class="linkGroup">
        <a href="${linkHref}" target="_blank" class="linkGroupLink" 
            onmouseover="OnLinkGroupHover(this)" onmouseout="OnLinkGroupHoverEnd(this)">

            <img src="${imgSrc}" class="linkGroupImage">

            <p class="linkGroupText">${textContent}</p>

        </a>
    </div>
    `;

}

function AddBottomBannerContent(projectRoot)
{
    
    let bottomBanner = document.getElementById("bottomBanner");

    bottomBanner.innerHTML += `

        <p class="sectionText">Check out my...</p>

        ${NewLinkGroup("https://www.linkedin.com/in/williamhaslet/", 
            `${projectRoot}Images/Logos/linkedinLogo.png`, 
            "LinkedIn")}

        ${NewLinkGroup("https://github.com/WilliamHaslet", 
            `${projectRoot}Images/Logos/githubLogo.png`, 
            "GitHub")}
        
        ${NewLinkGroup("https://williamhaslet.itch.io/", 
            `${projectRoot}Images/Logos/itchioLogo.png`, 
            "itch.io")}

        ${NewLinkGroup("${projectRoot}Downloads/Resume-WilliamHaslet.pdf", 
            `${projectRoot}Images/Logos/pdfIcon.png`, 
            "Resume")}

        <p id="emailSectionText" class="sectionText">Email me at...</p>

        <div class="linkGroup emailGroup">

            <p id="emailText" class="linkGroupText">williamhaslet@gmail.com</p>

        </div>

        <div class="linkGroup emailGroup">
            <a class="linkGroupLink"
                onclick="CopyEmailToClipboard()"
                onmouseover="OnLinkGroupHoverThin(this)" onmouseout="OnLinkGroupHoverEnd(this)">

                <img src="${projectRoot}Images/Logos/copyIcon.png" class="linkGroupImage emailLinkIcon">

                <p class="linkGroupText emailLinkText">Copy to Clipboard</p>

            </a>
        </div>

        <div class="linkGroup emailGroup">
            <a href="mailto:williamhaslet@gmail.com" target="_blank" class="linkGroupLink" 
                onmouseover="OnLinkGroupHoverThin(this)" onmouseout="OnLinkGroupHoverEnd(this)">

                <img src="${projectRoot}Images/Logos/emailIcon.png" id="emailIcon" class="linkGroupImage emailLinkIcon">

                <p class="linkGroupText emailLinkText">Open in Mail Client</p>

            </a>
        </div>

    `

}
