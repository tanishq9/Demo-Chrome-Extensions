document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').addEventListener('click',onclick,false)

    // here we are just using chrome extension API in which after querying the current active tabs which is obviously one, we will get the result of the query, which will obviously be the name of such tabs and i.e the current tab
    // after getting the output of query i.e the 1 tab, in this callback function we will send some such tabs to the callback function   
    
    function onclick(){
        chrome.tabs.query({currentWindow:true, active: true},
        function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        })
    }
    // setCount is the 3rd argument of the sendMessage() function
    // setCount is the method that gets called when sendResponse() method is called in content.js

    function setCount(res){
        const div = document.createElement('div')
        div.textContent = `${res.count} bears`
        document.body.appendChild(div)
    }

},false)