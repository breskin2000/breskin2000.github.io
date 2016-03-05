var CornerLogo = document.createElement("div"), LogoTriangle = document.createElement("div"), LogoText = document.createElement("div");

document.addEventListener("DOMContentLoaded", OnLoad, false);

var AnimationShowing = false, AnimationClosing = false;

function OnLoad(e) {
    CornerLogo.id = "corner-logo";
    LogoTriangle.id = "logo_triangle";
    LogoText.id = "logo_text";
    
    LogoText.appendChild(document.createTextNode("breskin"));
    CornerLogo.appendChild(LogoTriangle);
    CornerLogo.appendChild(LogoText);
    
    document.getElementsByTagName("body")[0].appendChild(CornerLogo);
    
    CornerLogo.addEventListener("mouseover", Logo_MouseOver, false);
    CornerLogo.addEventListener("mouseleave", Logo_MouseOut, false);
}

function Logo_MouseOver(e) {
    if (!AnimationClosing && !AnimationShowing) {
        AnimationShowing = true;
        
        CornerLogo.style.width = "50vh";
        CornerLogo.style.height = "18vh";
        
        LogoTriangle.style.transform = "rotate(0deg)";
        LogoTriangle.style.animationName = LogoTriangle.style.webkitAnimationName = "logo_triangle_show";
        
        setTimeout(function() {
            LogoText.style.width = "30vh";
            LogoText.style.opacity = "1";
            LogoText.style.animationName = LogoText.style.webkitAnimationName = "logo_text_show";
            
            setTimeout(function() {AnimationShowing = false;}, 1000);
        }, 400);
    }
}

function Logo_MouseOut(e) {
    if (!AnimationClosing && !AnimationShowing) {
        HideLogo();
    } else if (!AnimationClosing) {
        AnimationClosing = true; setTimeout(function() {HideLogo();}, 1000);
    }
}

function HideLogo() {
    AnimationClosing = true;
    
    LogoText.style.width = "4vh";
    LogoText.style.opacity = "0.5";
    LogoText.style.animationName = LogoText.style.webkitAnimationName = "logo_text_hide";
    
    setTimeout(function() {
        LogoTriangle.style.transform = "rotate(-90deg)";
        LogoTriangle.style.animationName = LogoTriangle.style.webkitAnimationName = "logo_triangle_hide";
        
        setTimeout(function() {
            setTimeout(function() {AnimationClosing = false;}, 400);
            
            CornerLogo.style.width = "6vh";
            CornerLogo.style.height = "10vh";
        }, 750);
    }, 400);
}