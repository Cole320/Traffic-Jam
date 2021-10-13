function getUrl()
{
    // Get Desired URL From User
    var rawUrl = prompt("\
    Welcome to Traffic Jam <3\n\
    Enter a URL to get started:\n\n\n\
    <3");
    
    // Format URL
    if ( rawUrl.startsWith("https://") || rawUrl.startsWith("http://") ) { url = rawURL; }
    else if ( rawUrl ) { url = "https://" + rawUrl; }
    else { alert("URL Invalid"); return getUrl(); }

    return url;
}


alert(url);