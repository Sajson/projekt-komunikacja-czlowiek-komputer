describe("Cart Functionality", () => {
  test("should add a product to the cart and update total", () => {
    const cart = { items: [], total: 0 };
    const productToAdd = { id: 1, name: "Apple", price: 1.99 };
    const expectedCart = {
      items: [{ ...productToAdd, quantity: 1 }],
      total: 1.99,
    };
    cart.items.push({ ...productToAdd, quantity: 1 });
    cart.total += productToAdd.price;
    expect(cart).toEqual(expectedCart);
  });
});
