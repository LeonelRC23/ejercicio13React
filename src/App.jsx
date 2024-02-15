import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import { API_KEY, BACKGROUND_CLIMA } from "./constantes";

function App() {
  const [colorClima, setColorClima] = useState(
    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)"
  );
  const [datos, setDatos] = useState(null);
  const [ubicacion, setUbicacion] = useState("Tucuman");
  const [pais, setPais] = useState("ar");
  const errorAlerta = () => {
    alert("error");
  };
  const cambiarColor = (datos) => {
    let objetoColor = BACKGROUND_CLIMA.filter(
      (color) => color.clima == datos.weather[0].main
    );
    if (objetoColor.lenght == 0) {
      setColorClima(
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)"
      );
    } else {
      setColorClima(objetoColor[0]?.color);
    }
  };
  const obtenerDatos = (ubicacion) => {
    ubicacion.preventDefault();
    setUbicacion(ubicacion.target[0].value);
    setPais(ubicacion.target[1].value);
  };
  useEffect(() => {
    consutarAPI();
  }, [ubicacion, pais]);
  const consutarAPI = async () => {
    const respuesta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${pais}&appid=${API_KEY}&units=metric`
    );
    let resultado = await respuesta.json();
    console.log(resultado);
    setDatos(resultado);
  };
  useEffect(() => {
    if (datos !== null) {
      if (datos.cod !== 200) {
        errorAlerta();
      } else if (datos.cod === 200) {
        cambiarColor(datos);
      }
    }
  }, [datos]);
  if (!datos) {
    return <h1>Cargando</h1>;
  }
  return (
    <>
      <div
        className="min-vh-100"
        style={{
          background: colorClima,
        }}
      >
        <div className="container">
          <Formulario
            obtenerDatos={obtenerDatos}
            ubicacion={ubicacion}
            pais={pais}
            key={"1"}
          />
          <div>
            {datos.cod === 200 ? (
              <Clima datos={datos} />
            ) : (
              <>
                <p>Lugar no encontrado</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
