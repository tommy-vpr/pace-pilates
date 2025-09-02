import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col mb-8">
      <h2 className="text-3xl mb-4 font-playfair italic text-coffee">
        Sign up for the latest updates
      </h2>

      <form
        action="/subscribe"
        method="post"
        className="flex items-center gap-2"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="px-3 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-coffee text-white rounded-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
