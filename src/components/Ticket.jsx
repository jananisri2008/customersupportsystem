import React from "react";

function Ticket({ ticket, index, removeTicket }) {
    const handleDragStart = (e) => {
        e.dataTransfer.setData(
            "text",
            JSON.stringify({ sourceIndex: index })
        );
    };

    const handleDrop = (e) => {
        e.dataTransfer.setData(
            "text",
            JSON.stringify({ destinationIndex: index })
        );
    };

    return (
        <div
            className="ticket"
            draggable
            onDragStart={handleDragStart}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <div>
                <strong>Customer:</strong> {ticket.customerName}
            </div>
            <div>
                <strong>Issue:</strong> {ticket.issue}
            </div>
            <button onClick={() => removeTicket(ticket.id)}>Resolve</button>
        </div>
    );
}

export default Ticket;
