/**
 * This cashier.js file is the source file for a grocery store cash register;
 * It takes the name of a .txt file as an input source from the Command Line argument;
 * It also imports a nested Object from itemDB.js as the information of store items.
 */
const inputFile = process.argv[2];
const fs = require("fs");

/**
 * a single item object
 * contains the quantity of the item and the total price after the discount.
 */
class singleItemInBill {
	constructor(quantity, total_price) {
		this.quantity = quantity;
		this.total_price = total_price;
	}
}

/**
 * Total bill object
 * contains a Set function addToBill(itemPrice) which increases the totalPrice with input number itemPrice
 * contains a Get function getPriceAfterSales() which returns the total price for this bill after the discount
 */
class totalBill {
	constructor() {
    this.totalPrice = 0;
	}
	addToBill(itemPrice) {
		this.totalPrice += itemPrice;
	}
	getPriceAfterSales() {
		let discount = Math.floor(this.totalPrice / 100) * 5;
		return this.totalPrice - discount;
  }
}

let itemsInBill = {}; // an object contains objects of singleItemInBill with item names as their keys
let itemArr = []; // the array stores bill's information from the input text file
let aBill = new totalBill();
let undefinedCode = []; // save the codes from input text file if they can Not be found in the Store items' database

const item_db = require('./itemDB'); // import item database from another file

var data = fs.readFileSync(inputFile, 'utf8'); // read the input file
itemArr = data.toString().split("\n");
for (let a = 0; a < itemArr.length; a++){
	itemArr[a] = [itemArr[a].split(":")[0], parseFloat(itemArr[a].split(":")[1])];
}

for (let a = 0; a < itemArr.length; a++){ // search the item info by the input code from text file in the Store items' database
	if (item_db[itemArr[a][0]]){
		let name = item_db[itemArr[a][0]].itemName;
		let totalPriceForSingleItem = item_db[itemArr[a][0]].sales(itemArr[a][1]);
		itemsInBill[name] = new singleItemInBill(itemArr[a][1], parseFloat(totalPriceForSingleItem.toFixed(2)));
		aBill.addToBill(totalPriceForSingleItem);
	}
	else undefinedCode.push(itemArr[a][0]);
}

// output part
console.table(itemsInBill);
if (undefinedCode.length !== 0){
	process.stdout.write("Undefined Code(s): ");
	undefinedCode.map(code =>{
		process.stdout.write(code + ' ');
	})
	console.log();
}
console.log(`Total Price is $${aBill.getPriceAfterSales()}.`);