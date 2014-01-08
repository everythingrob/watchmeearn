function RedirectSmartphone(url){
    if (url && url.length > 0 && IsSmartphone())
    window.location = url;
}
function IsSmartphone(){
    if (DetectUagent("android")) return true;
    else if (DetectUagent("blackberry")) return true;
    else if (DetectUagent("iphone")) return true;
    else if (DetectUagent("opera")) return true;
    else if (DetectUagent("palm")) return true;
    else if (DetectUagent("windows")) return true;
    else if (DetectUagent("generic")) return true;
    else if (DetectUagent("ipad")) return true;
    else if (DetectUagent("ipod")) return true;
    return false;
}
function DetectUagent(name){
    var uagent = navigator.userAgent.toLowerCase();
    if (uagent.search(name) > -1)
    return true;
    else
    return false;
}
RedirectSmartphone("http://everythingrob.co.uk/watchmeearn/mobile.html");

//script used from http://stackoverflow.com/questions/6984541/javascript-code-to-redirect-mobile-phone-users user: Rick Smalls