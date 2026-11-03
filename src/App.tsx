import { useEffect, useState } from "react";

type Vista = "inicio" | "tamales" | "mariscos" | "eventos";
type Marca = "tamales" | "mariscos";

type Platillo = {
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  ingredientes: string[];
  marca: Marca;
};

const fotos = {
  tamal:
    "/imagenes/MENUTAMALES/tamal.jpg",
  entomatadas:
    "/imagenes/MENUTAMALES/entomatadas.jpg",
  chilaquiles:
    "/imagenes/MENUTAMALES/chilaquiles.jpg",
  hamburguesa:
    "/imagenes/MENUTAMALES/hamburguesa.jpg",
  quesadillas:
    "/imagenes/MENUTAMALES/quesadilla.jpg",
  tacos:
    "/imagenes/MENUTAMALES/tacos.jpg",
  torta:
    "/imagenes/MENUTAMALES/torta.jpg",
  molletes:
    "/imagenes/MENUTAMALES/mollete.jpg",
  burrito:
    "/imagenes/MENUTAMALES/burritos.jpg",
  platillo:
    "/imagenes/MENUTAMALES/platillo.jpg",
  champurrado:
    "/imagenes/MENUTAMALES/champurrado.jpg",
  refresco:
    "/imagenes/MENUTAMALES/refresco.jpg",

 // ==========================================
 // FOTOS MARISCOS
 // ==========================================
  tostadas:
    "/imagenes/MENUJD/tostadas.jpg",
  cocteles:
    "/imagenes/MENUJD/campechanas.jpg",
  jaiba:
    "/imagenes/MENUJD/jaiba.jpg",
  ceviche:
    "/imagenes/MENUJD/ceviche.jpg",
  callitos:
    "/imagenes/MENUJD/callitos.jpg",
  tostitos:
    "/imagenes/MENUJD/tostitos.jpg",
  aguas:
    "/imagenes/MENUJD/aguas.png",
  logoYaqui:
     "/imagenes/logos/logoTamales.jpg",
  logoMariscos:
     "/imagenes/logos/logoJD.jpg",
  evento:
    "https://images.unsplash.com/photo-1746635732995-ab5c6118d5a7?auto=format&fit=crop&w=1600&q=85",

  
};
 // ==========================================


  // TAMALES


  // ==========================================
