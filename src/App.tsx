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
    "https://images.unsplash.com/photo-1732118070605-8c5faa62d284?auto=format&fit=crop&w=1200&q=85",
  cerdo:
    "https://images.unsplash.com/photo-1730415136652-3044ec3db585?auto=format&fit=crop&w=1200&q=85",
  comida:
    "https://images.unsplash.com/photo-1552332386-1634d96809cf?auto=format&fit=crop&w=1200&q=85",
  lunch:
    "https://images.unsplash.com/photo-1629741884398-68d755d34404?auto=format&fit=crop&w=1200&q=85",
  camaron:
    "https://images.unsplash.com/photo-1622620545384-90592d78ecb2?auto=format&fit=crop&w=1200&q=85",
  atun:
    "https://images.unsplash.com/photo-1611262359546-64e2822b2ab5?auto=format&fit=crop&w=1200&q=85",
  aguachile:
    "https://images.unsplash.com/photo-1654018334224-4887d9e85ffe?auto=format&fit=crop&w=1200&q=85",
  ceviche:
    "https://images.unsplash.com/photo-1562707774-553917f561df?auto=format&fit=crop&w=1200&q=85",
  coctel:
    "https://images.unsplash.com/photo-1626663011352-cacdcfe333f8?auto=format&fit=crop&w=1200&q=85",
  ajillo:
    "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=1200&q=85",
  evento:
    "https://images.unsplash.com/photo-1746635732995-ab5c6118d5a7?auto=format&fit=crop&w=1600&q=85",
};

const platillosTamales: Platillo[] = [
  {
    nombre: "Tamal de Elote",
    descripcion: "Suave, dulcito y hecho para disfrutarse.",
    categoria: "Tamales",
    imagen: fotos.tamal,
    ingredientes: ["Elote tierno", "Mantequilla", "Un toque de azúcar", "Hoja de maíz"],
    marca: "tamales",
  },
  {
    nombre: "Tamal de Cerdo",
    descripcion: "Masa de maíz, cerdo y salsa de chile colorado.",
    categoria: "Tamales",
    imagen: fotos.cerdo,
    ingredientes: ["Masa de maíz", "Cerdo", "Chile colorado", "Especias de la casa"],
    marca: "tamales",
  },
  {
    nombre: "Cerdo en Chile Colorado",
    descripcion: "Cerdo, chile colorado, arroz y frijoles.",
    categoria: "Comidas del día",
    imagen: fotos.comida,
    ingredientes: ["Cerdo", "Chile colorado", "Arroz", "Frijoles"],
    marca: "tamales",
  },
  {
    nombre: "Lonche de Pierna",
    descripcion: "Pan, pierna de cerdo, lechuga, tomate y aguacate.",
    categoria: "Lunchs",
    imagen: fotos.lunch,
    ingredientes: ["Pan crujiente", "Pierna de cerdo", "Lechuga", "Tomate", "Aguacate"],
    marca: "tamales",
  },
];

