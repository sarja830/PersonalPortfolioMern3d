import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { contactViaEmail } from "../constants";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Contact information
  const linkedInUrl = "https://www.linkedin.com/in/sarth830/";
  const emailAddress = "sarth830@gmail.com";

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    alert(`📧 Contact form is temporarily offline. Please reach out to me via:\n\n💼 LinkedIn: ${linkedInUrl}\n✉️ Email: ${emailAddress}\n\nThank you for your understanding!`);
  };



  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 mb-6'>
          <p className='text-yellow-300 text-sm'>
            📧 <strong>Contact form is temporarily offline</strong><br />
            Please reach out to me via:<br />
            💼 LinkedIn: <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 underline">{linkedInUrl}</a><br />
            ✉️ Email: <a href={`mailto:${emailAddress}`} className="text-white hover:text-blue-400 underline">{emailAddress}</a>
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='from_name'
              value={form.from_name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='from_email'
              value={form.from_email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary border py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");