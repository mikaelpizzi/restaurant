import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_award-card_content">
      <p
        className="p__cormorant"
        style={{ color: "#ddca87", fontSize: "20px" }}
      >
        {title}
      </p>
      <p className="p__cormorant" style={{ fontSize: "17px" }}>
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard key={award.title} award={award} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