const platillosTamales: Platillo[] = [
  // ==========================================
  // CATEGORÍA 1: LUNCH
  // ==========================================

  // --- Quesadillas ---
  {
    nombre: "Quesadillas (2 piezas)",
    descripcion: "Acompañadas con verduras. Elige tu guiso o combinación preferida.",
    categoria: "Lunchs",
    imagen: fotos.quesadillas,
    ingredientes: [
      "Natural", "Jamón", "Salchicha", "Chorizo", "Pierna", "Cochinita",
      "Carne Molida", "Carne Asada", "Carne Molida c/ Chipotle",
      "Chicharrón en Salsa Verde", "Mixtas (2 o 3 ingredientes)"
    ],
    marca: "tamales",
  },

  // --- Tacos ---
  {
    nombre: "Tacos (Maíz o Harina)",
    descripcion: "Servidos en tortilla de maíz o harina con tu guisado favorito.",
    categoria: "Lunchs",
    imagen: fotos.tacos,
    ingredientes: [
      "Pierna", "Cochinita", "Bistec", "Chicharrón en salsa verde",
      "Carne Molida", "Carne Asada", "Mixtos"
    ],
    marca: "tamales",
  },

  // --- Burritos ---
  {
    nombre: "Burritos y Paquetes",
    descripcion: "En tortilla de harina. Disponibles individuales o en paquete de 3.",
    categoria: "Lunchs",
    imagen: fotos.burrito,
    ingredientes: [
      "Paquete (2 de guiso + 1 de frijol)",
      "Sueltos: Pierna, Cochinita, Machaca, Bistec, Discada, Chorizo, Frijol c/ queso, etc."
    ],
    marca: "tamales",
  },

  // --- Tortas ---
  {
    nombre: "Tortas y Tortas Mixtas",
    descripcion: "En pan crujiente con tu guiso favorito o combinaciones de hasta 3 ingredientes.",
    categoria: "Lunchs",
    imagen: fotos.torta,
    ingredientes: [
      "Pierna", "Cochinita", "Jamón", "Huevo", "Chorizo", "Cubana",
      "Salchicha", "Chicharrón verde", "Carne Asada", "Pollo", "Mixtas (2 o 3 ingredientes)"
    ],
    marca: "tamales",
  },

  // --- Molletes ---
  {
    nombre: "Molletes Preparados",
    descripcion: "Bolillo caliente con frijolitos, queso derretido y tu ingrediente preferido.",
    categoria: "Lunchs",
    imagen: fotos.molletes,
    ingredientes: [
      "Natural", "Pierna", "Cochinita", "Jamón", "Salchicha", "Chorizo",
      "Tocino", "Carne Asada", "Molle Pizza", "Carne Molida c/ Chipotle", "Mixtos"
    ],
    marca: "tamales",
  },

  // ==========================================
  // CATEGORÍA 2: COMIDA PARA CUALQUIER HORA
  // ==========================================

  // --- Tamales ---
  {
    nombre: "Tamales Tradicionales",
    descripcion: "Suaves, calientitos y hechos con la receta de la casa.",
    categoria: "Comida",
    imagen: fotos.tamal,
    ingredientes: [
      "Carne", "Chicharrón en salsa verde", "Frijol Yurimuni",
      "Elote Dulce", "Elote Salado", "Verdura"
    ],
    marca: "tamales",
  },

  // --- Enchiladas, Entomatadas y Chilaquiles ---
  {
    nombre: "Enchiladas y Entomatadas",
    descripcion: "Bañadas en salsa tradicional con queso, crema y sazón de la casa.",
    categoria: "Comida",
    imagen: fotos.entomatadas,
    ingredientes: [
      "Enchiladas tradicionales", "Entomatadas",
      "Enchiladas de Chicharrón en Salsa Verde"
    ],
    marca: "tamales",
  },
  
  {
    nombre: "Chilaquiles",
    descripcion: "Bañadas en salsa de su gusto con queso, crema y sazón de la casa.",
    categoria: "Comida",
    imagen: fotos.chilaquiles,
    ingredientes: [
      " Salsa Verde", "Salsa roja","divorciados", "agregue extras"
    ],
    marca: "tamales",
  },
  // --- Guisados Fuertes ---
  {
    nombre: "Guisados y Platillos Fuertes",
    descripcion: "Servidos con sus guarniciones de arroz, frijoles o papas.",
    categoria: "Comida",
    imagen: fotos.platillo,
    ingredientes: [
      "Bistec", "Carne Molida", "Pierna con chile y papas", "Platillos Mixtos"
    ],
    marca: "tamales",
  },

  // --- Hamburguesas ---
  {
    nombre: "Hamburguesas Especiales",
    descripcion: "Preparadas con carne jugosa, queso y vegetales frescos.",
    categoria: "Comida",
    imagen: fotos.hamburguesa,
    ingredientes: [
      "Sencilla", "Tocino", "Especial", "Hawaiana", "Guacamole Ranchera",
      "Hamburguesa de Lechuga (Carne, queso, cebolla y aguacate en hoja de lechuga)"
    ],
    marca: "tamales",
  },

  // ==========================================
  // CATEGORÍA 3: BEBIDAS Y ATOLES
  // ==========================================

  // --- Atoles y Calientes ---
  {
    nombre: "Atoles y Bebidas Calientes",
    descripcion: "El acompañamiento tradicional para tus desayunos o tamales.",
    categoria: "Bebidas y Atoles",
    imagen: fotos.champurrado,
    ingredientes: [
      "Crema de Trigo", "Avena", "Champurrado", "Café de olla",
      "Atole de Pinole", "Chocolate Abuelita"
    ],
    marca: "tamales",
  },

  // --- Refrescos y Fríos ---
  {
    nombre: "Bebidas Frías",
    descripcion: "Refrescantes opciones para acompañar tu comida.",
    categoria: "Bebidas y Atoles",
    imagen: fotos.refresco,
    ingredientes: [
      "Aguas frescas del día", "Sodas de 600 ml", "Sodas de vidrio"
    ],
    marca: "tamales",
  }
];
// ==========================================


  // MARISCOS


  // ==========================================
