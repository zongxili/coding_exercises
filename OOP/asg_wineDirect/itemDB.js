/**
	This itemDB.js file contains all the item info as an object with Item Code as the key.
	They are all included in a parent object.
	The file exports a nested Object.
*/

const item_db = {
	"0001": {
		itemName: "apple",
		itemCode: 0001,
		price: 3.00,
		sales: function(quantity) {
			return quantity * this.price;
		}
	},
	"0002": {
		itemName: "banana",
		itemCode: 0002,
		price: 2.00,
		sales: function(quantity) {
			return quantity * this.price;
		}
	},
	"0003": {
		itemName: "blueberry",
		itemCode: 0003,
		price: 1.67,
		/**
		* @param  {number} 				quantity or weight of the item.
		* @return {float number}	The total price for this item after the discount.
		*/
		sales: function(quantity) {
			return (Math.floor(quantity/2) * this.price + quantity % 2 * this.price); // buy one get one free discount
		}
	}
};

module.exports = item_db;