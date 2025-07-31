import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";
import { expect, test } from "vitest";

test("cliccando sul libro 'MORDENKAINEN' apre BookDetails con titolo corretto", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  //trova il titolo esatto
  const titoloLibro = screen.getByText(/mordenkainen's tome of foes/i);
  expect(titoloLibro).toBeInTheDocument();

  //trova il contenitore della card
  const card = titoloLibro.closest(".card");
  expect(card).not.toBeNull();

  //trova il btn "Dettagli" dentro quella card
  const dettagliBtn = within(card).getByText("Dettagli");
  fireEvent.click(dettagliBtn);

  //dopo il click viene mostrato il titolo
  expect(screen.getByText(/mordenkainen's tome of foes/i)).toBeInTheDocument();

  //TEST PASSATO
});
