// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter your location"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h3 className="mb-4">Contact Details</h3>
          <p><strong>Heritage Foods Limited</strong></p>
          <p><strong>Phone:</strong> 123-456-7891</p>
          <p><strong>Email:</strong> heritagefoods@gmail.com</p>
          <p><strong>Address:</strong> Andhra Pradesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
