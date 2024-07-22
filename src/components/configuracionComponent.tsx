"use client";
import Menu from "./menu";
import "@/styles/configuracionPage.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

interface types {
    idAseguradora: number,
    nombreAseguradora: string
}

export default function ConfiguracionComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mostrarAseguradoras, setMostrarAseguradoras] = useState(false);
  const [aseguradora, setAseguradora] = useState({ idAseguradora: 0, aseguradora: "" });
  const [dataAseguradora, setDataAseguradora] = useState([]);
  const form = useRef(null);

  useEffect(() => {
    axios.get("/api/aseguradora").then((res) => {
        const aseguradoraData = res.data;
        setDataAseguradora(aseguradoraData);   
    });
  }, []);

  const aseguradoras = () => {
    const filteredAseguradora = dataAseguradora.filter((aseguradora:types) =>
        aseguradora.nombreAseguradora.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
    const handleChange = (e: any) => {
      setAseguradora({
        ...aseguradora,
        [e.target.name]: e.target.value,
      });
      console.log([e.target.name] + e.target.value);
    };

    const handleSubmit = async (e: any) => {
      e.preventDefault();

      try {
        const formData = new FormData();
        formData.append("nombreAseguradora", aseguradora.aseguradora);

        const res = await axios.post("/api/aseguradora", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });


        toast.success("Aseguradora Ingresada Correctamente");
        axios.get("/api/aseguradora").then((res) => {
            const aseguradoraData = res.data;
            setDataAseguradora(aseguradoraData);   
        });
        if (form.current) {
          (form.current as HTMLFormElement).reset(); 
        } else {
          console.warn("form.current is null. Unable to reset form.");
        }

      } catch {
        toast.error("Error al Ingresar los Datos");
      }
    };
    return (
      <section className="aseguradoras">
        <p>Aseguradoras</p>
        <div className="content">
          <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor="aseguradora">Nombre de la Aseguradora:</label>
            <input
              type="text"
              name="aseguradora"
              onChange={handleChange}
            />
            <button>Guardar</button>
          </form>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Aseguradora</th>
                </tr>
              </thead>
              <tbody>
              {filteredAseguradora.map((aseguradora:types) => (
            <tr key={aseguradora.idAseguradora}>
              <td>{aseguradora.nombreAseguradora}</td>
            </tr>
          ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  };

  return (
    <section className="pageConfiguracion">
      <Menu />
      <section className="pageContent">
        <h2>Configuración</h2>

        <section className="options">
          <div className="clinica shadow-2xl">
            <ul>
              <li>Perfil de Clínica</li>
              <li>Facturación</li>
            </ul>
          </div>
          <div className="dentroClinica shadow-2xl">
            <ul>
              <li onClick={() => setMostrarAseguradoras(true)}>Aseguradoras</li>
              <li>Procedimientos</li>
              <li>Cirugías</li>
            </ul>
          </div>
        </section>
        {mostrarAseguradoras && aseguradoras()}
      </section>
    </section>
  );
}
