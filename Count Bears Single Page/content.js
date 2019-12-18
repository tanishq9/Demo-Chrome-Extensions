chrome.runtime.onMessage.addListener(function(request,sender, sendResponse){
    // request is the message that we have received
    const re = new RegExp('bear','gi')
    const matches = 
        document.documentElement.innerHTML.match(re)
    sendResponse({count : matches.length})
})