const platillosMariscos: Platillo[] = [
  {
    nombre: "Tostada de camarón",
    descripcion: "Ceviche, aguacate y limón.",
    categoria: "Tostadas",
    imagen: fotos.camaron,
    ingredientes: ["Camarón", "Pepino", "Cebolla morada", "Aguacate", "Tomate", "Cilantro y limón"],
    marca: "mariscos",
  },
  {
    nombre: "Tostada de atún",
    descripcion: "Atún fresco y ajonjolí.",
    categoria: "Tostadas",
    imagen: fotos.atun,
    ingredientes: ["Atún fresco", "Ajonjolí", "Aguacate", "Salsa de la casa"],
    marca: "mariscos",
  },
  {
    nombre: "Aguachile verde",
    descripcion: "Camarón, pepino y chile.",
    categoria: "Fresco",
    imagen: fotos.aguachile,
    ingredientes: ["Camarón", "Pepino", "Chile verde", "Cebolla", "Limón"],
    marca: "mariscos",
  },
  {
    nombre: "Ceviche de pescado",
    descripcion: "Pescado, tomate y cilantro.",
    categoria: "Fresco",
    imagen: fotos.ceviche,
    ingredientes: ["Pescado", "Tomate", "Cilantro", "Cebolla", "Limón"],
    marca: "mariscos",
  },
  {
    nombre: "Cóctel de camarón",
    descripcion: "La combinación de la casa.",
    categoria: "Especialidades",
    imagen: fotos.coctel,
    ingredientes: ["Camarón", "Tomate", "Cebolla", "Aguacate", "Salsa de la casa"],
    marca: "mariscos",
  },
  {
    nombre: "Camarones al mojo",
    descripcion: "Ajo dorado, arroz y ensalada.",
    categoria: "Especialidades",
    imagen: fotos.ajillo,
    ingredientes: ["Camarón", "Ajo dorado", "Mantequilla", "Arroz", "Ensalada"],
    marca: "mariscos",
  },
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
        <button className="logo logo-yaqui" onClick={() => irA("tamales")} aria-label="Ir a Tamales Yaqui">
          <small>TAMALES</small><strong>Yaqui</strong>
        </button>
        <span className="separador-logo" />
        <button className="logo logo-jd" onClick={() => irA("mariscos")} aria-label="Ir a Mariscos JD">
          <small>MARISCOS</small><strong>JD</strong>
        </button>
      </header>
    );
  }
  const titulo = vista === "tamales" ? "Tamales Yaqui" : vista === "mariscos" ? "MARISCOS JD" : "Celebremos juntos";
  const subtitulo = vista === "tamales" ? "TAMALES Y LUNCHS" : vista === "mariscos" ? "DEL MAR A TU MESA" : "EVENTOS ESPECIALES";
  return (
    <header className={`encabezado encabezado-seccion ${vista}`}>
      <button className="boton-icono" onClick={() => irA("inicio")} aria-label="Volver al inicio"><Icono nombre="flecha" /></button>
      <button className="titulo-marca" onClick={() => irA("inicio")}>
        <strong>{titulo}</strong><small>{subtitulo}</small>
      </button>
      <button className="boton-icono" onClick={() => irA("inicio")} aria-label="Inicio"><Icono nombre="casa" /></button>
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
            <a href="#" onClick={(evento) => evento.preventDefault()}>f&nbsp;&nbsp; Facebook</a>
            <a href="#" onClick={(evento) => evento.preventDefault()}>◎&nbsp; Instagram</a>
            <small>Enlaces por confirmar</small>
          </div>
          <div>
            <strong className="azul">Mariscos JD</strong>
            <a href="#" onClick={(evento) => evento.preventDefault()}>f&nbsp;&nbsp; Facebook</a>
            <a href="#" onClick={(evento) => evento.preventDefault()}>◎&nbsp; Instagram</a>
            <small>Enlaces por confirmar</small>
          </div>
        </div>
        <div className="datos-contacto">
          <span>⌕ &nbsp; Teléfono por confirmar</span>
          <span>⌖ &nbsp; Dirección por confirmar</span>
          <span>◷ &nbsp; Horario por confirmar</span>
        </div>
      </div>
    </footer>
  );
}

