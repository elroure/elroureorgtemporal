import React, { useState } from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";
import Footer from "@/components/roure/Footer";
import ContactForm from "@/components/roure/ContactForm";
import Newsletter from "@/components/roure/Newsletter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState("main");

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Logo className="mt-10" />

      <Tabs
        defaultValue="main"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-[1200px] mt-8"
      >
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-[#43362A]/10">
          <TabsTrigger
            value="main"
            className="data-[state=active]:bg-[#43362A] data-[state=active]:text-white"
          >
            Inicio
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="data-[state=active]:bg-[#43362A] data-[state=active]:text-white"
          >
            Contacto
          </TabsTrigger>
          <TabsTrigger
            value="newsletter"
            className="data-[state=active]:bg-[#43362A] data-[state=active]:text-white"
          >
            Newsletter
          </TabsTrigger>
        </TabsList>

        <TabsContent value="main">
          <MainContent />
        </TabsContent>

        <TabsContent value="contact" className="flex justify-center">
          <ContactForm />
        </TabsContent>

        <TabsContent value="newsletter" className="flex justify-center">
          <Newsletter />
        </TabsContent>
      </Tabs>

      <Footer email="experienciaelroure@gmail.com" />
    </main>
  );
};

export default Index;
