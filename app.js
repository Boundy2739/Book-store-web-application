const books = {

    "Harry potter and the philosofer's stone" :{
     Author:"J.K Rowling",
     Genre:["Fantasy"],
     Language:"English",
     Price: 25.00,
     PublicationYear: 2000,
     Description: ""
    },
    "The fellowship of the Ring":{
     Author:"J.R.R. Tolkien",
     Genre:["Fantasy"],
     Language:"English",
     Price: 5.00,
     PublicationYear: 3000
 
 
 
  },
  "Moneyless Society: The Next Economic Evolution":{
 
     Author:"Matthew Holten",
     Genre:["Business economics"],
     Language:"English",
     Price: 15.00,
     PublicationYear: 2022
 
  },
  "Dead in the Water: Murder and Fraud in the World's Most Secretive Industry":{
     Author:["Matthew Cambell","Kit Chellel"],
     Genre:["Criminology"],
     Language:"English",
     Price: 15.00,
     PublicationYear: 2023
  },
  "Lord of the Flies" :{
     Author:["William Golding"],
     Genre:["Dystopian","Adventure"],
     Language:"English",
     Price: 20.00,
     PublicationYear: 2000
    },
    "Day of the Triffids" :{
     Author:["John Wyndham"],
     Genre:["post apocalyptic","science fiction"],
     Language:"English",
     Price: 20.00,
     PublicationYear: 1951
    },
 
    "The Alchemist" :{
     Author:["Paulo Coelho"],
     Genre:["Adventure","Fantasy"],
     Language:"Portuguese",
     Price: 20.00,
     PublicationYear: 1988
    },
 
    "To kill a mocking bird" :{
     Author:["Harper Lee"],
     Genre:["Gothic Novel"],
     Language:"English",
     Price: 20.00,
     PublicationYear: 1960
    },
 
    "The hunger games" :{
     Author:["Suzanne Collins"],
     Genre:["Dystopian","Science fiction"],
     Language:"English",
     Price: 10.00,
     PublicationYear: 2008
    },
    "Charlie and the Chocolate Factory":{
     Author:["Roald Dahl"],
     Genre:["Children novel"],
     Language:"English",
     Price: 10.00,
     PublicationYear: 1964
    },
 }
 
 console.log(Object.values(books).length)
 
 
 let prefButton = document.getElementById("addprefs")
 let searchPrefs = document.getElementById("searchprefs")
 
 let favCategory = []
 
 prefButton.addEventListener("click", () => {
     const preferences = document.getElementById("preferences").value
     console.log(preferences)
     console.log(favCategory)
     favCategory.push(preferences)
     }
 )
 
 
 
 searchPrefs.addEventListener("click",() => {
     console.log("Yes")
     for(let i = 0; i <= favCategory.length ; i++){
         
         
         
         for(let e = 0; e <= Object.values(books).length -1; e++ ){
             
             
             let bookInfo = Object.values(books)[e]
             let author = Object.values(bookInfo)[0]
             let genres = Object.values(bookInfo)[1]
             let language = Object.values(bookInfo)[2]
             let price = Object.values(bookInfo)[3]
             let year = Object.values(bookInfo)[4]
             for(let g = 0; g <= genres.length -1 ;g++ ){
                 let t = Object.values(genres)[g]
                 
                 if(favCategory[i] === Object.values(genres)[g]){
                     console.log("BOOK FOUND!")
                     console.log(Object.values(books)[e])
                     const bookList = document.createElement("li")
                     const textnode = document.createTextNode(Object.entries(bookInfo))
                     bookList.appendChild(textnode)
                     document.getElementById("availablebooks").appendChild(bookList)
                     
                 }
                 else if(Object.values(genres)[g].includes(favCategory[i])){
                     console.log("BOOK FOUND!")
                     console.log(Object.values(books)[e])
                     const bookList = document.createElement("li")
                     const textnode = document.createTextNode(Object.entries(bookInfo))
                     bookList.appendChild(textnode)
                     document.getElementById("availablebooks").appendChild(bookList)
                 }
                 else{
                     console.log("NO BOOKS FOUND!")
                 }
 
             }
             for(let g = 1; g <= 1 ;g++ ){
                 if(favCategory[i] === language){
                     console.log("BOOK FOUND!")
                     console.log(Object.values(books)[e])
                     const bookList = document.createElement("li")
                     const textnode = document.createTextNode(Object.entries(bookInfo))
                     bookList.appendChild(textnode)
                     document.getElementById("availablebooks").appendChild(bookList)
                     
                 }
                 else{
                     console.log("NO BOOKS FOUND!")
                 }
 
             }
             for(let g = 0; g <= author.length -1 ;g++ ){
                 if(favCategory[i] === Object.values(author)[g]){
                     console.log("BOOK FOUND!")
                     console.log(Object.values(books)[e])
                     let titlenode = document.createTextNode("Title: " + Object.keys(books)[e])
                     let booktitle = document.createElement("li")
                     booktitle.appendChild(titlenode)
                     document.getElementById("availablebooks").appendChild(booktitle)
                     for(let x = 0; x <= 4 ; ++x){
                         const bookList = document.createElement("li")
                         const textnode = document.createTextNode(Object.keys(bookInfo)[x] + Object.values(bookInfo)[x])
                         bookList.appendChild(textnode)
                         document.getElementById("availablebooks").appendChild(bookList)
                     }
                     
                 }
                 else if(Object.values(author)[g].includes(favCategory[i])){
                     console.log("BOOK FOUND!")
                     console.log(Object.values(books)[e])
                     let titlenode = document.createTextNode("Title: " + Object.keys(books)[e])
                     let booktitle = document.createElement("li")
                     booktitle.appendChild(titlenode)
                     document.getElementById("availablebooks").appendChild(booktitle)
                     for(let x = 0; x <= 4 ; ++x){
                         const bookList = document.createElement("li")
                         const textnode = document.createTextNode(Object.keys(bookInfo)[x] + Object.values(bookInfo)[x])
                         bookList.appendChild(textnode)
                         document.getElementById("availablebooks").appendChild(bookList)
                     }
                 }
                 else{
                     console.log("NO BOOKS FOUND!")
                 }
 
             }
             
             
         }
         
 
     }
 })
 
 function bookFilter(){
     let searchResults = document.getElementById("availablebooks").innerHTML
     let filter = document.getElementById("searchbar").value
     let numOfBooks = Object.keys(books).length
     console.log(Object.values(books)[0])
     console.log("THE BOOK IS" + filter)
    
     
 
 
     for (let i = 0 ; i < numOfBooks; ++i ){
         console.log(Object.keys(books)[i])
         
         if (filter ==  Object.keys(books)[i]){
             let bookinfo = Object.values(books)[i]
             let buttonisOn = true
             let buttonCount = 1
             console.log("THIS IS THE BOOK")
             console.log("SJSSOdadacacacacacacacacacS")
             let titlenode = document.createTextNode("Title: " + Object.keys(books)[i])
             let booktitle = document.createElement("li")
             booktitle.appendChild(titlenode)
             document.getElementById("availablebooks").appendChild(booktitle)
             for(let x = 0; x <= 4 ; ++x){
                 let textnode = document.createTextNode(Object.keys(bookinfo)[x] + ": " + Object.values(bookinfo)[x] )
                 let booklist = document.createElement("li")
                 booklist.appendChild(textnode)
                 document.getElementById("availablebooks").appendChild(booklist)
                
                 
           
 
                 
 
             
             
             }
             let but = document.createElement("input")
             but.setAttribute("id","cartbutton")
             but.setAttribute("value","Add to cart")
             but.setAttribute("type","button")
             document.getElementById("availablebooks").append(but)
             let cartButton = document.getElementById("cartbutton")
                     
                  
                 cartButton.addEventListener("click",() => {
                      for(let y = 0; y <= 4 && buttonisOn == true; ++y){
                          let cartTextNode = document.createTextNode(Object.keys(bookinfo)[y] + ": " + Object.values(bookinfo)[y])
                          let cartItem = document.createElement("li")
                          cartItem.appendChild(cartTextNode)
                          document.getElementById("cart").appendChild(cartItem)
                          if (y == 4){buttonisOn = false}
                      }
   
                      })
                  
         }
         else if(Object.keys(books)[i].includes(filter)){
             let bookinfo = Object.values(books)[i]
             
             console.log("THIS IS THE BOOK")
             console.log("SJSSOdadacacacacacacacacacS")
             let titlenode = document.createTextNode("Title: " + Object.keys(books)[i])
             let booktitle = document.createElement("li")
             booktitle.appendChild(titlenode)
             document.getElementById("availablebooks").appendChild(booktitle)
             for(let x = 0; x <= 4 ; ++x){
                 let textnode = document.createTextNode(Object.keys(bookinfo)[x] + ": " + Object.values(bookinfo)[x] )
                 let booklist = document.createElement("li")
                 booklist.appendChild(textnode)
                 document.getElementById("availablebooks").appendChild(booklist)
 
                 
 
             }
         }
         else{
             console.log("THIS IS NOT THE BOOK")
             
         }        
    
 }
 
 
 }
 console.log(Object.keys(books))
 let subbutton = document.getElementById("submission")
 subbutton.addEventListener("click",bookFilter)
 
 let randomstring = ("Squirrel")
