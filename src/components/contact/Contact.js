import React,{useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import { motion } from 'framer-motion';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const inputClassName = (errorCondition) => `
    w-full px-5 py-4 rounded-xl bg-gray-900/50 border ${
      errorCondition ? 'border-designColor focus:border-designColor focus:ring-1 focus:ring-designColor' 
      : 'border-gray-800/50 focus:border-designColor/50 focus:ring-1 focus:ring-designColor/50'
    } text-white placeholder-gray-600 transition-all duration-300 outline-none
    hover:border-gray-700
  `.trim();

  const labelClassName = "block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider";

  return (
    <section
      id="contact"
      className="w-full py-20 lg:py-28 border-b border-gray-900"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <Title title="Get In Touch" des="Let's Build Something Together" />
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed mt-6">
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Fill out the form and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <ContactLeft />
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800/50 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
              <form onSubmit={handleSend} className="space-y-5" noValidate>
                {(errMsg || successMsg) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`px-5 py-4 rounded-xl text-center text-base font-medium ${
                      successMsg ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : 'bg-orange-500/10 border border-orange-500/20 text-orange-400'
                    }`}
                  >
                    {successMsg || errMsg}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="username" className={labelClassName}>Your Name</label>
                    <input
                      id="username"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={inputClassName(errMsg === "Username is required!")}
                      type="text"
                      placeholder="Sonam Gupta"
                      aria-invalid={errMsg === "Username is required!"}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClassName}>Phone Number</label>
                    <input
                      id="phone"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={inputClassName(errMsg === "Phone number is required!")}
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      aria-invalid={errMsg === "Phone number is required!"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClassName}>Email Address</label>
                  <input
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={inputClassName(errMsg === "Please give your Email!" || (email && !emailValidation()))}
                    type="email"
                    placeholder="sonam@example.com"
                    aria-invalid={errMsg === "Please give your Email!" || (email && !emailValidation())}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={labelClassName}>Subject</label>
                  <input
                    id="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={inputClassName(errMsg === "Please give your Subject!")}
                    type="text"
                    placeholder="Project inquiry / Collaboration / Hello"
                    aria-invalid={errMsg === "Please give your Subject!"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClassName}>Message</label>
                  <textarea
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${inputClassName(errMsg === "Message is required!")} min-h-[140px] resize-y`}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    rows={5}
                    aria-invalid={errMsg === "Message is required!"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={handleSend}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-designColor to-pink-600 text-white font-medium text-base hover:from-pink-600 hover:to-designColor hover:shadow-[0_0_30px_rgba(255,1,79,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-gradient-to-br from-designColor/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact