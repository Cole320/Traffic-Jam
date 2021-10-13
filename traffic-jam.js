alert(1);
(function() {
    // Get Desired URL From User
    var rawUrl = prompt("\
                    Welcome to Traffic Jam <3\n\
                    Enter a URL to get started:\n\n\n\
                    -<3");
    
    if ( rawUrl.startsWith("https://") || rawUrl.startsWith("http://") ) { url = rawURL; }
    else { url = "https://" + rawUrl }

    alert(url);
});