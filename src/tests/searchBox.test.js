describe("Search Functionality", () => {
  test("should return products filtered by name within a specific category", () => {
    const products = [
      { id: 1, name: "Apple", category: "Fruits", description: "Sweet apple" },
      {
        id: 2,
        name: "Banana",
        category: "Fruits",
        description: "Fresh banana",
      },
      {
        id: 3,
        name: "Carrot",
        category: "Vegetables",
        description: "Organic carrot",
      },
    ];
    const categoryId = "Fruits";
    const searchQuery = "apple";
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.category === categoryId,
    );
    expect(filteredProducts).toEqual([products[0]]);
  });
});
