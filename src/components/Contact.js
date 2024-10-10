const Contact = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-md w-full"> {/* Set a max width and full width for smaller screens */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-center text-gray-500">Contact Us</h1>
        </div>
        <div className="my-10">
          <label className="font-semibold text-gray-500 text-lg">Your email:</label><br />
          <input
            className="border-2 border-solid border-gray-300 h-10 w-full mt-2 rounded-lg p-2 bg-gray-50"
            type="email"
            placeholder="name@hungrybite.com"
          />
        </div>
        <div className="my-10">
          <label className="font-semibold text-gray-500 text-lg">Subject:</label><br />
          <input
            className="border-2 border-solid border-gray-300 h-10 w-full mt-2 rounded-lg p-2 bg-gray-50"
            placeholder="Let us know how we can help you"
            type="text"
          />
        </div>
        <div className="my-10">
          <label className="font-semibold text-gray-500 text-lg">Your message:</label><br />
          <textarea
            className="border-2 border-solid border-gray-300 h-40 w-full mt-2 rounded-lg p-2 bg-gray-50"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="my-10 font-semibold text-gray-500 text-lg">
          <button className="p-2 border border-solid rounded-lg hover:bg-gray-500 hover:text-white active:bg-white active:text-gray-500 transition-transform duration-100 w-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
