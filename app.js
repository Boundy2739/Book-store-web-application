const books = [
    
    {Title:"Harry potter and the philosofer's stone",
      Author: ["J.K Rowling"],
      Genre: ["Fantasy","Adventure"],
      Language: ["English"],
      Price: 25.0,
      PublicationYear: 2000,
      Ratings: 4.5,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
   {Title: "The fellowship of the Ring",
      Author: ["J.R.R. Tolkien"],
      Genre: ["Fantasy","Adventure"],
      Language: ["English"],
      Price: 5.0,
      PublicationYear: 3000,
      Ratings: 5,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Moneyless Society: The Next Economic Evolution",
      Author: ["Matthew Holten"],
      Genre: ["Business economics"],
      Language: ["English"],
      Price: 15.0,
      PublicationYear: 2022,
      Ratings: 3,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Dead in the Water: Murder and Fraud in the World's Most Secretive Industry",
      Author: ["Matthew Cambell", "Kit Chellel"],
      Genre: ["Criminology"],
      Language: ["English"],
      Price: 15.0,
      PublicationYear: 2023,
      Ratings: 4.3,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Lord of the Flies",
      Author: ["William Golding"],
      Genre: ["Dystopian", "Adventure"],
      Language: ["English"],
      Price: 20.0,
      PublicationYear: 2000,
      Ratings: 4.2,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Day of the Triffids",
      Author: ["John Wyndham"],
      Genre: ["Post apocalyptic", "Science fiction"],
      Language: ["English"],
      Price: 20.0,
      PublicationYear: 1951,
      Ratings: 4,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "The Alchemist",
      Author: ["Paulo Coelho"],
      Genre: ["Adventure", "Fantasy"],
      Language: ["Portuguese","English"],
      Price: 20.0,
      PublicationYear: 1988,
      Ratings: 4.6,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
   {Title: "To kill a mocking bird",
      Author: ["Harper Lee"],
      Genre: ["Gothic Novel"],
      Language: ["English"],
      Price: 20.0,
      PublicationYear: 1960,
      Ratings: 4.5,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "The hunger games",
      Author: ["Suzanne Collins"],
      Genre: ["Dystopian", "Science fiction"],
      Language: ["English"],
      Price: 10.0,
      PublicationYear: 2008,
      Ratings: 4.5,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Charlie and the Chocolate Factory",
      Author: ["Roald Dahl"],
      Genre: ["Children novel"],
      Language: ["English"],
      Price: 10.0,
      PublicationYear: 1964,
      Ratings: 4,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {
      Title: "La divina commedia",
      Author: ["Dante Alighieri"],
      Genre: ["Poem"],
      Language: ["Italian"],
      Price: 9.0,
      PublicationYear: 1304,
      Ratings: 5,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Le petit prince",
      Author: ["Antoine de Saint-Exupèry"],
      Genre: ["Children", "Fable","Novel"],
      Language: ["French","English"],
      Price: 10.0,
      PublicationYear: 1943,
      Ratings: 3.5,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
   { Title: "Io non ho paura", 
      Author: ["Niccolò Ammaniti"],
      Genre: ["Novel"],
      Language: ["Italian","English"],
      Price: 12.0,
      PublicationYear: 2001,
      Ratings: 4,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    { Title: "My hero academia", 
      Author: ["Kohei Horikoshi"],
      Genre: ["Manga"],
      Language: ["English","Japanese"],
      Price: 12.0,
      PublicationYear: 2014,
      Ratings: 4,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    { Title: "Go set a watchman", 
    Author: ["Harper Lee"],
    Genre: ["Novel"],
    Language: ["English"],
    Price: 12.0,
    PublicationYear: 2015,
    Ratings: 3,
    Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    { Title: "The murder of Roger Ackroyd", 
    Author: ["Agatha Christie"],
    Genre: ["Mystery","Criminology","Thriller"],
    Language: ["English"],
    Price: 15.0,
    PublicationYear: 1926,
    Ratings: 4,
    Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
        },
    { Title: "The Tiger Who Came to Tea", 
    Author: ["Judith Kerr"],
    Genre: ["Children"],
    Language: ["English"],
    Price: 12.0,
    PublicationYear: 1968,
    Ratings: 4,
    Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Pincher Martin",
      Author: ["William Golding"],
      Genre: ["Novel"],
      Language: ["English"],
      Price: 4.0,
      PublicationYear: 1956,
      Ratings: 4.2,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Loose Head: Confessions of an (Un)professional Rugby Player",
      Author: ["Joe Marler"],
      Genre: ["Sports","Autobiography","Biography"],
      Language: ["English"],
      Price: 4.0,
      PublicationYear: 2021,
      Ratings: 3,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "100 years of solitude",
      Author: ["Gabriel García Márquez"],
      Genre: ["Novel"],
      Language: ["English","Spanish"],
      Price: 9.0,
      PublicationYear: 1967,
      Ratings: 4.1,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "The Metamorphosis",
      Author: ["Franz Kafka"],
      Genre: ["Fiction","Philosphy","Fanatsy"],
      Language: ["English","German"],
      Price: 10.0,
      PublicationYear: 1910,
      Ratings: 3.9,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "The Doll",
      Author: ["Bolesław Prus"],
      Genre: ["History","Fiction"],
      Language: ["English","Polish"],
      Price: 4.0,
      PublicationYear: 1890,
      Ratings: 3.8,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Odyssey",
      Author: ["Homer"],
      Genre: ["Mythology"],
      Language: ["English","Greek"],
      Price: 4.0,
      PublicationYear:  2006,
      Ratings: 3.8,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Iliad",
      Author: ["Homer"],
      Genre: ["Mythology"],
      Language: ["English","Greek"],
      Price: 4.0,
      PublicationYear:  2006,
      Ratings: 3.8,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Somewhere",
      Author: ["Matthew Reed Williams"],
      Genre: ["Horror","Thriller"],
      Language: ["English"],
      Price: 4.0,
      PublicationYear:  2024,
      Ratings: 4.0,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Eat the Ones You Love",
      Author: ["Sarah Maria Griffin"],
      Genre: ["Horror","Fiction"],
      Language: ["English"],
      Price: 14.0,
      PublicationYear: 2025,
      Ratings: 3.8,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Frankenstein",
      Author: ["Mary Shelley"],
      Genre: ["Horror","Fiction"],
      Language: ["English"],
      Price: 4.0,
      PublicationYear: 1818,
      Ratings: 4.2,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {Title: "Astrophysics for People in a Hurry",
      Author: ["Neil deGrasse Tyson"],
      Genre: ["Science"],
      Language: ["English"],
      Price: 4.0,
      PublicationYear: 2017,
      Ratings: 4.2,
      Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
];
 

let searchButton = document.getElementById("searchbarform")
const advancedFields = document.getElementById("advancedsearchform")
const searchPrefs = document.getElementById("searchprefs")
let usersData = [];
let userList = document.getElementById("userslist")
let saveUser = document.getElementById("userForm");
let saveUserPrefs = document.getElementById("userlistform");
let deleteUserPrefs = document.getElementById("deleteuserprefs")
let cart = []
let wishlist = []
const showcart = document.getElementById("showcart")
const showwish = document.getElementById("showwish")
const openAdvanced = document.getElementById("openAdvanced");
const backToRegular = document.getElementById("backToRegular");
const inRange = (value, [min, max]) => value >= min && value <= max;
let currentUser = "guest";

//this stores values from the advanced search fields
const advancedSearch = {
  bookName: "",
  langprefs : [], 
  genreprefs : [],
  authorprefs : [],
  priceRange : [0,Infinity],
  yearRange : [0,Infinity],
  ratingRange : [1,5]
}


//this function creates a new profile user
saveUser.addEventListener("submit", (e) => {
  e.preventDefault();
  //takes the username from the form and removes any white space
  let newUser = document.getElementById("username").value.trim()
  //checks if the name the user is trying to is already in the user list
  if(usersData.some(u => u.username === newUser)){
    alert("This username is taken use another one")
  }
  else{
    //creates a new object at index 0 that stores the username, the prefrences and the items in the cart and wish list
    usersData.unshift({ username: newUser, preferences: [], cart:[],wish:[]})
    //updates the user list by adding the new user
    updateUserList()

  }
  
});

deleteUserPrefs.addEventListener("click", () =>{
  for(let i = 0; i < usersData.length; i++){
    if(usersData[i].username == currentUser){
    usersData[i].preferences = []
      
      
    }
  }
})


//saves user preferences
saveUserPrefs.addEventListener("submit", (e) => {
  e.preventDefault()
  //checks if the current user is a guest
  if (currentUser === "guest") {
    alert("Please select a user first.");
    
  }
  else{

    let newUserPrefs = document.getElementById("userprefs").value;
    for(let i = 0; i < usersData.length; i++){
      if(usersData[i].username == currentUser){
        //checks if there are already 6 genre prefrences
        if(usersData[i].preferences.length < 6){
          //prevents the user from adding the same prefrence twice
          if(usersData[i].preferences.some(p =>p == newUserPrefs)){
            alert("You already added this genre")
          }
          else{usersData[i].preferences.push(newUserPrefs)}
          
        }
        else{
          alert("You cant add more than 6 genre preferences")
        }

      }

    }

  }
  
displaySuggestions()
  
});

      


function randomiseBooks(results) {
  return results.sort(() => Math.random() - 0.5);
}

//shows random books based on user preferences
function displaySuggestions(){
  //searchs the usersname that matches the current user
  let user = usersData.find(u => u.username === currentUser)
  if (user){
    //unhide the suggested books section
    document.getElementById("displayprefs").style.display = "block"
    
    document.getElementById("displayprefs").innerHTML = ""
    let matchbooks = books.filter(b =>
      user.preferences.some(pref =>
        b.Genre.includes(pref)
      )
    );
    let results = matchbooks
    //randomise the results so the books suggest are not always the same
    randomiseBooks(results)
    let randomisedResults = results.slice(0, 3)
    let prefsHeading = document.createElement("h2")
    prefsHeading.style.marginBottom = "16px"
    prefsHeading.innerHTML = `Picked on your preferences, check them out!`
    document.getElementById("displayprefs").appendChild(prefsHeading)

    //goes through the results
    for(let currentBook = 0; currentBook < randomisedResults.length; currentBook++){
      let bookTitle =  randomisedResults[currentBook].Title
      //creates a container for the books
      let prefsContainer = document.createElement("div")
      prefsContainer.style.marginBottom = "16px"
      prefsContainer.innerHTML = `
      <ul>
        <li>Title: ${randomisedResults[currentBook].Title}</li>
        <li>Author: ${randomisedResults[currentBook].Author}</li>
        <li>Genre: ${randomisedResults[currentBook].Genre}</li>
        <li>Languages: ${randomisedResults[currentBook].Language}</li>
        <li>Price: ${randomisedResults[currentBook].Price}</li>
        <li>Publication year: ${randomisedResults[currentBook].PublicationYear}</li>
        <li>Ratings: ${randomisedResults[currentBook].Ratings}★</li>
        <li>Description: ${randomisedResults[currentBook].Description}</li>
      </ul>
      <input type="button" id="${randomisedResults[currentBook].Title + "-cartb"}" value="add to cart"></input>
      <input type="button" id="${randomisedResults[currentBook].Title + "-wishb"}" value="add to wishlist"></input>

      `
      document.getElementById("displayprefs").appendChild(prefsContainer)
      
      let cartButton = document.getElementById(randomisedResults[currentBook].Title + "-cartb")
      cartButton.addEventListener("click",()=> {
                   cart.push(bookTitle)
                   updateUserCart()
                })
      let wishButton = document.getElementById(randomisedResults[currentBook].Title + "-wishb")
      wishButton.addEventListener("click",()=> {
                        wishlist.push(bookTitle)
                        updateUserCart()
                    })
  }
    
  }

}
 
//saves user cart and wishlist
function updateUserCart(){
  for(i = 0; i < usersData.length; i++){
    if(usersData[i].username == currentUser){
      usersData[i].wish == wishlist
      usersData[i].cart == cart
    }
  }
}
//updates user list
function updateUserList(){
  //link to the drop down user list
  let app = document.getElementById("userslist")
  child = document.createElement("option")
  //sets the value and name displayed of the new option element as the last username added
  child.setAttribute("value", usersData[0].username)
  child.innerHTML = document.getElementById("username").value
  //appends the new option element to the users list
  app.appendChild(child)
  displaySuggestions()

}

//lets you change user
userList.addEventListener("change", () =>{
  
  //it sets the current user to the one selected from the users list
  currentUser = userList.value
  for(let i = 0; i < usersData.length; i++){
    //it the  current user and the current user from usersData have the same username
    if(usersData[i].username == currentUser){
      //this copies the saved cart and wish list items of the user over the current wish list and cart
      wishlist = usersData[i].wish
      cart = usersData[i].cart

    }
    try{
      const element = document.getElementById("wishlist")
      while(element.firstChild)
          element.removeChild(element.firstChild)
      }catch(TypeError){
          console.error("")
      }

      try{
        const element = document.getElementById("cart")
        while(element.firstChild)
            element.removeChild(element.firstChild)
        }catch(TypeError){
            console.error("")
        }
    

  }
  displaySuggestions()
  
    
})

advancedFields.addEventListener("submit", (e) => {
  e.preventDefault()
    //takes value from the book title field
    advancedSearch.bookName = document.getElementById("booktitle").value
    //takes the language chosen from the drop down list
    const lang = document.getElementById("langprefs").value
    advancedSearch.langprefs.push(lang)
    //takes the genre chosen from the drop down list
    const genre = document.getElementById("genreprefs").value
    advancedSearch.genreprefs.push(genre)
    //takes author's name from the author's field
    const author = document.getElementById("authorprefs").value
    advancedSearch.authorprefs.push(author.trim())

    //takes the minimum and maximum price set by the user from their respective field
    const minPrice = document.getElementById("minprice").value
    const maxPrice = document.getElementById("maxprice").value
    //if the user does not set a price the minimum will be set to 0 and the maximum to infinity
    advancedSearch.priceRange = [minPrice || 0, maxPrice || Infinity]
    
    //takes the oldest and newest publication year set by the user from their respective field
    const minYear = document.getElementById("minyear").value
    const maxYear = document.getElementById("maxyear").value
    //if the user does not set a year of publication the minimum will be set to 0 and the maximum to infinity
    advancedSearch.yearRange = [minYear || 0, maxYear || Infinity]
    
    //takes the minimum and maximum book rating set by the user from their respective field 
    const minrating = document.getElementById("minrating").value
    const maxrating = document.getElementById("maxrating").value
    //if the user does not set a price the minimum will be set to 1 and the maximum to 5
    advancedSearch.ratingRange = [minrating || 1, maxrating || 5]
     
    //if the user does give neither a book title, language, genre or author name the research won't start
    if(!advancedSearch.bookName && lang == "Any" && genre == "Any" && !author){
      alert("You need to insert at least a book title, language, genre or author name!")
    }
    else{
      //starts searching for a book based on the details given by the user
      advancedResults()
    }
     
     }
 )

//shows advanced search option
openAdvanced.addEventListener("click", () => {
  searchButton.style.display = "none";
  advancedFields.style.display = "block";
});
//hides advanced search option
backToRegular.addEventListener("click", () => {
  advancedFields.style.display = "none";
  searchButton.style.display = "block";
});



// This function checks whether a given book matches at least some of the user's advanced search preferences
function matchesPreferences(book) {
  //checks if the book title field is empty or if there is a book title that includes the search term
  const titleMatch = advancedSearch.bookName.length === 0 || 
  book.Title.toLowerCase().trim().includes(advancedSearch.bookName.toLowerCase().trim())
  
  // Check if any of the book's languages match the user's language preferences
  // If the default "Languages" is selected, skip this filter
  const langMatch = advancedSearch.langprefs[0] == "Any" || book.Language.some(l => advancedSearch.langprefs.includes(l));
  const genreMatch = advancedSearch.genreprefs[0] == "Any" || book.Genre.some(g => advancedSearch.genreprefs.includes(g));
  
  //checks if the author's field is empty or if there is an author's name that includes the search term
  const authorMatch = advancedSearch.authorprefs.length === 0 || book.Author.some(a => 
    a.toLowerCase().trim().includes(advancedSearch.authorprefs[0].toLowerCase().trim()))
  
  // checks if price, year and ratings are within the range chosen by the user
  const priceMatch = inRange(book.Price, advancedSearch.priceRange)
  const yearMatch = inRange(book.PublicationYear, advancedSearch.yearRange)
  const ratingMatch = inRange(book.Ratings, advancedSearch.ratingRange)

  return titleMatch && langMatch && genreMatch && authorMatch && priceMatch && yearMatch && ratingMatch;
}

//search books based on the inputs given in the advanced search
function advancedResults(){
    try{
        const element = document.getElementById("availablebooks")
        while(element.firstChild)
            element.removeChild(element.firstChild)
        }catch(TypeError){
            console.error("test")
        }
    
    const results = books.filter(matchesPreferences);
    const container = document.getElementById("availablebooks");
    //makes the books result section visible
    document.getElementById("booksresults").style.display = "block";
    if (results.length === 0) {
      container.textContent = "No books found matching preferences.";
      return;
    }
    let count = 0
    let resultcount = document.createElement("p")
    resultcount.setAttribute("id", "count")
    resultcount.innerHTML = "Results found " + count
    document.getElementById("availablebooks").appendChild(resultcount)
    // this goes trough all the matching books
    for(currentBook = 0; currentBook < results.length ; currentBook++){
      //creates a container that will be used to display the books
        let bookContainer = document.createElement("div")
        bookContainer.setAttribute("id",results[currentBook].Title + "-advsearch")
        let bookTitle = results[currentBook].Title
        bookContainer.innerHTML = `
               <ul style="max-width: 400px; word-wrap: break-word;"> 
                <li>Title: ${results[currentBook].Title}</li>
                <li>Author: ${results[currentBook].Author}</li>
                <li>Genre: ${results[currentBook].Genre}</li>
                <li>Language: ${results[currentBook].Language}</li>
                <li>Price: £${results[currentBook].Price}</li>
                <li>Year: ${results[currentBook].PublicationYear}</li>
                <li>Rating: ${results[currentBook].Ratings}★</li>
                <li>Description: ${results[currentBook].Description}</li>
              </ul>
              <input type="button" id="${results[currentBook].Title + "-advdiv"}" value="add to cart"></input>
              <input type="button" id="${results[currentBook].Title + "-advwishdiv"}" value="add to wishlist"></input>
        `
        count++
        resultcount.innerHTML = "Results found " + count
        //appends the container in the book results section
        document.getElementById("availablebooks").appendChild(bookContainer)
        
        //links the add to cart and wishlist buttons to make them interactable
        let cartButton = document.getElementById(results[currentBook].Title + "-advdiv")
            cartButton.addEventListener("click",()=> {
                   //upon clicking the button the title will be pushed in the cart array
                   cart.push(bookTitle)
                   //this updates the cart and the wishlist of the current user
                   updateUserCart()
                })
        let wish = document.getElementById(results[currentBook].Title + "-advwishdiv")
            wish.addEventListener("click",()=> {
                        wishlist.push(bookTitle)
                        //this updates the cart and the wishlist of the current user
                        updateUserCart()
                    })

    }
  // remove items from the arrays inside advancedSearch
  advancedSearch.langprefs.splice(0,advancedSearch.langprefs.length)
  advancedSearch.genreprefs.splice(0,advancedSearch.genreprefs.length)
  advancedSearch.authorprefs.splice(0,advancedSearch.authorprefs.length)
}

//regular search function  
function findBook(e){
    
    e.preventDefault()

    //deletes existing content in the setction before adding new content
    try{
        const element = document.getElementById("availablebooks")
        while(element.firstChild)
            element.removeChild(element.firstChild)
        }catch(TypeError){
            console.error("test")
        }
    // takes the search term from the search bar
    let searchResult = document.getElementById("searchbar").value.toLowerCase().trim()
    
    //runs if the user insert at least 1 character in the search bar
    if (searchResult.length > 0){
      let count = 0
      let resultcount = document.createElement("p")
      resultcount.setAttribute("id", "count")
      resultcount.innerHTML = "Results found " + count
      document.getElementById("availablebooks").appendChild(resultcount)
      document.getElementById("booksresults").style.display = "block";
      for(currentBook = 0 ; currentBook < books.length; currentBook++){
        //if the current book title includes the search term all a container for it will be created
        if(books[currentBook].Title.toLowerCase().trim().includes(searchResult)){
    
        const bookTitle = books[currentBook].Title
        let bookContainer = document.createElement("div")
        bookContainer.setAttribute("id",books[currentBook].Title + "found")
        //writes the content of the container
        bookContainer.innerHTML =`
              <ul>
                <li>Title: ${books[currentBook].Title}</li>
                <li>Author: ${books[currentBook].Author}</li>
                <li>Genre: ${books[currentBook].Genre}</li>
                <li>Language: ${books[currentBook].Language}</li>
                <li>Price: £${books[currentBook].Price}</li>
                <li>Year: ${books[currentBook].PublicationYear}</li>
                <li>Rating: ${books[currentBook].Ratings}★</li>
                <li>Descrition: ${books[currentBook].Description}</li>
              </ul>
              <input type="button" id="${books[currentBook].Title + "-div"}" value="add to cart"></input>
              <input type="button" id="${books[currentBook].Title + "-wishdiv"}" value="add to wishlist"></input>
            `;
            count++
            resultcount.innerHTML = "Results found " + count
            document.getElementById("availablebooks").appendChild(bookContainer)
            //make the 2 buttons created interactive
            let cartButton = document.getElementById(books[currentBook].Title + "-div")
            cartButton.addEventListener("click",()=> {
                   cart.push(bookTitle)
                   updateUserCart()
                })
            let wish = document.getElementById(books[currentBook].Title + "-wishdiv")
            wish.addEventListener("click",()=> {
                        wishlist.push(bookTitle)
                        updateUserCart()
                    })
        }
        
        

 }

    }
  
  }
 
 searchButton.addEventListener("click",findBook)
 
 //shows books in the cart
 showcart.addEventListener("click",() =>{
  // goes through all the items in the current cart
  for(i = 0; i < cart.length; i++){
    let cartID = cart[i]
    //goes through all the books available
    for(let currentBook = 0; currentBook < books.length; currentBook++){
      
      //creates the container for the books that will be displayed in the cart
      let bookContainer = document.createElement("div")
      bookContainer.style.marginBottom = "16px"
      //checks current item in the cart is equal to the current books title
      if(cart[i] == books[currentBook].Title){
        bookContainer.innerHTML =`
                <ul>
                  <li>Title: ${books[currentBook].Title}</li>
                  <li>Author: ${books[currentBook].Author}</li>
                  <li>Genre: ${books[currentBook].Genre}</li>
                  <li>Language: ${books[currentBook].Language}</li>
                  <li>Price: £${books[currentBook].Price}</li>
                  <li>Year: ${books[currentBook].PublicationYear}</li>
                  <li>Rating: ${books[currentBook].Ratings}★</li>
                </ul>
                <input type="button" id="${books[currentBook].Title + "-delcart"}" value="delete item"></input>
                  `
                  //appends the matching book if it is not already present in the cart
                  if(!document.getElementById("cart").innerHTML.includes(bookContainer.innerHTML)){
                    document.getElementById("cart").appendChild(bookContainer)
                  }
                  //delete item
                  let del = document.getElementById(books[currentBook].Title + "-delcart")
                  //deletes the book from the cart
                  del.addEventListener("click",()=> {
                    //checks the items in the cart array that match the title book and remove them from the array
                      cart = cart.filter (item => item != cartID)
                      //deletes the book container
                      bookContainer.remove()
                      del.remove()
                        })
        
      }

    }
  }
    
 })
 //shows books in the wish list
 showwish.addEventListener("click",() =>{
    //goes through all the books titles storede in the wish list array
    for(i = 0; i < wishlist.length; i++){
      let wishID = wishlist[i]
      //goes through all the books in the store
      for(let currentBook = 0;currentBook < books.length;currentBook++){
        //creates container for the books that will be displayed
        let bookContainer = document.createElement("div")
        bookContainer.style.marginBottom = "16px"
        //checks if the current item in wishlist array matches the current book's title
        if(wishlist[i] == books[currentBook].Title){
          bookContainer.innerHTML =`
                <ul>
                  <li>Title: ${books[currentBook].Title}</li>
                  <li>Author: ${books[currentBook].Author}</li>
                  <li>Genre: ${books[currentBook].Genre}</li>
                  <li>Language: ${books[currentBook].Language}</li>
                  <li>Price: £${books[currentBook].Price}</li>
                  <li>Year: ${books[currentBook].PublicationYear}</li>
                  <li>Rating: ${books[currentBook].Ratings}★</li>
                </ul>
                <input type="button" id="${books[currentBook].Title + "-delwish"}" value="delete item"></input>
                <input type="button" id="${books[currentBook].Title + "-wishcart"}" value="add to cart"></input>
                  `
                  //appends the container with the matching book
                  if(!document.getElementById("wishlist").innerHTML.includes(bookContainer.innerHTML)){
                    document.getElementById("wishlist").appendChild(bookContainer)
                  }
                  //button that lets the user add the book to the cart
                  let add = document.getElementById(books[currentBook].Title + "-wishcart")
                   add.addEventListener("click",()=> {
                        cart.push(wishID)
                         })
                  //lets delete the book from the wishlist
                  let del = document.getElementById(books[currentBook].Title + "-delwish")
                  del.addEventListener("click",()=> {
                      wishlist = wishlist.filter (item => item != wishID)
                      bookContainer.remove()
                      del.remove()
                        })
                  
                }
      }
      

    }
 })

