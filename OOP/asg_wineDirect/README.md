# Grocery Store Cash Register

This program will take a formatted text file as input in the Command-Line and outputs a bill with items' names, quantity/weight and total price.

## Introduction
- The cashier.js is the source file containing the logic of getting a bill from an input text file.

- The itemDB.js file exports a nested object which contains all item Objects with items codes as keys and item code, item name, function sales() as items information.

- A single bill is stored as an object.

- Discounts for items and coupons for a bill are stored as functions in the objects.

## Dependencies
- Node.js

## Getting Started
- [Install the Node.js.](https://nodejs.org/en/download/)
- Run the server using the `node cashier.js example.txt` command. `example.txt` can be changed to any other name of formatted text files.