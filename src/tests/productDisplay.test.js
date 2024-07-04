import { screen } from "@testing-library/react";
import { renderWithProvider } from "../utils/test.utils";
import ProductCard from "../components/ProductCard";
import "@testing-library/jest-dom";

describe("Product Display", () => {
  test("should display the correct product name and price", () => {
    const product = {
      id: 1,
      name: "Apple",
      price: 1.99,
      description: "Sweet apple",
      category: "Fruits",
    };
    renderWithProvider(<ProductCard product={product} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Cena: 1.99 zł")).toBeInTheDocument();
  });
});
