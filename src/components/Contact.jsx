import { useForm } from "react-hook-form";

const Contact = () => {
  const { register } = useForm();

  return (
    <div id="contact">
      <p className="lg:text-6xl text-xl font-semibold text-center lg:mt-16 mt-4">
        Contact <span className="text-purple-500 ">Me Here</span>
      </p>
      <p className="lg:text-xl text-xs text-white/60 text-center py-4 tracking-wider">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <section className="contact-section py-1  mx-auto lg:mt-10">
        <div className="container  px-4">
          <form className="max-w-md mx-auto">
            <div className="mb-4 ">
              <label className="ml-2">Name</label>
              <input
                {...register("UserName")}
                type="text"
                placeholder="Your Name"
                className="lg:w-[500px] w-[250px] border text-white/80 bg-slate-900 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500 my-2"
              />
            </div>
            <div className="mb-4 ">
              <label className="ml-2">Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className="lg:w-[500px] w-[250px] border text-white/80 bg-slate-900 border-gray-300 rounded-md px-4 py-2 my-2 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4 ">
              <label className="ml-2">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="lg:w-[500px] w-[250px] border text-white/80 bg-slate-900 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500 my-2"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-800 to bg-blue-800 hover:scale-110 transition-all duration-300 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
