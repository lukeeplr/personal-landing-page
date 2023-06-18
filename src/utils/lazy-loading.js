const lazyLoading = () => {
    
    //selector
    const lazyImages = document.querySelectorAll('.lazy')
    
    //event
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                handleView(entry)
            }
        })
    })

    //handle
    const handleView = (entry) => {
        let image = entry.target
                image.src = image.dataset.src
                image.classList.remove('loading')
                image.classList.add('loaded')
                observer.unobserve(image)
    }

    // on mount
    lazyImages.forEach(image => {
        observer.observe(image)
    })
}


export default lazyLoading
