import { screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";
import { renderWithRouter } from "../utils/test.utils";

describe("Search Query Persistence", () => {
  test("should persist the search query after input", () => {
    renderWithRouter(<Search />);
    const input = screen.getByPlaceholderText("Wyszukaj produkty");
    fireEvent.change(input, { target: { value: "apple" } });
    expect(input.value).toBe("apple");
  });
});
