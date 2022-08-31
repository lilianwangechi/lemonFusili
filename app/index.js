document.addEventListener('DOMContentLoaded',()=>{


getRecipes()
renderFoodCard()

})

//render the food recipes
//create dom elements

function renderFoodCard(cardData){
  const li = document.createElement('li')
  const h3 = document.createElement('h3')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const h4 = document.createElement('h4')
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
btn.textContent ='Delete'

li.append(h3,img,p,h4,ingredients,method,btn)
document.querySelector('#food-list').append(li)
}

function getRecipes(){
  fetch('http://localhost:3000/recipes')
  .then(res=> res.json())
  .then(recipes=>recipes.forEach(renderFoodCard)
 
  )
}
