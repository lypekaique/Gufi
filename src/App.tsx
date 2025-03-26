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
import image2 from './assets/imagem/imagem2.png';
import image3 from './assets/imagem/imagem3.png';
import image4 from './assets/imagem/imagem4.png';
import image5 from './assets/imagem/imagem5.png';
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
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Padrão para telas grandes
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
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
      <div className="relative w-full h-screen flex items-center justify-center" id='home'>
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
              <a href="#home">Home</a>
            </h2>
            <h2 className="hover:text-[#02B389]">
              <a href="#contato">Contato</a>
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
        <div className="flex flex-col justify-center items-center w-[54%] m-auto pt-2 max-sm:w-full">
          <h2 className="text-4xl font-bold mb-4 text-center max-sm:text-xl ">
          <span className="text-[#02B389] ">Gufe Seguros </span> Uma História de Excelência no <span className="text-[#02B389]"> Atendimento e Consultoria</span>
          </h2>
          <p className="text-center h-auto text-lg max-sm:text-base">
          A Gufe Seguros nasceu da fusão de corretores com alta experiência em seguros saúde e corretores especializados em seguros gerais. Nosso foco sempre foi o atendimento humanizado e uma venda consultiva, garantindo que cada cliente receba o melhor produto, alinhado às suas necessidades.
          </p>
        </div>

        {/* Seção "Nossas Soluções" */}
        <div className="pt-10 m-auto w-[60%] max-sm:w-full max-xl:w-full ">
  <div className="flex m-auto w-[50%] justify-center items-center max-sm:w-full">
    <h2 className="text-4xl p-4 font-bold max-sm:text-lg   ">Conheça as nossas  <span className="text-[#02B389]">Soluções</span></h2>
  </div>

  <div className="gap-4">
    {/* Primeiro bloco */}
    <div className="flex flex-col p-4 border-[#02AD85] border-2 rounded-lg m-auto w-[50%] max-sm:w-full ">
      <div className="p-2 pb-2 flex justify-center items-center">
        <h3 className="text-4xl p-2 font-bold max-sm:text-2xl ">Seguros</h3>
      </div>
      <div className="grid grid-cols-3 gap-4 max-sm:gap-3 ">
        {/* Cada item de seguro */}
        <div className="flex flex-col items-center text-2xl p-3 max-sm:text-base ">
          <img src={Sáude} alt="Saúde" className="w-24 h-24 object-cover mb-2 max-sm:w-12 max-sm:h-12" />
          <p>Saúde</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-3 max-sm:text-base ">
          <img src={Residencial} alt="Residencial" className="w-24 h-24 object-cover mb-2 max-sm:w-12 max-sm:h-12" />
          <p>Residencial</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-3  max-sm:text-base ">
          <img src={Empresarial} alt="Empresarial" className="w-24 h-24 object-cover mb-2 max-sm:w-12 max-sm:h-12 " />
          <p>Empresarial</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-3 max-sm:text-base ">
          <img src={Vida} alt="Vida" className="w-24 h-24 object-cover mb-2 max-sm:w-12 max-sm:h-12" />
          <p>Vida</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-3 max-sm:text-base ">
          <img src={Viagem} alt="Viagem" className="w-24 h-24 object-cover mb-2 max-sm:w-12 max-sm:h-12" />
          <p>Viagem</p>
        </div>
        <div className="flex flex-col items-center text-2xl p-3 max-sm:text-base ">
          <img src={Conso} alt="Consórcio" className="w-24 h-24 object-cover mb-2 max-sm:w-12 max-sm:h-12" />
          <p>Consórcio</p>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Carrossel de 10 imagens */}
        <div className="mt-20">
      <h2 className="text-center mb-8 text-4xl p-4 font-bold max-sm:text-xl">Com quem <span className="text-[#02B389]">Trabalhamos</span></h2>
      <Slider {...settings} className="w-[80%] m-auto max-sm:w-full">
        {images.map((image, index) => (
          <div key={index} className="p-2 w-25">
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              className="w-full h-56 object-contain rounded-lg shadow-lg max-sm:h-40 max-sm:object-contain "
            />
          </div>
        ))}
      </Slider>
    </div>

        {/* Contato */}
        <div className="mt-10 text-center">
  <h2 className="text-4xl p-4 font-bold  text-[#02B389]" id="contato">Contato</h2>

  <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6">
    {/* Mapa do Google */}
    <div className="w-full md:w-1/3">
      <iframe
        className="w-full h-64 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.305184456604!2d-46.530290624744145!3d-23.558005061437073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4293837e43b5%3A0x148f26cbdcff18f3!2sR.%20Cel.%20Alfredo%20Flaquer%2C%20513%20-%20Centro%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009005-000!5e0!3m2!1spt-BR!2sbr!4v1711470000000!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* Informações de Contato */}
    <div className="flex flex-col md:w-1/3 text-lg">
      <p className="font-bold">📸 Instagram:</p>
      <a
        href="https://www.instagram.com/gufeseguros"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        @gufeseguros
      </a>

      <p className="font-bold mt-4">📧 E-mails para contato:</p>
      <a href="mailto:Gustavo@gufeseguros.com.br" className="text-blue-600 hover:underline">
        Gustavo@gufeseguros.com.br
      </a>
      <a href="mailto:Fernanda@gufeseguros.com.br" className="text-blue-600 hover:underline">
        Fernanda@gufeseguros.com.br
      </a>
      
    </div>
  </div>

</div>

      </main>
      <footer class="flex justify-between items-center p-4 bg-[#02B389] text-white text-sm">
    <p>&copy; 2025 Gufe Asseguradora. Todos os direitos reservados.</p>
    <a href="https://github.com/lypekaique" target="_blank" class="hover:underline">@lypekaique</a>
</footer>

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
