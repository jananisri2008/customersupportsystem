import React from "react";

function Ticket({ ticket, index, removeTicket, markResolved }) {
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

    const formatDate=(timestamp)=>{
        const date=new Date(timestamp);
        return date.toLocaleString();
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
            <div>
                <strong>Time:</strong> {ticket.date ? formatDate(ticket.date) :"Not Available"}
            </div>
            
            <button onClick={()=>markResolved(ticket.id)}
               disabled={ticket.resolved}
            >
                {ticket.resolved?"resolved ✔ ":"resolve"}
            </button>
            
            <button onClick={() => removeTicket(ticket.id)}>Remove</button>
        </div>
    );
}

export default Ticket;
