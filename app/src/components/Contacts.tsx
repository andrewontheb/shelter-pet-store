import React from "react";

export const ContactUs = () => {
  console.log('contact us');
  return (
    <div className="flex-1 bg-gray-100 flex flex-col items-center px-4 sm:px-6 lg:px-8 fade-in-out">
      <h1 className="title text-indigo-500 py-12 font-light">Contact Us</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              Feel free to reach out to us via the form or using the contact details below:
            </p>

            <div>
              <h3 className="text-sm font-medium text-gray-700">Address</h3>
              <p className="text-gray-600">123 Main Street, City, Country</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700">Phone</h3>
              <p className="text-gray-600">+1 (123) 456 7890</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700">Email</h3>
              <p className="text-gray-600">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



