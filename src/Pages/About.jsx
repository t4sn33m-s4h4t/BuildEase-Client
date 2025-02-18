 
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About BuildEase</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to <span className="font-semibold text-purple-600">BuildEase</span>, your ultimate solution for managing and renting apartments and rooms with ease. Our platform is designed to simplify the process of finding and managing rental properties, whether you're a tenant or a property owner.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          With <span className="font-semibold text-purple-600">BuildEase</span>, you can explore a wide range of properties, filter them based on your preferences, and seamlessly complete your rental process. Our integrated payment system ensures a hassle-free transaction experience.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          For property owners and administrators, <span className="font-semibold text-purple-600">BuildEase</span> offers a powerful dashboard to manage properties, tenants, and announcements. Our data visualization tools help you make informed decisions and optimize your property management.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
          <li>Easy room and apartment rentals for users.</li>
          <li>Advanced sorting and filtering options.</li>
          <li>Secure payment integration with Stripe.</li>
          <li>Coupon system for discounts and promotions.</li>
          <li>Admin dashboard for property management.</li>
          <li>Real-time statistics and data visualization.</li>
          <li>Authentication and secure session management.</li>
          <li>Interactive UI with toast notifications.</li>
        </ul>
        <p className="text-lg text-gray-600 mt-8">
          Join <span className="font-semibold text-purple-600">BuildEase</span> today and experience a smarter way to manage and rent properties. Whether you're looking for a new home or managing multiple properties, we've got you covered!
        </p>
      </div>
    </div>
  );
};

export default About;