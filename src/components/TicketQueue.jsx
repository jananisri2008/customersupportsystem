import React from "react";
import Ticket from "./Ticket";

function TicketQueue({ tickets, removeTicket, reorderTickets,markResolved }) {
    const handleDragEnd = (e) => {
        e.preventDefault();

        const data=e.dataTransfer.getData("text");
        if(!data) return;

        const { sourceIndex, destinationIndex } = JSON.parse(e.dataTransfer.getData("text"));
        if (sourceIndex !== undefined && destinationIndex !== undefined) {
            reorderTickets(sourceIndex, destinationIndex);
        }
    };

    return (
        <div
            className="ticket-queue"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDragEnd}
        >
            {tickets.map((ticket, index) => (
                <Ticket
                    key={ticket.id}
                    ticket={ticket}
                    index={index}
                    removeTicket={removeTicket}
                    markResolved={markResolved}
                />
            ))}
        </div>
    );
}

export default TicketQueue;
