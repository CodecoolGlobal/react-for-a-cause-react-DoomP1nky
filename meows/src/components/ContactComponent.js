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
            <p>Contact</p>
            {formSubmitted ? (
                <div>
                    <p>
                        We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
                        Have a great day!
                    </p>
                </div>
            ) : (
                <div className="card">
                    <h2>Contact us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="col">
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="col">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="col">
                                <div className="form-group">
                                    <label>Phone:</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+36xxxxxxxxx"
                                        required
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="col">
                                <div className="form-group">
                                    <label>Donation Amount:</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
                            </div>
                        
                            <br />
                            <div className="col">
                                <button type="submit">Donate Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
            }
        </div >
    );
}

export default DonationContactForm;
