import './App.css';
import { useState } from 'react'; // Importamos useState
import Search from './assets/IMG/Search.png';
import movie from './assets/IMG/Movie.png';
import pez from './assets/IMG/Videojuego.png';
import libro from './assets/IMG/Books.png';
import tele from './assets/IMG/Televisor.png';
import pila from './assets/IMG/Battery.png';
import pelfav from './assets/IMG/peliculaFav.jpEg';
import serie from './assets/IMG/serieFav.jpg';
import libroF from './assets/IMG/libroFav.jpg';
import juego from './assets/IMG/juegoFav.avif';
import deporte from './assets/IMG/lemans.jpg';


const Contenido = ({ actualizarDato, datoSeleccionado, imagenSeleccionada }) => (
<>
      <header>
        <h1>
          <img src={Search} alt="" /> ACERCA DE MI
        </h1>
      </header>

      <main>
        <aside>
          <p className='titulo'>GUSTOS</p>
          <ul>
            <li onClick={() => actualizarDato('Pelicula Favorita: *Pacific Rim* es una película de ciencia ficción dirigida por Guillermo del Toro. La trama gira en torno a una invasión de monstruos gigantes llamados *Kaiju* que emergen del fondo del océano y atacan ciudades. Para combatirlos, los humanos crean enormes robots, conocidos como *Jaegers*, que son pilotados por dos personas conectadas mentalmente. La historia sigue a un grupo de pilotos que luchan por salvar la humanidad de la destrucción total mientras enfrentan batallas épicas contra los Kaiju.', pelfav)}>
              <img src={movie} alt="" /> 
              Pelicula favorita
            </li>
            
            <li onClick={() => actualizarDato('Serie Favorita: *The Last of Us* es una serie de televisión basada en el popular videojuego del mismo nombre. Ambientada en un mundo postapocalíptico, la trama sigue a Joel, un sobreviviente endurecido, y Ellie, una adolescente que podría tener la clave para salvar a la humanidad de una pandemia causada por un hongo que convierte a las personas en criaturas violentas. A medida que viajan juntos por un Estados Unidos devastado, enfrentan peligros tanto de infectados como de otros sobrevivientes, mientras forman un vínculo profundo en medio de la desesperación y el caos.', serie)}>
              <img src={tele} alt="" />
              Serie Favorita
            </li>
            <li onClick={() => actualizarDato('Libro Favorito: "El esclavo" de Anand Dilvar es una novela que aborda temas de libertad, opresión y la lucha interna del ser humano. La historia se centra en un protagonista que enfrenta diversas adversidades y desafíos en su vida, reflejando la búsqueda de la verdadera libertad tanto física como emocional. A través de sus experiencias, el autor invita a los lectores a reflexionar sobre la naturaleza de la esclavitud, no solo en un sentido literal, sino también en el contexto de las cadenas invisibles que a menudo nos atan en la vida cotidiana. La obra ha resonado con muchos, logrando ventas significativas y un impacto duradero en sus lectores.', libroF)}>
              <img src={libro} alt="" />
              Libro Favorito
            </li>
            <li onClick={() => actualizarDato('Juego Favorito: *The Last of Us Part II* es un videojuego de acción y aventura desarrollado por Naughty Dog y lanzado en 2020. La historia sigue a Ellie, una joven que busca venganza tras un trágico evento que cambia su vida. Ambientado en un mundo postapocalíptico, Ellie debe enfrentarse a peligros tanto humanos como infectados mientras navega por un paisaje emocionalmente devastador. El juego explora temas complejos como el dolor, la pérdida y las consecuencias de las decisiones, todo ello acompañado de una narrativa intensa y gráficos impresionantes. Aclamado por su profundidad emocional y su jugabilidad, *The Last of Us Part II* se ha consolidado como una de las obras más significativas en la industria de los videojuegos.', juego)}>
              <img src={pez} alt="" />
              Juego Favorito
            </li>
            <li onClick={() => actualizarDato('Deporte Favorito: Las 24 Horas de Le Mans es una famosa carrera de resistencia que se celebra anualmente en el Circuito de la Sarthe, en Francia. Desde su primera edición en 1923, esta competencia ha sido considerada una de las más prestigiosas del automovilismo, desafiando a los equipos a completar la mayor cantidad de vueltas posibles en un período de 24 horas. Los coches compiten en diversas categorías, y la carrera pone a prueba no solo la velocidad, sino también la durabilidad y la estrategia, ya que los pilotos deben gestionar el desgaste del vehículo y los cambios en las condiciones climáticas. Con una rica historia y momentos icónicos, las 24 Horas de Le Mans es un evento que atrae a miles de aficionados y destaca por su emoción y tradición en el mundo del motor.', deporte)}>
              <img src={pila} alt="" />
              Deporte Favorito
            </li>
          </ul>
        </aside>

        <section>
          <p>
            <strong>Dato:</strong>
            <br />
            {datoSeleccionado || 'Selecciona un gusto para mostrar aquí.'}
          </p>
          {/* Mostrar imagen seleccionada si existe */}
          {imagenSeleccionada && (
            <img src={imagenSeleccionada} alt="Imagen seleccionada" className='imagenes-grandes' />
          )}
        </section>
      </main>

      <footer>
        <p>CABAÑA: HADES - GRUPO: 5-F - Angel Uriel Dominguez Valtierrez</p>
      </footer>
      </>
);



function App() {
  // Estados para almacenar la información seleccionada y la imagen
  const [datoSeleccionado, setDatoSeleccionado] = useState('');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  // Función para manejar la actualización del dato en el section
  const actualizarDato = (nuevoDato, nuevaImagen) => {
    setDatoSeleccionado(nuevoDato);
    setImagenSeleccionada(nuevaImagen);
  };

  return <Contenido actualizarDato={actualizarDato} datoSeleccionado={datoSeleccionado} imagenSeleccionada={imagenSeleccionada} />;
}

export default App;


