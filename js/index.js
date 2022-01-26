function setImage(image) {
    document.body.setAttribute(
        'style',
        `background-image: url(${image.urls.full})`
    )
}


document.addEventListener('DOMContentLoaded' , () => {
    chrome.storage.local.get('nextImage', data => {
        if (data.nextImage) {
            setImage(data.nextImage);
          }
    })
})