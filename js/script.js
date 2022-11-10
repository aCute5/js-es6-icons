const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const arrAnimals = icons.filter((element) => {
    if(element.type === "animal"){
        return true;
    }
    return false;
})
const arrVegetables = icons.filter((element) =>{
    if (element.type === "vegetable") {
        return true;
    }
       return false;
})
const arrUsers = icons.filter((element) => {
    if (element.type === "user") {
        return true;
    }
        return false;
})
const eleSelect = document.querySelector(".typecard")
const eleContainer = document.querySelector(".cards")
eleSelect.onchange = function(){
	let selectedType = this.value
	if (selectedType= "animal") {
		eleContainer.innerHTML = "";
	
		arrAnimals.forEach((element) => {
			eleCard = document.createElement("div")
			eleCard.classList.add("card")
			eleContainer.append(eleCard)
			 eleCard.innerHTML +=
			`
			 <i class="${element.family} ${element.prefix}${element.name}" style = color:${element.color} </i> 
			 <div class= "title"> ${element.name} </div>
			
			 `
		})
		
	} else if (selectedType = "vegetable") {
		eleContainer.innerHTML = "";
		
		arrVegetables.forEach((element) => {
			eleContainer.innerHTML = ""
			eleCard = document.createElement("div")
			eleCard.classList.add("card")
			eleContainer.append(eleCard)
			 eleCard.innerHTML +=
			`
			 <i class="${element.family} ${element.prefix}${element.name}" style = color:${element.color} </i> 
			 <h4> ${element.name} </h4>
			
			 `
		})
		
	} else if (selectedType = "user") {
		eleContainer.innerHTML = "";
	
		arrUsers.forEach((element) => {
			eleCard = document.createElement("div")
			eleCard.classList.add("card")
			eleContainer.append(eleCard)
			 eleCard.innerHTML +=
			`
			 <i class="${element.family} ${element.prefix}${element.name}" style = color:${element.color} </i> 
			 <h4> ${element.name} </h4>
			
			 `
		})
	}else{
		eleContainer.innerHTML = "";
		icons.forEach((element) => {
			eleCard = document.createElement("div")
			eleCard.classList.add("card")
			eleContainer.append(eleCard)
			 eleCard.innerHTML +=
			`
			 <i class="${element.family} ${element.prefix}${element.name}" style = color:${element.color} </i> 
			 <h4> ${element.name} </h4>
			
			 `
		})
	}

}

