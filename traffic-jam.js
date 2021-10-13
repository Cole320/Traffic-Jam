window.onbeforeunload = function() {
    console.log("Traffic Jam :flushed:")
    return "kek"
}

function getUrl() {

// Get Desired URL From User
var rawUrl = prompt("\
Welcome to Traffic Jam <3\n\
Enter a URL to get started:\n");

var url = "";

// Format URL
if ( rawUrl.startsWith("https://") || rawUrl.startsWith("http://") ) { return rawUrl; }
else if ( rawUrl ) { return "https://" + rawUrl; }
else { alert("URL Invalid"); return getUrl(); }
}

function loadUrl(url) {
   document.body.innerHTML = '<body style="margin:0px;padding:0px;overflow:hidden"><iframe src="' + url + '" id="uberFrame" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></body>'

  window.onbeforeunload = function() {
    console.log("Traffic Jam :flushed:")
    return "kek"
  }
}

url = getUrl();
alert("Loading: " + url)
loadUrl(url)