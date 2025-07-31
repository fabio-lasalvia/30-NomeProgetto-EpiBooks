import { render, screen } from "@testing-library/react";
import { expect, it, test } from "vitest";

import MyFooter from "../components/MyFooter";
import { MemoryRouter } from "react-router-dom";

//oppure it al posto di test
test("renders the content", () => {
  //rendering del componente
  render(
    <MemoryRouter>
      <MyFooter />
    </MemoryRouter>
  );
  screen.debug();

  //selezionare dal DOM virtuale i componenti
  expect(screen.getByText(/epiBooks.*diritti riservati/i)).toBeInTheDocument(); //i sta per "insensitive", così non verifica maiuscole o minuscole
  //screen è come se fosse l'inspector del browser

  //TEST PASSATO
});
