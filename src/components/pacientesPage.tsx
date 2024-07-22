"use client";
import Menu from "./menu";
import TrashIcon from "@/icons/trashIcon";
import "@/styles/pacientesPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
interface types {
  dniPaciente: string;
  nombrePaciente: string;
  edadPaciente: string;
  sexoPaciente: string;
  telefonoPaciente: string;
}
export default function Pacientes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [paciente, setPaciente] = useState([]);
  useEffect(() => {
    axios.get("/api/pacientes").then((res) => {
      const pacienteData = res.data;
      setPaciente(pacienteData);
    });
  }, []);
  const filteredPacientes = paciente.filter(
    (paciente: types) =>
      paciente.dniPaciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paciente.nombrePaciente
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      paciente.edadPaciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paciente.sexoPaciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paciente.telefonoPaciente.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="pagePacientes">
      <Menu />
      <section className="pageContent">
        <h2>Lista de Pacientes</h2>
        <button type="button">
          <a href="/nuevoPaciente">Agregar Nuevo Paciente</a>
        </button>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Telefono</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredPacientes.map((paciente: types) => (
                <tr key={paciente.dniPaciente}>
                  <td>{paciente.dniPaciente}</td>
                  <td>{paciente.nombrePaciente}</td>
                  <td>{paciente.edadPaciente}</td>
                  <td>{paciente.sexoPaciente}</td>
                  <td>{paciente.telefonoPaciente}</td>
                  <td>
                    <TrashIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
