import React, { useState } from "react";
import AddTicketForm from "./components/AddTicketForm";
import TicketQueue from "./components/TicketQueue";

function App() {
    const [tickets, setTickets] = useState([]);

    const addTicket = (ticket) => {
        setTickets((prevTickets) => [...prevTickets, ticket]);
    };

    const removeTicket = (id) => {
        setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== id));
    };

    const reorderTickets = (startIndex, endIndex) => {
        const updatedTickets = [...tickets];
        const [movedTicket] = updatedTickets.splice(startIndex, 1);
        updatedTickets.splice(endIndex, 0, movedTicket);
        setTickets(updatedTickets);
    };

    const markResolved = (id) => {
        setTickets((prevTickets) =>
            prevTickets.map((ticket) =>
                ticket.id === id ? { ...ticket, resolved: !ticket.resolved } : ticket
            )
        );
    };

    
    return (
        <div className="app-container">
            <h1>Customer Support Ticket System</h1>
            <AddTicketForm addTicket={addTicket}/>
            <br/>
            <TicketQueue
                tickets={tickets}
                removeTicket={removeTicket}
                reorderTickets={reorderTickets}
                markResolved={markResolved}
            />
        </div>
    );
}

export default App;
