const books = {

   "Harry potter and the philosofer's stone" :{
    Author:"J.K Rowling",
    Genre:"Fantasy",
    Language:"English",
    Price: 25.00,
    PublicationYear: 2000
   },
   "The fellowship of the Ring":{
    Author:"J.R.R. Tolkien",
    Genre:"Fantasy",
    Language:"English",
    Price: 5.00,
    PublicationYear: 3000



 },
 "Moneyless Society: The Next Economic Evolution":{

    Author:"Matthew Holten",
    Genre:"Business economics",
    Language:"English",
    Price: 15.00,
    PublicationYear: 2022

 },
 "Dead in the Water: Murder and Fraud in the World's Most Secretive Industry":{
    Author:["Matthew Cambell","Kit Chellel"],
    Genre:"Criminology",
    Language:"English",
    Price: 15.00,
    PublicationYear: 2023
 }
}
function bookFilter(){
    let searchResults = document.getElementById("availablebooks").innerHTML
    let filter = document.getElementById("year").value
    let numOfBooks = Object.keys(books).length
    console.log(Object.values(books)[0])
    window.alert(filter)
   
    


    for (let i = 0 ; i < numOfBooks; ++i ){
        console.log(Object.values(books)[i])
        for (let e = 0; e < 6 ; ++e){
        let cBook = Object.values(books)[i]
        
            console.log(filter.innerHTML)
            console.log(Object.values(cBook)[e])
            if(filter == Object.values(cBook)[e]){
                const textnode = document.createTextNode(Object.entries(cBook))
                const booklist = document.createElement("li")
                booklist.appendChild(textnode)
                window.alert("The pubblication date is " + filter)
                searchResults.innerHTML = Object.entries(cBook)
                document.getElementById("availablebooks").appendChild(booklist) 
                console.log("MMMMMMMMM" + searchResults )
            }

        }
   
}


}
console.log(Object.keys(books))
let subbutton = document.getElementById("submission")
subbutton.addEventListener("click",bookFilter)

