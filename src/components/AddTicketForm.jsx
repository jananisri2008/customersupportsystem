import React, { useState } from "react";

function AddTicketForm({ addTicket }) {
    const [customerName, setCustomerName] = useState("");
    const [issue, setIssue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (customerName && issue) {
            const newTicket = {
                id: Date.now(),
                customerName,
                issue,
                date:new Date().toLocaleString(),
            };
            addTicket(newTicket);
            setCustomerName("");
            setIssue("");
        }
    };

    return (
        <form className="add-ticket-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <br/>
            <input
                type="text"
                placeholder="Issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
            />
            <br/>
            <button type="submit">Add Ticket</button>
        </form>
    );
}

export default AddTicketForm;
