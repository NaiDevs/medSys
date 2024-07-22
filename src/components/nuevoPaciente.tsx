"use client";
import Menu from "./menu";
import "@/styles/nuevoPaciente.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "sonner";

interface types {
  idSexo: number;
  nombreSexo: string;
  idAseguradora: number;
  nombreAseguradora: string;
  idParentesco: number;
  nombreParentesco: string;
  dniPaciente: string;
  nombrePaciente: string;
  rtnPaciente: string;
  fechaNacimientoPaciente: string;
  sexoPaciente: string;
  emailPaciente: string;
  telefonoPaciente: string;
  direccionPaciente: string;
  aseguradoraPaciente: string;
  polizaPaciente: string;
  nombreContactoPaciente: string;
  parentescoPaciente: string;
  telefonoContactoPaciente: string;
}
export default function NuevoPaciente() {
  const form = useRef(null);
  const [sexo, setSexo] = useState([]);
  const [aseguradora, setAseguradora] = useState([]);
  const [parentesco, setParentesco] = useState([]);
  const [paciente, setPaciente] = useState({
    dniPaciente: "",
    nombrePaciente: "",
    rtnPaciente: "",
    fechaNacimientoPaciente: "",
    sexoPaciente: "",
    emailPaciente: "",
    telefonoPaciente: "",
    direccionPaciente: "",
    aseguradoraPaciente: "",
    polizaPaciente: "",
    nombreContactoPaciente: "",
    parentescoPaciente: "",
    telefonoContactoPaciente: "",
  });

  useEffect(() => {
    axios.get("/api/sexos").then((res) => {
      const sexoData = res.data;
      setSexo(sexoData);
    });
    axios.get("/api/aseguradora").then((res) => {
      const aseguradoraData = res.data;
      setAseguradora(aseguradoraData);
    });
    axios.get("/api/parentescos").then((res) => {
      const parentescoData = res.data;
      setParentesco(parentescoData);
    });
  }, []);

  const handleChange = (e: any) => {
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value,
    });
    console.log([e.target.name] + e.target.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("dniPaciente", paciente.dniPaciente);
      formData.append("nombrePaciente", paciente.nombrePaciente);
      formData.append("rtnPaciente", paciente.rtnPaciente);
      formData.append("fechaNacimientoPaciente", paciente.fechaNacimientoPaciente);
      formData.append("sexoPaciente", paciente.sexoPaciente);
      formData.append("emailPaciente", paciente.emailPaciente);
      formData.append("telefonoPaciente", paciente.telefonoPaciente);
      formData.append("direccionPaciente", paciente.direccionPaciente);
      formData.append("aseguradoraPaciente", paciente.aseguradoraPaciente);
      formData.append("polizaPaciente", paciente.polizaPaciente);
      formData.append("nombreContactoPaciente", paciente.nombreContactoPaciente);
      formData.append("parentescoPaciente", paciente.parentescoPaciente);
      formData.append("telefonoContactoPaciente", paciente.telefonoContactoPaciente);

      const res = await axios.post("/api/pacientes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Paciente Ingresado Correctamente");
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
    <section className="pagePacientes">
      <Menu />
      <section className="pageContent">
        <form ref={form} onSubmit={handleSubmit}>
          <section className="datos">
            <div className="nombre">
              <h3>
                <strong>Datos Generales</strong>
              </h3>
              <br />
              <label htmlFor="">Nombre Completo:</label>
              <input type="text" name="nombrePaciente" onChange={handleChange}/>
            </div>
            <div className="fecha">
              <label htmlFor="">Fecha de Nacimiento:</label>
              <input type="date" name="fechaNacimientoPaciente" onChange={handleChange}/>
            </div>
            <div className="sexo">
              <label htmlFor="">Sexo:</label>
              <select onChange={handleChange} name="sexoPaciente">
                <option disabled selected>Elija una opción</option>
                {sexo.map((sexo: types) => (
                  <option value={sexo.idSexo} key={sexo.idSexo}>
                    {sexo.nombreSexo}
                  </option>
                ))}
              </select>
            </div>
            <div className="email">
              <label htmlFor="">Email:</label>
              <input type="email" name="emailPaciente" onChange={handleChange}/>
            </div>
            <div className="telefono">
              <label htmlFor="">Teléfono:</label>
              <input type="text" name="telefonoPaciente" onChange={handleChange}/>
            </div>
            <div className="dni">
              <label htmlFor="">Número de Identidad:</label>
              <input type="text" name="dniPaciente" onChange={handleChange}/>
            </div>
            <div className="rtn">
              <label htmlFor="">RTN:</label>
              <input type="text" name="rtnPaciente" onChange={handleChange}/>
            </div>
            <div className="direccion">
              <label htmlFor="">Dirección:</label>
              <textarea name="direccionPaciente" onChange={handleChange}></textarea>
            </div>
            <div className="aseguradora">
              <h3>
                <strong>Información del Seguro</strong>
              </h3>
              <br />
              <label htmlFor="">Aseguradora:</label>
              <select onChange={handleChange} name="aseguradoraPaciente">
                <option disabled selected>Elija una opción</option>
                {aseguradora.map((aseguradora: types) => (
                  <option
                    value={aseguradora.idAseguradora}
                    key={aseguradora.idAseguradora}
                  >
                    {aseguradora.nombreAseguradora}
                  </option>
                ))}
              </select>
            </div>
            <div className="poliza">
              <br />
              <br />
              <label htmlFor="">Número de Poliza:</label>
              <input type="text" name="polizaPaciente" onChange={handleChange}/>
            </div>
            <div className="nombreContacto">
              <h3>
                <strong>Información de Contacto de Emergencia</strong>
              </h3>{" "}
              <br />
              <label htmlFor="">Nombre Completo:</label>
              <input type="text" name="nombreContactoPaciente" onChange={handleChange}/>
            </div>
            <div className="parentesco">
              <label htmlFor="">Parentesco:</label>
              <select onChange={handleChange} name="parentescoPaciente">
                <option disabled selected>Elija una opción</option>
                {parentesco.map((parentesco: types) => (
                  <option
                    value={parentesco.idParentesco}
                    key={parentesco.idParentesco}
                  >
                    {parentesco.nombreParentesco}
                  </option>
                ))}
              </select>
            </div>
            <div className="telefonoContacto">
              <label htmlFor="">Teléfono:</label>
              <input type="text" name="telefonoContactoPaciente" onChange={handleChange}/>
            </div>
          </section>
          <div className="botonGuardar">
            <button type="submit">Guardar Datos</button>
          </div>
        </form>
      </section>
    </section>
  );
}
