console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogContainer = document.getElementById('dog-image-container')
const breedUrl= "https://dog.ceo/api/breeds/list/all"
const breedContainer = document.getElementById('dog-breeds')

// fetch(imgUrl) //this can be a function that gets initialized by calling the function after the dom loads
//     .then(response => response.json())
//     .then((dogData)=>{
//         dogData.message.forEach((dogUrlString) => {
//             const pic = document.createElement("img") //this can be it's own function that is called to avoid "pyramid of doom!"
//             pic.src = dogUrlString
//             dogContainer.append(pic)
//         })
//     }) //let's rewrite this thing.

const renderDogImg = dogUrlString => {
    const img = document.createElement("img")
    img.src = dogUrlString
    dogContainer.append(img)
}

const renderBreed = breed => {
    const li = document.createElement("li")
    li.textContent = breed
    breedContainer.append(li)
}

const getDogImg = () => {
    fetch(imgUrl)
        .then(response => response.json())
        .then((data) => {
            data.message.forEach((renderDogImg))
        })
}


const getDogBreeds = () => {
    fetch(breedUrl)
        .then(response => response.json())
        .then((data) => {
            const breedList = Object.keys(data.message)
        
            breedList.forEach(renderBreed)
        })
}


document.addEventListener("")


getDogImg()
getDogBreeds()