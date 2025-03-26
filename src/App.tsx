import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaWhatsapp } from "react-icons/fa";
import introdu from "./assets/introdu.mp4";
import logo from "./assets/Logo.png";
import Sáude from "./assets/sáude.svg";
import Residencial from './assets/Residencial.svg';
import Empresarial from './assets/Empresarial.svg';
import Vida from './assets/Vida.svg';
import Viagem from './assets/Viagem.svg';
import Conso from './assets/Conso.svg';

import image1 from './assets/imagem/imagem1.png';
import image2 from './assets/imagem/imagem2.jpg';
import image3 from './assets/imagem/imagem3.png';
import image4 from './assets/imagem/imagem4.png';
import image5 from './assets/imagem/imagem5.jpg';
import image6 from './assets/imagem/imagem6.png';
import image7 from './assets/imagem/imagem7.png';
import image8 from './assets/imagem/imagem8.png';
import image9 from './assets/imagem/imagem9.svg';
import image10 from './assets/imagem/imagem10.png';


const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
];


// Importação dos estilos do slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VideoIntro() {
  const [scrolled, setScrolled] = useState(false);
  const [shake, setShake] = useState(false);

  const smoothScroll = (target: number, duration: number) => {
    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const screenHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (!scrolled && event.deltaY > 0 && scrollY < screenHeight) {
        event.preventDefault();
        setScrolled(true);
        smoothScroll(screenHeight, 950);
      } else if (scrolled && event.deltaY < 0 && scrollY < screenHeight + 50) {
        event.preventDefault();
        setScrolled(false);
        smoothScroll(0, 950);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrolled]);

  // Efeito de "shake" no WhatsApp a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Padrão para telas grandes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          dots:false,
          autoplay: true,
          autoplaySpeed: 2000, 
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen">
      {/* Vídeo ocupando a tela inteira */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover blur-md"
          src={introdu}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-[#00B389]" />
        <div className="relative z-10 ml-2 text-white max-w-lg">
          <img src={logo} alt=""/>
        </div>
      </div>

      {/* Header visível ao rolar */}
      <header className="w-full p-4 sticky top-0 z-40 bg-white">
        <div className="flex justify-between">
          <img src={logo} className="w-24 h-14" />
          <div className="flex space-x-4 p-4">
            <h2 className="text-[#02B389]">
              <a href="">Home</a>
            </h2>
            <h2 className="hover:text-[#02B389]">
              <a href="">Sobre</a>
            </h2>
            <h2 className="hover:text-[#02B389]">
              <a href="">Contato</a>
            </h2>
          </div>
        </div>
      </header>

      {/* Ícone do WhatsApp */}
      <a
        href="https://wa.me/+5511994734359"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform z-80 ${
          shake ? "animate-shake" : ""
        }`}
      >
        <FaWhatsapp size={40} />
      </a>

      {/* Conteúdo principal */}
      <main className="relative z-20 p-8 min-h-[150vh]">
        <div className="flex flex-col justify-center items-center w-[54%] m-auto pt-2">
          <h2 className="text-4xl font-bold mb-4 text-center ">
          <span className="text-[#02B389] ">Gufe Seguros </span> Uma História de Excelência no <span className="text-[#02B389]"> Atendimento e Consultoria</span>
          </h2>
          <p className="text-center h-auto text-lg">
          A Gufe Seguros nasceu da fusão de corretores com alta experiência em seguros saúde e corretores especializados em seguros gerais. Nosso foco sempre foi o atendimento humanizado e uma venda consultiva, garantindo que cada cliente receba o melhor produto, alinhado às suas necessidades.
          </p>
        </div>

        {/* Seção "Nossas Soluções" */}
        <div className="pt-10 m-auto w-[60%]">
  <div className="flex m-auto w-[50%]">
    <h2 className="text-4xl p-4 font-bold ">Conheça as nossas  <span className="text-[#02B389]">Soluções</span></h2>
  </div>

  <div className="gap-4">
    {/* Primeiro bloco */}
    <div className="flex flex-col p-4 border-[#02AD85] border-2 rounded-lg m-auto w-[50%]">
      <div className="p-2 pb-2 flex justify-center items-center">
        <h3 className="text-4xl p-4 font-bold">Seguros</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Cada item de seguro */}
        <div className="flex flex-col items-center text-2xl p-4 ">
          <img src={Sáude} alt="Saúde" className="w-24 h-24 object-cover mb-2" />
          <p>Saúde</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-4 ">
          <img src={Residencial} alt="Residencial" className="w-24 h-24 object-cover mb-2" />
          <p>Residencial</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-4 ">
          <img src={Empresarial} alt="Empresarial" className="w-24 h-24 object-cover mb-2" />
          <p>Empresarial</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-4 ">
          <img src={Vida} alt="Vida" className="w-24 h-24 object-cover mb-2" />
          <p>Vida</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-4 ">
          <img src={Viagem} alt="Viagem" className="w-24 h-24 object-cover mb-2" />
          <p>Viagem</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-4 ">
          <img src={Conso} alt="Consórcio" className="w-24 h-24 object-cover mb-2" />
          <p>Consórcio</p>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Carrossel de 10 imagens */}
        <div className="mt-20">
      <h2 className="text-center mb-8 text-4xl p-4 font-bold">Com quem Trabalhamos</h2>
      <Slider {...settings} className="w-[80%] m-auto">
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              className="w-full h-56 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>

        {/* Contato */}
        <div className="mt-10 text-center">
          <h2 className="text-4xl p-4 font-bold">Contato</h2>
        </div>
      </main>

      {/* Estilos Tailwind para a animação de shake */}
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
          }

          .animate-shake {
            animation: shake 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
