import React from "react";
import { motion } from "framer-motion";

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
      <div className="grid md:grid-cols-4 gap-8">
        {testimonialsData.map((e, index) => (
          <motion.div
            key={e.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center  cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              className="w-16 h-16 mx-auto rounded-full mb-4"
              src={e.image}
              alt={e.name}
            />
            <p className="text-gray-600 mb-4">{e.message}</p>
            <h3 className="font-bold text-lg text-purple-700">{e.name}</h3>
            <span className="text-gray-400 text-sm">{e.position}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Reviews;
