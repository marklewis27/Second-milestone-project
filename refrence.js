const items = [
    { name: "bike",     price: 100   },
    { name: "tv",       price: 200   },
    { name: "album",    price: 10    },
    { name: "book",     price: 5     },
    { name: "phone",    price: 1000  },
    { name: "computer", price: 500   },
    { name: "keyboard", price: 25    }
];


// this is now linked to the button in the html file, only displays the sum when the button is clicked

// this adds up the values of the prices in the array, the current total is a running total it then loops around and 
// adds on the next item value and continues around until there are no more items in the array
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
// make sure to add in this second argument as a starting point so the function knows the value to 
// start counting from.
}, 0)

// using this code will return the value of the abvoe function to the page rather than to the console
// using the id of the html to target where it is displayed, the last part of the statement in the brackets
// relates to the function that is going to be shown on the page
document.getElementById("click").innerHTML = (total);


// this will check to see if every item is less than 100, as there are items that are more than 100
// it will return the value of false
// if the value was 1100 it would return true as eveey item in the array is less than 1100
const HasInexpensiveItem = items.every((item) => {
    return item.price <= 100
})

console.log(HasInexpensiveItem)


// this will look for any items with a price value of less than 100, if that is true it will 
// return true for the whole array of data
// if the value was changed to 0 it would return false as no items in the array of data are free
const HasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(HasInexpensiveItems)


// for each value in the array with the property of price it will return these values 
// if price was changed to names it would return the names instead. this is easier than using for loops to get the data you want
items.forEach((item) =>{
    console.log(item.price)
})


// this method will look in an array of data and find the first value that is true for the statement
// in this case a name value that is = to album and return that value
const foundItem = items.find((item) =>{
    return item.name === 'album'
})

console.log(foundItem)


// this map function allows you to get one of the othe values from the array and convert it in to a new array
const itemNames = items.map((item) =>{
    // to return the name instead of the price just change this from price to name and it will return all of the names
    return item.price
})

console.log(itemNames)


// filter the items in the array to return all the items that are equal or less than or equal to 
// 100 in the price list
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

// this will console log all of the data in the array
console.log(items)

// this will console log the fltered data in to a new array in the console
console.log(filteredItems)