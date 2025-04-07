import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!consent) {
      setError("Por favor, acepta los términos para continuar.");
      return;
    }

    setIsSubmitting(true);

    // Simulate newsletter subscription
    setTimeout(() => {
      console.log("Newsletter subscription:", email);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setConsent(false);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[600px] bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#43362A]/20 mt-10">
      <h2 className="text-[#43362A] text-2xl mb-4 text-center">
        Suscríbete a nuestra newsletter
      </h2>

      {isSubmitted ? (
        <div className="text-green-700 bg-green-100 p-4 rounded text-center">
          ¡Gracias por suscribirte a nuestra newsletter!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#43362A]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              className="bg-white/50 border-[#43362A]/30 focus:border-[#43362A] focus:ring-[#43362A]/30"
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
              className="mt-1 data-[state=checked]:bg-[#43362A] data-[state=checked]:border-[#43362A]"
            />
            <Label
              htmlFor="consent"
              className="text-sm text-[#43362A]/80 font-normal leading-tight"
            >
              Acepto recibir comunicaciones de Roure y confirmo que he leído la
              política de privacidad.
            </Label>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#43362A] hover:bg-[#43362A]/80 text-white"
          >
            {isSubmitting ? "Procesando..." : "Suscribirse"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
