 
import React from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
    return (
        <div className="py-8 bg-white dark:bg-gray-900">
            <div className="bg-purple-50 dark:bg-gray-800 rounded-md py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Stay updated with the latest news, offers, and exclusive content delivered straight to your inbox.
                    </p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            toast.info("This Feature Is Not Available Till Now");
                        }}
                        className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-700 dark:hover:bg-purple-800"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter; 