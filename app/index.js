//render the food recipes
//create dom elements
const renderFoodCard = (cardData)=>{
  const li = document.createElement('li')
  const recipeName = document.createElement('h3')
  const img = document.createElement('img')
  const description = document.createElement('p')
  const pAuthor = document.createElement('h4')
  const ingredients = document.createElement('p')
  const method = document.createElement('p')
  const btn = document.createElement('button')


li.className ='list-li'
h3.textContent = cardData.Name
img.src =cardData.url
p.textContent = cardData.Description
h4.textContent = cardData.Author
p.textContent = cardData.Ingredients
p.textContent = cardData.Method//own rray

li.append(recipeName,img,description,pAuthor,ingredients,method,btn)
document.querySelector('#food-list').append(li)
}
