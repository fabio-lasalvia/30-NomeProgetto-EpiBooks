import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe ('testiamo applicazione', () => {
    it ('renders welcome',()=> {
        render(<App/>)
        expect(screen.getByText(/Hey, Nice To See You/i)).toBeInTheDocument()
    });

    // it('render allthebooks after sometime', async () => {
    //     render(<App/>)
    //     await waitFor(() => {
    //         expect(screen.queryByText(/The Last Wish/i)).toBeInTheDocument()
    //     }, {timeout : 7000} )
    // },10000);

    it('renders five cards', ()=> {

    render(<App />)
    
    fireEvent.click(screen.queryByText('Books React'))
    expect(screen.queryAllByRole('button',{name: /dettagli/i})).toHaveLength(20)
})
    it('renders comment area', async ()=> {

    render(<App />)
    fireEvent.click(screen.queryByText('Books React'))
    fireEvent.click(screen.queryAllByRole('button',{name: /dettagli/i}) [0])
    expect(await screen.findByText('Commenti')).toBeInTheDocument()
})
})