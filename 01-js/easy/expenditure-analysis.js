/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store total spending for each category
  const categoryTotals = {};

  // Iterate through transactions
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category is not in categoryTotals, initialize it with the current transaction's price
    if (!categoryTotals[category]) {
      categoryTotals[category] = price;
    } else {
      // If the category already exists, add the current transaction's price to the total
      categoryTotals[category] += price;
    }
  });

  // Convert the categoryTotals object to an array of objects
  const result = Object.entries(categoryTotals).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));

  return result;
 
}

module.exports = calculateTotalSpentByCategory;
