import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[600px] bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#43362A]/20 mt-10">
      <h2 className="text-[#43362A] text-2xl mb-6 text-center">Contacto</h2>

      {isSubmitted ? (
        <div className="text-green-700 bg-green-100 p-4 rounded text-center">
          ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#43362A]">
              Nombre
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/50 border-[#43362A]/30 focus:border-[#43362A] focus:ring-[#43362A]/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#43362A]">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/50 border-[#43362A]/30 focus:border-[#43362A] focus:ring-[#43362A]/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#43362A]">
              Mensaje
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="bg-white/50 border-[#43362A]/30 focus:border-[#43362A] focus:ring-[#43362A]/30"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#43362A] hover:bg-[#43362A]/80 text-white"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
