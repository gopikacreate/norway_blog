import React from "react";

import Journal from "./journal";
import Footer from "./footer";
import { getOptimizedImage } from "../utils/cloudinary";
export default function Home() {
  const images = [
    
    getOptimizedImage("v1740924426/IMG_1171_mxxjqp.jpg"),
    getOptimizedImage("v1740924419/IMG_1181_s2xicb.jpg"),


    getOptimizedImage("v1740924426/IMG_1180_qc8upz.jpg"),
    getOptimizedImage("v1740924429/IMG_1183_rtrnsc.jpg"),

    getOptimizedImage("v1740924424/IMG_1173_jftn49.jpg"),

    getOptimizedImage("v1740924421/IMG_1182_lzqgg5.jpg"),

  
    getOptimizedImage("v1740924416/IMG_1168_ssnerq.jpg"),

    getOptimizedImage("v1740924415/IMG_1166_vtsjge.jpg"),
    getOptimizedImage("v1740924449/IMG_1169_jjmfbc.jpg"),
    getOptimizedImage("v1740924446/IMG_1174_bs8qcm.jpg"),
    getOptimizedImage("v1740924445/IMG_1176_uqa0pc.jpg"),
    getOptimizedImage("v1740924443/IMG_1178_vi56xp.jpg"),
    getOptimizedImage("v1740924440/IMG_1175_u6rcpo.jpg"),
    getOptimizedImage("v1740924439/IMG_1177_cssfrd.jpg"),
    getOptimizedImage("v1740924436/IMG_1185_hyorak.jpg"),
    getOptimizedImage("v1740924433/IMG_1167_kgslfp.jpg"),
    getOptimizedImage("v1740924433/IMG_1184_hwp4su.jpg"),
    getOptimizedImage("v1740924431/IMG_1172_v5p8qx.jpg"),
 
    getOptimizedImage("v1740924427/IMG_1170_fw8btv.jpg"),

  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="title"> Norway: A Tale of Ice and Light</h1>
          <p className="subtitle">Land of Fjords & Northern Lights</p>
        </div>
      </section>
      <Journal />
      {/* gallery Section */}
      
      <section className="gallery-container">
  <h2 className="gallery-heading">Gallery</h2>

  <div className="image-grid">
    {images.map((src, index) => (
      <div className="gallery-item" key={index}>
        <img src={src} alt={`Gallery ${index + 1}`} />
      </div>
    ))}
  </div>
</section>


      <Footer />
    </div>
  );
}
