import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-us container" id="contact">
      <h1 className="page-heading">Contact Us</h1>
      <form>
        <input
          id="name"
          className="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          id="email"
          className="email"
          type="email"
          placeholder="Email"
          required
        />
        <textarea rows={5} placeholder="Please enter query..." />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