function TarjetaInicio({ vista, irA }: { vista: Exclude<Vista, "inicio">; irA: (vista: Vista) => void }) {
  const datos = {
    tamales: { etiqueta: "TAMALES YAQUI", titulo: "Tamales y Lunchs", nota: "Hechos con tradición", imagen: fotos.tamal },
    mariscos: { etiqueta: "FRESCURA QUE SE ANTOJA", titulo: "Mariscos JD", nota: "Del mar a tu mesa", imagen: fotos.camaron },
    eventos: { etiqueta: "CELEBREMOS JUNTOS", titulo: "Eventos Especiales", nota: "Tú reúnes. Nosotros cocinamos.", imagen: fotos.evento },
  }[vista];
  return (
    <button className={`tarjeta-inicio ${vista}`} onClick={() => irA(vista)}>
      <span className="contenido-tarjeta">
        <small>{datos.etiqueta}</small>
        <strong>{datos.titulo}</strong>
        <span>{datos.nota}</span>
        <b aria-hidden="true">↗</b>
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
        <p className="introduccion">Del antojo de todos los días a ese momento que merece celebrarse.</p>
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

function VistaTamales({ abrir }: { abrir: (platillo: Platillo) => void }) {
  const [categoria, definirCategoria] = useState("Tamales");
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
        <Selector opciones={["Tamales", "Comidas del día", "Lunchs"]} activa={categoria} alCambiar={definirCategoria} />
        <div className="cabecera-menu">
          <div><h2>{categoria === "Tamales" ? "Nuestros tamales" : categoria}</h2><p>{categoria === "Tamales" ? "Suaves, calientitos y hechos con cariño." : "Para comer rico, sin complicarte."}</p></div>
          <span className="adorno">♧</span>
        </div>
        <div className={`rejilla-platillos ${categoria !== "Tamales" ? "lista" : ""}`}>
          {filtrados.map((platillo) => (
            <article className="tarjeta-platillo yaqui" key={platillo.nombre}>
              <img src={platillo.imagen} alt={platillo.nombre} />
              <div><h3>{platillo.nombre}</h3><p>{platillo.descripcion}</p>
                <button className="enlace-detalle" onClick={() => abrir(platillo)}>Ver detalle <span>→</span></button>
              </div>
            </article>
          ))}
        </div>
        <div className="aviso">♧ <span>Pregunta por las comidas y los tamales disponibles hoy.</span></div>
      </div>
      <Pie />
    </main>
  );
}

function VistaMariscos({ abrir }: { abrir: (platillo: Platillo) => void }) {
  const [categoria, definirCategoria] = useState("Tostadas");
  const categorias = ["Tostadas", "Fresco", "Especialidades", "Bebidas"];
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
        <Selector opciones={categorias} activa={categoria} alCambiar={definirCategoria} />
        <div className="cabecera-menu">
          <div><h2>{categoria}</h2><p>{categoria === "Bebidas" ? "Algo fresco para acompañar." : "Crujientes, frescos y bien servidos."}</p></div>
        </div>
        {categoria === "Bebidas" ? (
          <div className="bebidas">
            <article><span>▱</span><h3>Agua fresca</h3><p>Pregunta por el sabor del día.</p></article>
            <article><span>▱</span><h3>Refresco</h3><p>Consulta las opciones disponibles.</p></article>
          </div>
        ) : (
          <div className="rejilla-platillos">
            {filtrados.map((platillo) => (
              <article className="tarjeta-platillo mar" key={platillo.nombre}>
                <div className="foto-platillo"><img src={platillo.imagen} alt={platillo.nombre} /><button onClick={() => abrir(platillo)} aria-label={`Ver qué lleva ${platillo.nombre}`}><Icono nombre="mas" /></button></div>
                <div><h3>{platillo.nombre}</h3><p>{platillo.descripcion}</p></div>
              </article>
            ))}
          </div>
        )}
        <div className="aviso aviso-mar">ⓘ <span>Consulta la disponibilidad del día por WhatsApp.</span></div>
      </div>
      <Pie />
    </main>
  );
}

function BotonWhatsapp({ mensaje, children }: { mensaje: string; children: React.ReactNode }) {
  return <a className="boton-whatsapp" href={`https://wa.me/?text=${encodeURIComponent(mensaje)}`} target="_blank" rel="noreferrer"><Icono nombre="whatsapp" />{children}</a>;
}

