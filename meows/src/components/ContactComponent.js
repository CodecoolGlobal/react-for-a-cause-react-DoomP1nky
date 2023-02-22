import React, { useState } from "react";

function DonationContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        amount: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.amount < 1) {
            alert("Please enter a valid donation amount.");
            return;
        }
        setFormSubmitted(true);
        console.log(formData);
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div id="contactComponent">
            {formSubmitted ? (
                <div>
                    <p>
                        We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
                        Have a great day!
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+36xxxxxxxxx"
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Donation Amount:
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Donate Now</button>
                </form>
            )}
        </div>
    );
}

export default DonationContactForm;
