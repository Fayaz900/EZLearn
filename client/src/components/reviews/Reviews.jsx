import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Only Autoplay is imported now

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // No longer needed, but keeping if you use elsewhere
import "swiper/css/pagination"; // No longer needed, but keeping if you use elsewhere

function Reviews() {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "John Doe",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Jane Smith",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">
          What Our Students Say
        </h2>

        <Swiper
          modules={[Autoplay]} // Only Autoplay is used
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }} // Autoplay every 4 seconds
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="flex justify-center"
        >
          {testimonialsData.map((e) => (
            <SwiperSlide key={e.id} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer">
                <img
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                  src={e.image}
                  alt={e.name}
                />
                <p className="text-gray-600 mb-4">{e.message}</p>
                <h3 className="font-bold text-lg text-purple-700">{e.name}</h3>
                <span className="text-gray-400 text-sm">{e.position}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
