import introdu from "./assets/Introdu.mp4";
import logo from "./assets/Logo.jfif";
import { useEffect, useState } from "react";

export default function VideoIntro() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Bloqueia rolagem padrão
      if (!scrolled && event.deltaY > 0) {
        setScrolled(true);
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      } else if (scrolled && event.deltaY < 0) {
        setScrolled(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrolled]);

  return (
    <div className="relative min-h-screen">
      {/* Vídeo ocupando a tela inteira */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          src={introdu}
        />
        {/* Gradiente e sombreamento */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-[#00B389]" />
        {/* Texto sobre o vídeo */}
        <div className="relative z-10 ml-2 text-white max-w-lg">
          <h1 className="text-4xl font-bold">
            Texto Principal
          </h1>
          <p className="mt-4 text-lg">
            Logo + Sobre mais
          </p>
        </div>
      </div>

      {/* Header visível ao rolar */}
      <header className="w-full p-4 sticky top-0 z-40 bg-white">
        <div className="flex justify-between max-w ">
          <img src={logo} className="w-19 h-14" />
          <div className=" flex space-x-4 p-4">
            <h2 className="">
              <a href="">Home</a>
            </h2>
            <h2>
              <a href="">Sobre</a>
            </h2>
            <h2>
              <a href="">Contato</a>
            </h2>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="relative z-20 p-8 min-h-[150vh]">
        <div className="flex-column justify-content-center align-items-center w-[54%] m-auto pt-[15vh]">
        <h2 className="text-3xl font-bold mb-4 text-center">Fundada em 2011, a MedConsulting é a mais experiente Consultoria de Gestão em negócios de Saúde do Brasil.</h2>
        <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
        </p>
        </div>
        <div className="flex justify-center items-center h-96">
          <h2>Serviços</h2>
        </div>
      </main>
    </div>
  );
}
