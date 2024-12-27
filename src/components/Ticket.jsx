import React, { useState } from "react";

function Ticket({ ticket, index, removeTicket, markResolved }) {
   const [resolved,setResolved]=useState(ticket.resolved);

    const handleDragStart = (e) => {
        e.dataTransfer.setData(
            "text",
            JSON.stringify({ sourceIndex: index })
        );
    };

    const handleDrop = (e) => {
        // e.dataTransfer.setData(
        //     "text",
        //     JSON.stringify({ destinationIndex: index })
        // );
    };

    const formatDate=(timestamp)=>{
        const date=new Date(timestamp);
        return date.toLocaleString();
    };

    const handleResolve=()=>{
        setResolved(true);
        markResolved(ticket.id);
    };

    return (
        <div
            className="ticket"
            draggable
            onDragStart={handleDragStart}
            onDragOver={(e) => e.preventDefault()}
            // onDrop={handleDrop}
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
            
            <button onClick={handleResolve} disabled={resolved}>
                {resolved?"resolved ✔ ":"resolve"}
            </button>
            {resolved && (
                 <button onClick={() => removeTicket(ticket.id)}>Remove</button>
            )}
            </div>
    );
}

export default Ticket;
