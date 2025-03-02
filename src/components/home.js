import React from "react";

import img1 from "../images/norway/IMG_1166.PNG";
import img2 from "../images/norway/IMG_1167.PNG";
import img3 from "../images/norway/IMG_1168.PNG";
import img4 from "../images/norway/IMG_1169.PNG";
import img5 from "../images/norway/IMG_1170.PNG";
import img6 from "../images/norway/IMG_1171.PNG";
import img7 from "../images/norway/IMG_1172.PNG";
import img8 from "../images/norway/IMG_1173.PNG";
import img9 from "../images/norway/IMG_1174.PNG";
import img10 from "../images/norway/IMG_1175.PNG";
import img11 from "../images/norway/IMG_1176.PNG";
import Journal from "./journal";
import Footer from "./footer";
export default function Home() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];
  return (
    <div>
       
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="title">Norway, Unfiltered</h1>
          <p className="subtitle">Land of Fjords & Northern Lights</p>
        </div>
      </section>
      <Journal/>
       {/* gallery Section */}
      <section className="gallery-container">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery  ${index + 1}`} />
          </div>
        ))}
      </section>
     
      <Footer/>
    </div>
  );
}