const platillosMariscos: Platillo[] = [
  // ==========================================
  // CATEGORÍA 1: FRESCO Y COCTELES
  // ==========================================
   {
    nombre: "Tostadas Individuales",
    descripcion: "Crujiente tostada preparada al momento con mariscos frescos.",
    categoria: "Fresco",
    imagen: fotos.tostadas,
    ingredientes: [
      "Tostada de Ceviche",
      "Tostada de Camarón",
      "Tostada de Ceviche con Camarón",
      "Tostada de Pulpo",
      "Tostada de Callo",
      "Tostada de de Jaiba"
    ],
    marca: "mariscos",
  },
  {
    nombre: "Cocteles y Campechanas",
    descripcion: "Servidos fríos con clamato y verdura picada ",
    categoria: "Fresco",
    imagen: fotos.cocteles,
    ingredientes: [
      "Camarón Crudo o Cocido",
      "Campechana (Mezcla de mariscos)"
    ],
    marca: "mariscos",
  },
  {
    nombre: "Callo de Hacha y jaiba",
    descripcion: "Mariscos frescos especiales, pregunta por existencia.",
    categoria: "Fresco",
    imagen: fotos.jaiba,
    ingredientes: [
      "Manitas de Jaiba",
      "Callo de Hacha"
    ],
    marca: "mariscos",
  },

  // ==========================================
  // CATEGORÍA 2: ESPECIALIDADES POR LITRO Y MEDIO
  // ==========================================
  {
    nombre: "Ceviche (1/2 ó 1 L)",
    descripcion: "Ceviche fresco ideal para llevar o compartir.",
    categoria: "Especialidades",
    imagen: fotos.ceviche,
    ingredientes: [
      "Ceviche sencillo (1/2 ó 1 L)",
      "Ceviche con Camarón (1/2 ó 1 L)"
    ],
    marca: "mariscos",
  },
  {
    nombre: "Callitos y Camarón (1/2 ó 1 L)",
    descripcion: "Porciones preparadas por litro y medio litro.",
    categoria: "Especialidades",
    imagen: fotos.callitos,
    ingredientes: [
      "Callitos simples (1/2 ó 1 L)",
      "Callitos con Camarón (1/2 ó 1 L)",
    ],
    marca: "mariscos",
  },
    {
    nombre: "Tosti-Botanas",
    descripcion: "Tostilocos preparados con mariscos, verdura, salsas negras y limonada.",
    categoria: "Especialidades",
    imagen: fotos.tostitos,
    ingredientes: [
      "Tosti Camarones",
      "Tosti Ceviche",
      "Tosti Mix (Combinado de mariscos)"
    ],
    marca: "mariscos",
  },
  {
    nombre: "Refrescos",
    descripcion: "Refrescos frios.",
    categoria: "Bebidas",
    imagen: fotos.refresco,
    ingredientes: [
       "Sodas de 600 ml", "Sodas de vidrio"
    ],
    marca: "mariscos",
  },
  {
    nombre: "Aguas Frescas",
    descripcion: "Aguas de sabor.",
    categoria: "Bebidas",
    imagen: fotos.aguas,
    ingredientes: [
      "jamaica","horchata","limonada",
    ],
    marca: "mariscos",
  }
];

function Icono({ nombre }: { nombre: "casa" | "flecha" | "whatsapp" | "mas" | "cerrar" | "marca" }) {
  const trazos: Record<string, React.ReactNode> = {
    casa: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5M9 21v-7h6v7" /></>,
    flecha: <><path d="m15 18-6-6 6-6" /></>,
    whatsapp: <><path d="M20 11.5a8.5 8.5 0 0 1-12.5 7.6L3 20l1-4.3A8.5 8.5 0 1 1 20 11.5Z" /><path d="M8 7.8c.4-.4.8-.2 1 .3l.7 1.6c.1.3 0 .5-.3.8l-.5.5c.7 1.5 1.8 2.6 3.4 3.2l.5-.6c.2-.3.5-.4.8-.2l1.6.7c.4.2.6.6.3 1-.5.8-1.3 1.2-2.2 1-3.7-.7-6.5-3.5-7.2-7.2-.2-.5.3-1 .9-1.1Z" /></>,
    mas: <><path d="M12 5v14M5 12h14" /></>,
    cerrar: <><path d="m7 7 10 10M17 7 7 17" /></>,
    marca: <><path d="m5 12 4 4L19 6" /></>,
  };
  return <svg aria-hidden="true" className="icono" viewBox="0 0 24 24">{trazos[nombre]}</svg>;
}

