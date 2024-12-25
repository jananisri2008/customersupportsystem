import React from "react";
import Ticket from "./Ticket";

function TicketQueue({ tickets, removeTicket, reorderTickets }) {
    const handleDragEnd = (e) => {
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
                />
            ))}
        </div>
    );
}

export default TicketQueue;
