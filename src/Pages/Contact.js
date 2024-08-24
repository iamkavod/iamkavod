import React, { useState } from 'react';
import axios from 'axios';
import { Kavod } from '../Assets'
import { Footer, Nav } from '../UI'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/myzgpdeb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("There was an error submitting the form.");
        }
      })
      .catch((error) => {
        alert("There was an error submitting the form.");
      });
  };

  return (
    <main>
      {/* Nav */}
      <Nav />
      {/* Contact Me */}
      <div className="lg:px-8 px-2">
        <div className="bg-black px-4 py-16 mx-auto max-w-screen-[1443px] md:px-24 lg:px-8 lg:py-20 rounded-[10px]">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-[1443px] mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <div
                className="inline-flex items-center border border-primaryColor p-4 rounded-full bg-primaryColor"
              >
                <a href='' className="inline-flex justify-center items-center border border-primaryColor p-4 rounded-full bg-primaryColor w-full">
                  <img
                    className="object-center w-auto h-60"
                    src={Kavod}
                    alt="iamkavod"
                  />
                </a>
              </div>
            </div>
            <div className="w-full max-w-[800px]">
              <div className="rounded lg:p-7 p-0">
                <h3 className="mb-4 font-semibold sm:mb-6 lg:text-[50px] text-xl text-white">
                  Let's Collaborate!
                </h3>
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <input
                        placeholder="Name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <input
                        placeholder="Email"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <input
                        placeholder="Subject"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <div className="mb-1 sm:mb-2">
                        <textarea
                          placeholder="Message"
                          required
                          type="text"
                          className="flex-grow w-full h-40 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primaryColor text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : <p className='text-white'>Thank you for your message! We will get back to you soon.</p>}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
