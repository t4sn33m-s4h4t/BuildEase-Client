import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Title from '../Shared/Title';
import { toast } from 'react-toastify';

const Contact = () => {
    return (
        <div className="shadow-lg py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <Title 
          Heading="Contact Us" 
          Subheading="Clear your all confusion contacting with us."
        />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
                    <div className="bg-white p-6 rounded-md shadow-lg">
                        <form
                       onSubmit={(e) => {
                                              e.preventDefault()
                                              toast.info("This Feature Is Not Available Till Now")
                                          }}
                        >
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-purple-700 font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                required={true}
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-purple-700 font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                required={true}
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-purple-700 font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
 
                    <div className="bg-purple-600 p-6 rounded-md shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                        <p className="mb-4">
                            We'd love to hear from you! Reach out to us for any inquiries or feedback.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="w-6 h-6 mr-2" />
                                <p>26/20, Dhaka Cantonment, Dhaka-1206</p>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="w-6 h-6 mr-2" />
                                <p>+8801735746159</p>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="w-6 h-6 mr-2" />
                                <p>mdsahat6397@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;