function Encabezado({ vista, irA }: { vista: Vista; irA: (vista: Vista) => void }) {
  if (vista === "inicio") {
    return (
      <header className="encabezado encabezado-inicio">
        {/* Logo + Texto en horizontal para Tamales Yaqui */}
        <button className="logo logo-yaqui" onClick={() => irA("tamales")} aria-label="Ir a Tamales Yaqui">
          <img src={fotos.logoYaqui} alt="" className="icono-logo" />
          <div className="texto-logo">
            <small>TAMALES</small>
            <strong>Yaqui</strong>
          </div>
        </button>

        <span className="separador-logo" />

        {/* Logo + Texto en horizontal para Mariscos JD */}
        <button className="logo logo-jd" onClick={() => irA("mariscos")} aria-label="Ir a Mariscos JD">
          <img src={fotos.logoMariscos} alt="" className="icono-logo" />
          <div className="texto-logo">
            <small>MARISCOS</small>
            <strong>JD</strong>
          </div>
        </button>
      </header>
    );
  }

  const logoSeccion = vista === "tamales" ? fotos.logoYaqui : vista === "mariscos" ? fotos.logoMariscos : null;
  const titulo = vista === "tamales" ? "Tamales Yaqui" : vista === "mariscos" ? "MARISCOS JD" : "Comamos juntos";
  const subtitulo = vista === "tamales" ? "TAMALES Y LUNCHS" : vista === "mariscos" ? "DEL MAR A TU MESA" : "EVENTOS ESPECIALES";

  return (
    <header className={`encabezado encabezado-seccion ${vista}`}>
      <button className="boton-icono" onClick={() => irA("inicio")} aria-label="Volver al inicio">
        <Icono nombre="flecha" />
      </button>

      <button className="titulo-marca" onClick={() => irA("inicio")}>
        {logoSeccion && <img src={logoSeccion} alt="" className="icono-logo-seccion" />}
        <div className="texto-logo">
          <strong>{titulo}</strong>
          <small>{subtitulo}</small>
        </div>
      </button>

      <button className="boton-icono" onClick={() => irA("inicio")} aria-label="Inicio">
        <Icono nombre="casa" />
      </button>
    </header>
  );
}
function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <p className="sobrelinea">SIGAMOS EN CONTACTO</p>
        <p className="titulo-pie">El sabor nos reúne.</p>
        <div className="columnas-sociales">
          <div>
            <strong className="naranja">Tamales Yaqui</strong>
            <a 
              href="https://www.facebook.com/tamales.yaquii" 
              target="_blank" 
              rel="noreferrer"
            >
              <img src="/imagenes/iconos/facebook_tamales.png" alt="Facebook" className="icono" />
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/tamales_yaquii/" 
              target="_blank" 
              rel="noreferrer"
            >
              <img src="/imagenes/iconos/instagram_tamales.png" alt="Instagram" className="icono" />
              Instagram
            </a>
          </div>
          <div>
            <strong className="azul">Mariscos JD</strong>
            <a 
              href="https://www.facebook.com/profile.php?id=61576985192729" 
              target="_blank" 
              rel="noreferrer"
            >
              <img src="/imagenes/iconos/facebook_jd.png" alt="Facebook" className="icono" />
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/mariscos.jd/" 
              target="_blank" 
              rel="noreferrer"
            >
              <img src="/imagenes/iconos/instagram_jd.png" alt="Instagram" className="icono" />
              Instagram
            </a>
          </div>
        </div>
        <div className="datos-contacto">
          <span><img src="/imagenes/iconos/telefono.png" alt="telefonos" className="icono" /> Teléfonos:</span>
          <span>Mariscos JD: 644-447-6573 o 644-211-2080</span>
          <span>Tamales Yaquii: 644-138-7024</span>
          <span><img src="/imagenes/iconos/ubi.png" alt="Ubicacion" className="icono" /> Dirección: Otanchui #616 Sobre calle Yaqui</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!3m2!1ses!2smx!4v1793681459772!5m2!1ses!2smx!6m8!1m7!1sppdlrheen8xtG4Fr48oI2g!2m2!1d27.50351975683017!2d-109.9566488094729!3f47.407660759102605!4f-18.022751707466227!5f0.9133001592935213"
            width="200"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </footer>
  );
}

