import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (

    <>
    <Navbar/>
    <main className="mx-auto max-w-6xl mb-10 px-4 py-12">
        {/* left section */}
      <section className="grid gap-8 rounded-2xl bg-white p-6 shadow-md sm:p-8 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="flex flex-col justify-center rounded-xl bg-linear-to-br from-orange-50 to-yellow-50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Get in touch</p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">We’d love to hear from you.</h1>
          <p className="mb-6 text-base text-gray-600">
            Whether you want a recipe request, partnership, or just want to say hello, our team is here to help.
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p>hello@recipiesapp.com</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p>+1 (555) 234-5678</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Location</p>
              <p>123 Flavor Street, New York, NY</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {submitted ? (
            <p className="w-full rounded-md bg-green-50 p-4 text-sm text-green-800" role="status">
              Thanks for reaching out!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}