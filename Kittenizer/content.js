console.log("Content Script")

let filenames = [
    "kitten.jpg"
]

let imgs = document.getElementsByTagName('img')

for(img of imgs){
    console.log(img.src)
    let file = filenames[0]
    let url = chrome.extension.getURL(file)
    img.src = url
    console.log(url)
}