function TarjetaInicio({ vista, irA }: { vista: Exclude<Vista, "inicio">; irA: (vista: Vista) => void }) {
  const datos = {
    tamales: { etiqueta: "TAMALES YAQUI", titulo: "Tamales y Lunchs", nota: "Hechos con tradición", imagen: fotos.tamal },
    mariscos: { etiqueta: "FRESCURA QUE SE ANTOJA", titulo: "Mariscos JD", nota: "Del mar a tu mesa", imagen: fotos.ceviche },
    eventos: { etiqueta: "COMAMOS JUNTOS", titulo: "Eventos Especiales", nota: "Tú reúnes. Nosotros cocinamos.", imagen: fotos.evento },
  }[vista];
  return (
    <button className={`tarjeta-inicio ${vista}`} onClick={() => irA(vista)}>
      <span className="contenido-tarjeta">
        <small>{datos.etiqueta}</small>
        <strong>{datos.titulo}</strong>
        <span>{datos.nota}</span>
        <b aria-hidden="true">→</b>
      </span>
      <img src={datos.imagen} alt="" />
    </button>
  );
}

function Inicio({ irA }: { irA: (vista: Vista) => void }) {
  return (
    <main>
      <section className="hero-inicio contenedor">
        <p className="sobrelinea verde">BIENVENIDO A NUESTRA MESA</p>
        <h1>Dos cocinas.<br />Mucho sabor.</h1>
        <p className="introduccion">Y mucha variedad.</p>
        <div className="fila-pregunta"><strong>¿Qué se te antoja?</strong><small>MENÚ DIGITAL</small></div>
        <div className="rejilla-inicio">
          <TarjetaInicio vista="tamales" irA={irA} />
          <TarjetaInicio vista="mariscos" irA={irA} />
          <TarjetaInicio vista="eventos" irA={irA} />
        </div>
      </section>
      <Pie />
    </main>
  );
}

function Selector({ opciones, activa, alCambiar }: { opciones: string[]; activa: string; alCambiar: (opcion: string) => void }) {
  return (
    <div className="selector" role="tablist">
      {opciones.map((opcion) => (
        <button key={opcion} className={opcion === activa ? "activo" : ""} onClick={() => alCambiar(opcion)}>{opcion}</button>
      ))}
    </div>
  );
}
// Componente de Tarjeta unificado para ambos menús
function TarjetaPlatillo({
  platillo,
  abrir,
  estilo,
}: {
  platillo: Platillo;
  abrir: (platillo: Platillo) => void;
  estilo: "yaqui" | "mar";
}) {
  return (
    <article
      className={`tarjeta-platillo ${estilo}`}
      onClick={() => abrir(platillo)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && abrir(platillo)}
    >
      <div className="foto-platillo">
        <img src={platillo.imagen} alt={platillo.nombre} loading="lazy" />
      </div>
      <div>
        <h3>{platillo.nombre}</h3>
        <p>{platillo.descripcion}</p>
        <span className="enlace-detalle">
          Ver detalle <span>→</span>
        </span>
      </div>
    </article>
  );
}

