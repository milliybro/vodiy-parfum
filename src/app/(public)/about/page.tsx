import { Metadata } from "next";

import "./style.scss";

export const metadata: Metadata = {
  title: "Biz haqimizda",
  description:
    "Vodiy parfum | Biz haqimizda",
};

const AboutPage = () => {
  return <section id="about-page">
    <div className="container">
    <div className="about">
      {/* <!--<img src="girl.png" className="pic">--> */}
      <div className="text">
        <h2>About Us</h2>
        <h5>Front-end Developer & <span>Designer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div className="data">
        <a href="#" className="hire">Hire Me</a>
        </div>
      </div>
    </div>
    </div>
  </section>;
};

export default AboutPage;
