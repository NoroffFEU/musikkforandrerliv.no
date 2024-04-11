const carousel = document.querySelector(".carousel")
const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const images = document.querySelectorAll(".carousel-image")
const totalImages = Object.keys(images).length

let currentIndex = 0
let prevIndex

images.forEach((img) => (img.style = `width: calc(100% / ${totalImages})`))

leftArrow.addEventListener("click", () => {
  // Save current index as prevIndex
  prevIndex = currentIndex

  // Go back one image, if we're at the start, go to the last image
  currentIndex = (currentIndex - 1 + totalImages) % totalImages
  carousel.insertBefore(images[currentIndex], carousel.firstChild)
})

rightArrow.addEventListener("click", () => {
  prevIndex = currentIndex

  // Go to the next image, if we're at the end, go to first image
  currentIndex = (currentIndex + 1) % totalImages
  carousel.appendChild(images[prevIndex])
})
