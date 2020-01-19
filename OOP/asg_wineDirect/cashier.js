const inputFile = process.argv[2];
const fs = require("fs");

let itemsInBill = {};
let itemArr = [];
let totalPrice = 0.00;
let undefinedCode = [];

class singleItemInBill {
	constructor(quantity, total_price) {
		this.quantity = quantity;
		this.total_price = total_price;
	}
}

const item_db = require('./itemDB'); 

var data = fs.readFileSync(inputFile, 'utf8');
itemArr = data.toString().split("\n");
for (let a = 0; a < itemArr.length; a++){ // should try using map
	itemArr[a] = [parseInt(itemArr[a].split(":")[0]), parseFloat(itemArr[a].split(":")[1])];
}

for (let a = 0; a < itemArr.length; a++){
	if (item_db[parseInt(itemArr[a][0])]){
		let name = item_db[parseInt(itemArr[a][0])].itemName;
		let totalPriceForSingleItem = item_db[itemArr[a][0]].sales(itemArr[a][1]);
		itemsInBill[name] = new singleItemInBill(itemArr[a][1], parseFloat(totalPriceForSingleItem.toFixed(2)));
		totalPrice = totalPrice + totalPriceForSingleItem;
	}
	else undefinedCode.push(itemArr[a][0]);
}

console.table(itemsInBill);
console.log(undefinedCode); // need to format this
console.log(`Total Price is $${totalPrice}.`);