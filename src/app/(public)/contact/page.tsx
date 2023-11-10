import { Metadata } from "next";
import "./style.scss";

export const metadata: Metadata = {
  title: "Bog'lanish",
  description:
    "Vodiy parfum | Biz haqimizda",
};

const ContactPage = () => {
  return <section id="contact-page">
    <h1>Biz bilan bog`lanish</h1>
    <p>
      Telegram:
      <a href="#">Vodiy Parfum</a>
    </p>
     </section>
};

export default ContactPage;