// VistaTamales estandarizada
function VistaTamales({ abrir }: { abrir: (platillo: Platillo) => void }) {
  const [categoria, definirCategoria] = useState("Comida");
  const filtrados = platillosTamales.filter((platillo) => platillo.categoria === categoria);

  return (
    <main>
      <section className="hero-marca hero-tamales">
        <div className="contenedor">
          <p className="sobrelinea verde">HECHOS CON TRADICIÓN</p>
          <h1>Tradición para<br />todos los días.</h1>
          <p>Tamales, comidas y lunchs con ese sabor que te hace sentir en casa.</p>
        </div>
      </section>
      <div className="contenedor contenido-menu">
        <Selector
          opciones={["Comida", "Lunchs", "Bebidas y Atoles"]}
          activa={categoria}
          alCambiar={definirCategoria}
        />
        <div className="cabecera-menu">
          <div>
            <h2>{categoria === "Tamales" ? "Nuestros tamales" : categoria}</h2>
            <p>
              {categoria === "Tamales"
                ? "Suaves, calientitos y hechos con cariño."
                : "Para comer rico, sin complicarte."}
            </p>
          </div>
        </div>
        <div className="rejilla-platillos">
          {filtrados.map((platillo) => (
            <TarjetaPlatillo
              key={platillo.nombre}
              platillo={platillo}
              abrir={abrir}
              estilo="yaqui"
            />
          ))}
        </div>
        <div className="aviso">
          ⓘ<span>Pregunta por las comidas y los tamales disponibles hoy.</span>          

        </div>
      </div>
      <Pie />
    </main>
  );
}

function VistaMariscos({ abrir }: { abrir: (platillo: Platillo) => void }) {
  const [categoria, definirCategoria] = useState("Fresco");
  const categorias = ["Fresco", "Especialidades", "Bebidas"];
  const filtrados = platillosMariscos.filter((platillo) => platillo.categoria === categoria);

  return (
    <main>
      <section className="hero-marca hero-mariscos">
        <div className="contenedor">
          <p className="sobrelinea coral">EL MAR SABE MEJOR AQUÍ</p>
          <h1>Fresco, como<br />se debe.</h1>
          <p>Encuentra tu antojo y descubre qué lleva cada platillo.</p>
        </div>
      </section>
      <div className="contenedor contenido-menu contenido-mariscos">
        <Selector
          opciones={categorias}
          activa={categoria}
          alCambiar={definirCategoria}
        />
        <div className="cabecera-menu">
          <div>
            <h2>{categoria}</h2>
            <p>
             Frescos, deliciosos y bien servidos
            </p>
          </div>
        </div>

        <div className="rejilla-platillos">
          {filtrados.map((platillo) => (
            <TarjetaPlatillo
              key={platillo.nombre}
              platillo={platillo}
              abrir={abrir}
              estilo="mar"
            />
          ))}
        </div>

        <div className="aviso aviso-mar">
          ⓘ <span>Consulta la disponibilidad del día por WhatsApp.</span>
        </div>
      </div>
      <Pie />
    </main>
  );
}


function VistaEventos() {
  return (
    <main>
      <section className="evento-foto"><img src={fotos.evento} alt="Familia y amigos compartiendo una comida especial" /></section>
      <section className="evento-presentacion">
        <div className="contenedor"><p className="sobrelinea naranja">TAMALES YAQUI + MARISCOS JD</p><h1>¡Atendemos tus eventos especiales,convivios,          servicios que necesites !</h1><p>¿Necesitas comida para un evento? ¡Cotiza con nosotros!</p></div>
      </section>
      <section className="contenedor evento-contenido">
        <h2>Tú reúnes.<br />Nosotros ponemos el sabor.</h2>
        <p>Tamales, comidas y mariscos para compartir en tus mejores momentos.</p>
        <div className="categorias-evento">
          <span>✨🎄<strong>Especiales</strong></span><span>🧑‍🎓<strong>Escolares</strong></span><span>🥳<strong>Convivios</strong></span>
        </div>
        <div className="lista-planeacion">
          <h3>Cuéntanos qué estás planeando</h3>
          <p><Icono nombre="marca" /> La fecha y el tipo de evento</p>
          <p><Icono nombre="marca" /> El número de personas</p>
          <p><Icono nombre="marca" /> Los platillos que se te antojan</p>
        </div>
        <p className="nota-evento">ⓘ Pregunta por la disponibilidad de tu platillo deseado; nos adaptamos a tus necesidades.</p>
        <BotonWhatsapp mensaje="Hola, me gustaría cotizar un evento .">Cotizar mi Evento por WhatsApp</BotonWhatsapp>
      </section>
      <Pie />
    </main>
  );
}