function VistaEventos() {
  return (
    <main>
      <section className="evento-foto"><img src={fotos.evento} alt="Familia y amigos compartiendo una comida especial" /><span>✣ &nbsp; EL SABOR DE ESTAR JUNTOS</span></section>
      <section className="evento-presentacion">
        <div className="contenedor"><p className="sobrelinea naranja">TAMALES YAQUI + MARISCOS JD</p><h1>¡Atendemos tus eventos especiales, escolares y convivios!</h1><p>¿Necesitas comida para un evento? ¡Cotiza con nosotros!</p></div>
      </section>
      <section className="contenedor evento-contenido">
        <h2>Tú reúnes.<br />Nosotros ponemos el sabor.</h2>
        <p>Tamales, comidas y mariscos para compartir en tus mejores momentos.</p>
        <div className="categorias-evento">
          <span>✣<strong>Especiales</strong></span><span>⌂<strong>Escolares</strong></span><span>♧<strong>Convivios</strong></span>
        </div>
        <div className="lista-planeacion">
          <h3>Cuéntanos qué estás planeando</h3>
          <p><Icono nombre="marca" /> La fecha y el tipo de evento</p>
          <p><Icono nombre="marca" /> El número de personas</p>
          <p><Icono nombre="marca" /> Los platillos que se te antojan</p>
        </div>
        <p className="nota-evento">◯ &nbsp; Pregunta por la disponibilidad de tu platillo deseado; nos adaptamos a tus necesidades.</p>
        <BotonWhatsapp mensaje="Hola, me gustaría cotizar un evento especial.">Cotizar mi Evento por WhatsApp</BotonWhatsapp>
      </section>
      <Pie />
    </main>
  );
}

function ModalDetalle({ platillo, cerrar }: { platillo: Platillo; cerrar: () => void }) {
  useEffect(() => {
    const manejarTecla = (evento: KeyboardEvent) => evento.key === "Escape" && cerrar();
    document.addEventListener("keydown", manejarTecla);
    document.body.classList.add("sin-desplazamiento");
    return () => { document.removeEventListener("keydown", manejarTecla); document.body.classList.remove("sin-desplazamiento"); };
  }, [cerrar]);
  return (
    <div className="fondo-modal" role="presentation" onMouseDown={(evento) => evento.target === evento.currentTarget && cerrar()}>
      <section className={`modal ${platillo.marca}`} role="dialog" aria-modal="true" aria-label={`Detalle de ${platillo.nombre}`}>
        <button className="cerrar-modal" onClick={cerrar} aria-label="Cerrar detalle"><Icono nombre="cerrar" /></button>
        <img className="imagen-modal" src={platillo.imagen} alt={platillo.nombre} />
        <div className="contenido-modal">
          <p className="sobrelinea">{platillo.marca === "tamales" ? "DE LA COCINA YAQUI" : `MARISCOS JD · ${platillo.categoria.toUpperCase()}`}</p>
          <h2>{platillo.nombre}</h2>
          <p className="descripcion-modal">{platillo.descripcion}</p>
          <div className="ingredientes"><h3>¿Qué lleva?</h3><ul>{platillo.ingredientes.map((ingrediente) => <li key={ingrediente}>{ingrediente}</li>)}</ul></div>
          <BotonWhatsapp mensaje={`Hola, me gustaría pedir ${platillo.nombre}. ¿Está disponible hoy?`}>Pedir por WhatsApp</BotonWhatsapp>
          <small className="nota-modal">Consulta disponibilidad y cuéntanos cómo se te antoja.</small>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [vista, definirVista] = useState<Vista>("inicio");
  const [detalle, definirDetalle] = useState<Platillo | null>(null);
  const irA = (nuevaVista: Vista) => { definirVista(nuevaVista); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <div className={`aplicacion vista-${vista}`}>
      <Encabezado vista={vista} irA={irA} />
      {vista === "inicio" && <Inicio irA={irA} />}
      {vista === "tamales" && <VistaTamales abrir={definirDetalle} />}
      {vista === "mariscos" && <VistaMariscos abrir={definirDetalle} />}
      {vista === "eventos" && <VistaEventos />}
      <a className="fab" href="https://wa.me/?text=Hola%2C%20quiero%20hacer%20un%20pedido." target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><Icono nombre="whatsapp" /></a>
      {detalle && <ModalDetalle platillo={detalle} cerrar={() => definirDetalle(null)} />}
    </div>
  );
}
