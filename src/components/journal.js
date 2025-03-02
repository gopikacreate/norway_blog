import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getOptimizedImage } from "../utils/cloudinary";

export default function Journal() {
  const journalEntries = [
    {
      title: "Chasing the Northern Lights",
      image: getOptimizedImage("v1740924421/IMG_1182_lzqgg5.jpg"),
      description: "Witnessing the Northern Lights—A Dream Turned Reality ",
      blog: `There are moments in life that don’t feel real, and seeing the Northern Lights was one of them.

Tromsø, nestled deep in the Arctic Circle, had already enchanted me with its quiet charm, snow-covered streets, and cozy cafés. But nothing—absolutely nothing—prepared me for the magic of the Aurora Borealis.

That night, the sky wasn’t just dark. It was a vast, endless canvas, waiting for nature’s most breathtaking masterpiece. I stood there, wrapped in layers upon layers of winter gear, my breath visible in the freezing air. Then, slowly, it happened.

A faint green shimmer emerged from the darkness, like a secret being whispered to the night. At first, it was subtle, almost like my eyes were playing tricks on me. But within minutes, the sky erupted in a symphony of swirling colors—green, purple, even hints of red and blue. It moved like a living thing, twisting and shifting in ways that felt unreal.

I had seen a thousand pictures of the Northern Lights before, but none of them came close to capturing the sheer wonder of watching them in real-time. It felt like time stood still. I didn’t want to blink, afraid I might miss even a second of this celestial dance.

I forgot about the cold. I forgot about everything. In that moment, it was just me and the universe, and for the first time in a long time, I felt truly, profoundly small in the best way possible.

Would I chase the lights again? In a heartbeat.`,
    },
    {
      title: "The Night Tromsø Shimmered Below Me",
      image: getOptimizedImage("v1740924446/IMG_1174_bs8qcm.jpg"),
      description:
        "A City of Lights, Seen from the Top of the World ",
        blog:`If you ever find yourself in Tromsø at night, do yourself a favor: get to higher ground.

I had read about Fjellheisen, a cable car that takes you to one of the best viewpoints in the city. But something about simply "taking a cable car" felt too easy, too convenient. I wanted adventure, I wanted a story. So, I decided to make my way up the hard way—on foot.

Now, let me paint the picture: it’s night, it’s freezing, and there’s snow. A lot of snow. The kind that makes you question why you ever thought this was a good idea in the first place. Every step felt like a mini battle against nature, my boots sinking into the icy ground, my breath fogging up in front of me. But I pushed on.

And then—finally—I reached the top.

And just like that, Tromsø stretched out below me in a sea of twinkling lights. The entire city was glowing, reflecting off the surrounding fjords, with the dark Arctic sky as the perfect backdrop. It was one of those moments where you just have to stop, take a deep breath, and soak it all in.

I had seen city lights before, but this was different. This was special. Maybe it was the effort it took to get there, or maybe it was just the sheer beauty of it all, but in that moment, standing there above the world, I felt infinite.

Would I do the hike again? Absolutely—but maybe next time, I’ll take the cable car down.`
    },
    {
      title: "A Midnight Walk Through Arctic Snow",
      image: getOptimizedImage("v1740924419/IMG_1181_s2xicb.jpg"),
      description:
        "When the journey is just as breathtaking as the destination",
        blog:`They say the best experiences happen when you least expect them, and my midnight walk through Tromsø’s snow-covered paths proved just that.

The night had already been magical. The Northern Lights had graced the sky, and I had taken in the stunning view of the city from Fjellheisen. But as I made my way back, something unexpected happened—I realized I didn’t want the night to end.

So instead of rushing back to warmth and comfort, I decided to take the long way home—through the untouched snow.

There’s something surreal about walking through deep snow at night. The world was silent, except for the soft crunch of my boots. The cold nipped at my nose, but I didn’t mind. The air was crisp, the sky impossibly clear, and every breath felt like I was inhaling pure Arctic magic.

At one point, I stopped and looked up. The stars, millions of them, shone down like tiny frozen lights. It felt like I was walking through a dream, like I had stepped into some fairytale world where time didn’t exist.

I didn’t care where the path led. I didn’t care how cold my fingers were. In that moment, nothing else mattered but the simple beauty of being there, right then, in the heart of the Arctic, surrounded by nothing but snow, stars, and silence.

And that’s the thing about travel—it’s not just about the places you see. It’s about the moments that take your breath away when you least expect them.

Would I wander through the Arctic snow at night again? Without a doubt.`
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
          <div
            key={index}
            className="journal-slide"
            onClick={() => openModal(entry)}
          >
            <img
              src={entry.image}
              alt={entry.title}
              className="journal-image"
            />
            <div className="journal-overlay">
              <h3 className="journal-title">{entry.title}</h3>
              <p className="journal-description">{entry.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal for Journal Details */}
      {selectedEntry && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="journal-modal"
        >
          <div className="modal-content">
            <div className="model-padding"> <h2 className="model-heading">{selectedEntry.title}</h2>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button></div>
           
            <img
              src={selectedEntry.image}
              alt={selectedEntry.title}
              className="modal-image"
            />
            <>{selectedEntry.description}</>
            <p>{selectedEntry.blog}</p>
          
          </div>
        </Modal>
      )}
    </section>
  );
}
