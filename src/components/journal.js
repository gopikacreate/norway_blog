

import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img9 from "../images/norway/IMG_1174.PNG";
import img10 from "../images/norway/IMG_1175.PNG";
import img11 from "../images/norway/IMG_1176.PNG";

export default function Journal() {
    
   
    const journalEntries = [
        {
          title: "Chasing the Northern Lights",
          image: img11,
          description:
            "A magical experience witnessing the Aurora Borealis dancing in the Arctic sky.",
        },
        {
          title: "Hiking the Norwegian Fjords",
          image: img10,
          description:
            "Breathtaking views from the cliffs of Preikestolen and Trolltunga.",
        },
        {
          title: "Exploring Oslo’s Vibrant Culture",
          image: img9,
          description:
            "From Viking history to modern art, Oslo is a city of endless discoveries.",
        },
      ];
     
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [selectedEntry, setSelectedEntry] = useState(null);
      
        const openModal = (entry) => {
          setSelectedEntry(entry);
          setModalIsOpen(true);
        };
      
        const closeModal = () => {
          setModalIsOpen(false);
          setSelectedEntry(null);
        };
      
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        };
        
  return (
    <section className="journal-carousel">
    <h2 className="journal-heading"> Journal</h2>

    <Slider {...settings}>
      {journalEntries.map((entry, index) => (
        <div key={index} className="journal-slide" onClick={() => openModal(entry)}>
          <img src={entry.image} alt={entry.title} className="journal-image" />
          <div className="journal-overlay">
            <h3 className="journal-title">{entry.title}</h3>
            <p className="journal-description">{entry.description}</p>
          </div>
        </div>
      ))}
    </Slider>

    {/* Modal for Journal Details */}
    {selectedEntry && (
  <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="journal-modal">
    <div className="modal-content">
      <h2>{selectedEntry.title}</h2>
      <img src={selectedEntry.image} alt={selectedEntry.title} className="modal-image" />
      <p>{selectedEntry.description}</p>
      <button className="close-button" onClick={closeModal}>&times;</button>

    </div>
  </Modal>
)}

  </section>
  )
}
