

//age, description, id, name
let currentPage = 1;
const monstersPerPage = 50;
const back = document.querySelector('#back')
const forward = document.querySelector('#forward')


function fetchMonsters(){
   fetch(`http://localhost:3000/monsters?page=${currentPage}&limit=${monstersPerPage}`)
   .then (response => response.json())
   .then (data => {data.forEach((monster) => {
      getOneMonster(monster)
   })
})
}

fetchMonsters()

function getOneMonster(monster){

   const monsterContainer = document.querySelector('#monster-container')

   const name = document.createElement('h3')
   name.textContent = monster.name

   const age = document.createElement('h4')
   age.textContent = monster.age

   const description = document.createElement('p')
   description.textContent  = monster.description

   monsterContainer.append(name, age, description)
   
}

function newForm() {
   const createMonster = document.getElementById("create-monster")

   const form = document.createElement('form')
   const nameInput = document.createElement('input')
   nameInput.placeholder = 'monster name...'
   nameInput.setAttribute('id', 'name')
   
   const ageInput = document.createElement('input')
   ageInput.placeholder = 'monster age...'
   ageInput.setAttribute('id', 'age')

   const descriptionInput = document.createElement('input')
   descriptionInput.placeholder = 'monster description..'
   descriptionInput.setAttribute('id', 'description')

   const button = document.createElement('button')
   button.textContent = 'Create Monster'

   // CREATING A NEW MONSTER 

   form.addEventListener('submit', (event) => {
      event.preventDefault()
      console.log('clicked')

   const newName = document.getElementById('name').value
   const newAge = document.getElementById('age').value
   const newDescription = document.getElementById('description').value

      fetch('http://localhost:3000/monsters',{
         method : 'POST',
         headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
         },
         body: JSON.stringify({
            name: newName,
            age: newAge,
            description: newDescription,
         })  
      })
      .then((response) => response.json())
      .then((data) => {
        // After creating the new monster, update the page by calling the fetchMonsters() function again.
        // This will fetch all monsters from the server and display them, including the newly created one.
        fetchMonsters();
      })
      .catch((error) => console.error(error));
   })

   createMonster.append(form)
   form.append(nameInput, ageInput, descriptionInput, button)

}

newForm()

 
 function showPreviousMonsters() {
   if (currentPage > 1) {
     currentPage--;
     clearMonsterContainer();
     fetchMonsters();
   }
 }

function next() {
   forward.addEventListener('click', () => {
      currentPage++
      clearMonsterContainer();
      fetchMonsters()

   })
}


function previous() {
   back.addEventListener('click', ()=> {
      if (currentPage > 1 ){
         currentPage--;
         clearMonsterContainer();
         fetchMonsters()
      }
   })

}


function clearMonsterContainer() {
   const monsterContainer = document.querySelector("#monster-container");
   while (monsterContainer.firstChild) {
     monsterContainer.removeChild(monsterContainer.firstChild);
   }
 }





















// fetch ('http://localhost:3000/monsters')
// .then (response => response.json())
// .then (data => {

//     const divContainer = document.createElement('div')

//  /* ---------------- DETAILS ------------- */
//     for (let i = 0; i < data.length; i++){
//         const obj = data[i]
//         // console.log(obj.name)
//         console.log(obj)


//         const monsterContainer = document.querySelector('#monster-container')

//         const name = document.createElement('h1')
//         name.textContent = obj.name
//         const age = document.createElement('h4')
//         age.textContent = obj.age
//         const description = document.createElement('p')
//         description.textContent = obj.description
//         divContainer.append(name, age, description)
//         monsterContainer.append(divContainer)

//     }

//     /* ----------------FORM------------- */

//     const createMonster = document.querySelector('#create-monster')

//     const form = document.createElement('form')
//     createMonster.append(form)

//     const inputName =  document.createElement('input')
//     inputName.setAttribute('placeholder', "name...")
//     inputName.setAttribute('id', "input-name")

//     const inputAge = document.createElement('input')
//     inputAge.setAttribute('placeholder', "age...")
//     inputAge.setAttribute('id', "input-age")

//     const inputDescription = document.createElement('input')
//     inputDescription.setAttribute('placeholder', "description...")
//     inputDescription.setAttribute('id', "input-description")

//     const button = document.createElement('button')
//     button.textContent = 'submit'

//     form.append(inputName, inputAge, inputDescription, button)

//      /* ----------------FORM SUBMIT------------ */

//      form.addEventListener('submit', (e) =>  {
//         e.preventDefault()
//         console.log('click')

//         const newName = e.target['input-name'].value
//         const newAge = e.target['input-age'].value
//         const newDescription = e.target['input-description'].value

//         divContainer.append(newName, newAge, newDescription)




//      })



    



// })