import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import animationData from "./done.json";
import animationData2 from "./Mail.json";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgvzzro");

  if (state.succeeded) {
    return (
      <div className="success">
        <p>
          شكراً! رسالتك وصلت بنجاح
          <Lottie
            animationData={animationData}
            loop={false}
            style={{ width: 40 }}
          />
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>تواصل معنا | Asser Wael Portfolio</title>
        <meta
          name="description"
          content="تواصل مع Asser Wael للحصول على مزيد من المعلومات."
        />
      </Helmet>

      <div className="ContactUS">
        {/* LEFT */}
        <motion.div
          className="ls"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Contact Me</h1>
          <p>Send me a message and I will reply as soon as possible.</p>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label>Message</label>
            <textarea name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="rs"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Lottie
            animationData={animationData2}
            loop={false}
            style={{
              width: "100%",
              maxWidth: 450,
              height: "auto",
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Contact;