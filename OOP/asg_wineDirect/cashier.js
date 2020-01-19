const inputFile = process.argv[2];
const fs = require("fs");

class singleItemInBill {
	constructor(quantity, total_price) {
		this.quantity = quantity;
		this.total_price = total_price;
	}
}

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

let itemsInBill = {};
let itemArr = [];
let aBill = new totalBill();
let undefinedCode = [];

const item_db = require('./itemDB'); // import item database from another file

var data = fs.readFileSync(inputFile, 'utf8');
itemArr = data.toString().split("\n");
for (let a = 0; a < itemArr.length; a++){ // should try using map
	itemArr[a] = [itemArr[a].split(":")[0], parseFloat(itemArr[a].split(":")[1])];
} // read the input file

for (let a = 0; a < itemArr.length; a++){
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