function BotonWhatsapp({
  numero,
  mensaje,
  children,
}: {
  numero?: string;
  mensaje: string;
  children: React.ReactNode;
}) {
  const destino = numero ? `https://wa.me/${numero}` : "https://wa.me";
  return (
    <a
      className="boton-whatsapp"
      href={`${destino}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noreferrer"
    >
      <Icono nombre="whatsapp" />
      {children}
    </a>
  );
}

function ModalDetalle({ platillo, cerrar }: { platillo: Platillo; cerrar: () => void }) {
  useEffect(() => {
    const manejarTecla = (evento: KeyboardEvent) => evento.key === "Escape" && cerrar();
    document.addEventListener("keydown", manejarTecla);
    document.body.classList.add("sin-desplazamiento");
    return () => { document.removeEventListener("keydown", manejarTecla); document.body.classList.remove("sin-desplazamiento"); };
  }, [cerrar]);

  // Selección de teléfono según la marca del platillo
  const numeroTelefono = platillo.marca === "tamales" ? "526441387024" : "526444476573";
  return (
    <div className="fondo-modal" role="presentation" onMouseDown={(evento) => evento.target === evento.currentTarget && cerrar()}>
      <section className={`modal ${platillo.marca}`} role="dialog" aria-modal="true" aria-label={`Detalle de ${platillo.nombre}`}>
        <button className="cerrar-modal" onClick={cerrar} aria-label="Cerrar detalle"><Icono nombre="cerrar" /></button>
        <img className="imagen-modal" src={platillo.imagen} alt={platillo.nombre} />
        <div className="contenido-modal">
          <p className="sobrelinea">{platillo.marca === "tamales" ? "DE LA COCINA YAQUI" : `MARISCOS JD · ${platillo.categoria.toUpperCase()}`}</p>
          <h2>{platillo.nombre}</h2>
          <p className="descripcion-modal">{platillo.descripcion}</p>
          <div className="ingredientes"><h3>¿Cual se te antoja?</h3><ul>{platillo.ingredientes.map((ingrediente) => <li key={ingrediente}>{ingrediente}</li>)}</ul></div>
          <BotonWhatsapp 
            numero={numeroTelefono} 
            mensaje={`Hola, me gustaría pedir ${platillo.nombre}. ¿Está disponible hoy?`}
          >
            Pedir por WhatsApp
          </BotonWhatsapp>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [vista, definirVista] = useState<Vista>("inicio");
  const [detalle, definirDetalle] = useState<Platillo | null>(null);

  const irA = (nuevaVista: Vista) => {
    definirVista(nuevaVista);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Configuración del botón de WhatsApp según la vista actual
  const configWhatsapp = {
    tamales: {
      numero: "526441387024",
      mensaje: "Hola, me gustaría hacer un pedido de Tamales Yaqui.",
    },
    mariscos: {
      numero: "526444476573",
      mensaje: "Hola, me gustaría hacer un pedido de Mariscos JD.",
    },
    eventos: {
      numero: "526444476573", // O el número preferido para eventos
      mensaje: "Hola, me gustaría cotizar un evento especial.",
    },
    inicio: {
      numero: "526444476573",
      mensaje: "Hola, me gustaría solicitar información sobre el menú.",
    },
  }[vista];

  return (
    <div className={`aplicacion vista-${vista}`}>
      <Encabezado vista={vista} irA={irA} />
      {vista === "inicio" && <Inicio irA={irA} />}
      {vista === "tamales" && <VistaTamales abrir={definirDetalle} />}
      {vista === "mariscos" && <VistaMariscos abrir={definirDetalle} />}
      {vista === "eventos" && <VistaEventos />}

      {/* Botón flotante con el número y mensaje de la sección activa */}
      <a
        className="fab"
        href={`https://wa.me/${configWhatsapp.numero}?text=${encodeURIComponent(configWhatsapp.mensaje)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <Icono nombre="whatsapp" />
      </a>

      {detalle && <ModalDetalle platillo={detalle} cerrar={() => definirDetalle(null)} />}
    </div>
  );
}
