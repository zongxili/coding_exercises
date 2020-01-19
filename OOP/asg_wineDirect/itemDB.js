/**
	This itemDB.js file contains all the item info as an object with Item Code as the key.
	They are all included in a parent object.
	The file exports a nested Object.
*/

const item_db = {
	"0001": {
		itemName: "apple",
		itemCode: "0001",
		price: 3.00,
		sales: function(quantity) {
			return quantity * this.price;
		}
	},
	"0002": {
		itemName: "banana",
		itemCode: "0002",
		price: 2.00,
		sales: function(quantity) {
			return quantity * this.price;
		}
	},
	"0003": {
		itemName: "blueberry",
		itemCode: "0003",
		price: 1.67,
		/**
		* @param  {number} 				quantity or weight of the item.
		* @return {float number}	The total price for this item after the discount.
		*/
		sales: function(quantity) {
			return Math.ceil(quantity / 2) * this.price; // "buy one get one free" discount
		}
	},
	"0004": {
		itemName: "Hot Chocolate",
		itemCode: "0004",
		price: 10.49,
		sales: function(quantity) {
			return quantity * (this.price - 2); // $2 discount for each item
		}
	},
	"0005": {
		itemName: "All-Purpose Cleaner",
		itemCode: "0005",
		price: 13.29,
		sales: function(quantity) {
			return quantity * (this.price - 3.60); // $3.60 discount for each item
		}
	},
	"0006": {
		itemName: "Lollipops",
		itemCode: "0006",
		price: 11.39,
		sales: function(quantity) {
			return Math.ceil(quantity / 2) * this.price; // "buy one get one free" discount
		}
	},
	"0007": {
		itemName: "Stroopwafel",
		itemCode: "0007",
		price: 29.99,
		sales: function(quantity) {
			return quantity * this.price;
		}
	},
};

module.exports = item_db;