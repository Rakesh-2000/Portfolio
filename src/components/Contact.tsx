import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f8fcff]">
            Let's <span className="text-[#ffe871]">Connect</span>
          </h2>
          <p className="text-lg text-[#f8fcff]/70 max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          {/* <div className="bg-[#000] p-8 rounded-[5px] border border-[#ffe871]/20">
            <h3 className="text-2xl font-bold text-[#f8fcff] mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#f8fcff] font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-[#000] border ${
                    errors.name ? "border-red-500" : "border-[#ffe871]/30"
                  } rounded-lg text-[#f8fcff] placeholder-[#f8fcff]/50 focus:border-[#ffe871] focus:outline-none transition-colors duration-300`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#f8fcff] font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-[#000] border ${
                    errors.email ? "border-red-500" : "border-[#ffe871]/30"
                  } rounded-lg text-[#f8fcff] placeholder-[#f8fcff]/50 focus:border-[#ffe871] focus:outline-none transition-colors duration-300`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#f8fcff] font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-[#000] border ${
                    errors.message ? "border-red-500" : "border-[#ffe871]/30"
                  } rounded-lg text-[#f8fcff] placeholder-[#f8fcff]/50 focus:border-[#ffe871] focus:outline-none transition-colors duration-300 resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-[#ffe871] text-[#202733] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#ffe871]/90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div> */}

          {/* Contact Info & Social Links */}
          <div className="space-y-8 ">
            <div>
              <h3 className="text-2xl font-bold text-[#f8fcff] mb-6">
                Get In Touch
              </h3>
              <p className="text-[#f8fcff]/70 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-[#1a1f2e] rounded-xl border border-[#ffe871]/20">
                <div className="w-12 h-12 bg-[#ffe871]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#ffe871]" />
                </div>
                <div>
                  <p className="text-[#f8fcff] font-medium">Email</p>
                  <a
                    href="mailto:rakesh@example.com"
                    className="text-[#ffe871] hover:underline"
                  >
                    rakeshseervee2000@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#1a1f2e] rounded-xl border border-[#ffe871]/20">
                <div className="w-12 h-12 bg-[#ffe871]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#ffe871]" />
                </div>
                <div>
                  <p className="text-[#f8fcff] font-medium">Phone</p>
                  <a
                    href="tel:+91 9448447501"
                    className="text-[#ffe871] hover:underline"
                  >
                    +91 9448447501
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center space-x-4 p-4 bg-[#1a1f2e] rounded-xl border border-[#ffe871]/20">
                <div className="w-12 h-12 bg-[#ffe871]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#ffe871]" />
                </div>
                <div>
                  <p className="text-[#f8fcff] font-medium">Location</p>
                  <p className="text-[#ffe871]">Available Worldwide</p>
                </div>
              </div> */}
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#f8fcff] mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Rakesh-2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#ffe871]/20 hover:bg-[#ffe871]/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                >
                  <Github className="w-6 h-6 text-[#ffe871] group-hover:text-[#f8fcff]" />
                </a>
                <a
                  href="http://www.linkedin.com/in/rakesh-b-s2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#ffe871]/20 hover:bg-[#ffe871]/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-[#ffe871] group-hover:text-[#f8fcff]" />
                </a>
                <a
                  href="mailto:rakeshseervee2000@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#ffe871]/20 hover:bg-[#ffe871]/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                >
                  <Mail className="w-6 h-6 text-[#ffe871] group-hover:text-[#f8fcff]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
