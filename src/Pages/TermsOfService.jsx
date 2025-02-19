 
import Title from '../Components/Shared/Title';

const TermsOfService = () => {
    return ( 
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
                <Title Heading="Terms of Service" />
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">

                <div className="space-y-6">
                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Welcome to <span className="font-semibold">BuildEase</span>. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our platform.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. User Responsibilities</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            As a user of BuildEase, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                            <li>Provide accurate and complete information during registration.</li>
                            <li>Use the platform only for lawful purposes.</li>
                            <li>Not engage in any activity that disrupts or interferes with the platform's functionality.</li>
                            <li>Respect the intellectual property rights of others.</li>
                        </ul>
                    </section>

                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Intellectual Property</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            All content on BuildEase, including text, graphics, logos, and software, is the property of BuildEase or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without prior written permission.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Limitation of Liability</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            BuildEase shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform. We do not guarantee the accuracy, completeness, or reliability of any content on the platform.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Termination</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            We reserve the right to terminate or suspend your access to BuildEase at any time, without notice, for any reason, including but not limited to a violation of these terms.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Changes to Terms</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            BuildEase may update these terms from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of the platform after such changes constitutes your acceptance of the updated terms.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Contact Information</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            If you have any questions about these terms, please contact us at:
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Email: <a href="mailto:mdsahat6397@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">mdsahat6397@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;