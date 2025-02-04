"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Definimos los tipos para los enlaces
type NavLink = {
  name: string;
  href: string;
};

// Lista de enlaces de navegación
const navLinks: NavLink[] = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Amenidades", href: "#amenidades" },
  { name: "Modelos", href: "#modelos" },
  { name: "Contacto", href: "#contacto" },
  { name: "Entorno", href: "#entorno" },
];

export default function Navbar() {
  // Estado para controlar la visibilidad del menú en móviles
  const [isOpen, setIsOpen] = useState(false);
  // Estado para el scroll
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Cambiar el estado cuando se hace scroll
      } else {
        setScrolling(false);
      }
    };

    // Agregar el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 text-white ${
        scrolling ? "backdrop-blur-md shadow-lg" : "bg-transparent"
      } transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="w-28 md:w-44 h-auto">
          <Link href="/">
            {/* Cambiar imagen del logo cuando haga scroll */}
            <Image
              src={
                scrolling
                  ? "/images/Alia_logo_negro.png"
                  : "/images/Aliia_logo_blanco.png"
              }
              alt="Logo"
              width={500}
              height={500}
            />
          </Link>
        </div>

        {/* Menú para desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                scrolling ? "text-black" : "text-white"
              } hover:text-[#dc2c81]`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Redes sociales (solo desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link href="https://www.facebook.com/casasdomum" target='_blank' className={`${scrolling ? "text-black" : "text-white"} hover:text-[#dc2c81]`}>
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/casas_domum/" target='_blank' className={`${scrolling ? "text-black" : "text-white"} hover:text-[#dc2c81]`}>
            <FaInstagram />
          </Link>
          <Link href="https://wa.me/5214424750573" target='_blank' className={`${scrolling ? "text-black" : "text-white"} hover:text-[#dc2c81]`}>
            <FaWhatsapp />
          </Link>
        </div>

        {/* Hamburger button para móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú desplegable para móvil */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-4 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
