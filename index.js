
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let description = document.createElement('h3')
description.textContent = 'Description:'
dogDetails.append(description)

let descriptionParagraph = document.createElement('p')
descriptionParagraph.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append(descriptionParagraph)

let feedingTimes = document.createElement('h3')
feedingTimes.textContent = 'Feeding Times:'
dogDetails.append(feedingTimes)

let feedingTimesList = document.createElement('ul')
let timesForFeeding = ['9:00 am', '12:00 pm', '5:00 pm']

for (let i = 0; i < timesForFeeding.length; i++) {
    let newList = document.createElement('li')
    newList.textContent = timesForFeeding[i]
    feedingTimesList.append(newList)
    console.log(newList)
}

dogDetails.append(feedingTimesList)