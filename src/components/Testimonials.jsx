

const testimonials = [
  {
    id: 1,
    text: "I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    name: "Richard Nelson",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    text: "I've been using bg.removal for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
    name: "Donald Jackman",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 text-center">
        <h1 className='text-3xl items-center justify-center flex  font-bold mb-10'>Customer Testimonials</h1>
      {/* Testimonials Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:-translate-y-2"
          >
            <blockquote className="text-gray-700 text-lg italic">
              <span className="text-2xl font-serif">“</span> {testimonial.text}
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default Testimonials;
