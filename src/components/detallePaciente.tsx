import Menu from "./menu";
import TrashIcon from "@/icons/trashIcon";
import '@/styles/detallePacientes.css'

export default function Pacientes() {

    const ExpedienteMedico = () => {
      return (
      <section className="expedienteMedico">
        <h2>Expediente Medico</h2>
        <div className="nombre">
              <h3><strong>Enfermedades Hereditarias</strong></h3> <br />
              <label htmlFor="">Nombre Completo:</label>
              <input type="text" />
            </div>
      </section>
    )}
    return (
      <section className="pagePacientes">
        <Menu />
        <section className="pageContent">
          <section className="submenu">
            <h2>Datos del Paciente</h2>
            <button>Expediente Clinico</button>
            <button>Medicamentos Recetados</button>
            <button>Historial de Citas</button>
          </section>
          <section className="datos">
            <div className="nombre">
              <h3><strong>Datos Generales</strong></h3> <br />
              <label htmlFor="">Nombre Completo:</label>
              <input type="text" />
            </div>
            <div className="fecha">
            <label htmlFor="">Fecha de Nacimiento:</label>
            <input type="date" />
            </div>
            <div className="sexo">
            <label htmlFor="">Sexo:</label>
            <select>
              <option disabled>Elija una opción</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
            </div>
            <div className="email">
            <label htmlFor="">Email:</label>
            <input type="email" />
            </div>
            <div className="telefono">
            <label htmlFor="">Teléfono:</label>
            <input type="text" />
            </div>
            <div className="dni">
              <label htmlFor="">Número de Identidad:</label>
              <input type="text" />
            </div>
            <div className="rtn">
              <label htmlFor="">RTN:</label>
              <input type="text" />
            </div>
            <div className="direccion">
              <label htmlFor="">Dirección:</label>
              <textarea name="" id=""></textarea>
            </div>
            <div className="aseguradora">
              <h3><strong>Información del Seguro</strong></h3> <br />
              <label htmlFor="">Aseguradora:</label>
              <select>
                <option disabled>Elija una opción</option>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
              </select>
            </div>
            <div className="poliza">
              <br />
              <br />
              <label htmlFor="">Número de Poliza:</label>
              <input type="text" />
            </div>
            <div className="nombreContacto">
              <h3><strong>Información de Contacto de Emergencia</strong></h3> <br />
              <label htmlFor="">Nombre Completo:</label>
              <input type="text" />
            </div>
            <div className="parentesco">
              <label htmlFor="">Parentesco:</label>
              <select>
                <option disabled>Elija una opción</option>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
              </select>
            </div>
            <div className="telefonoContacto">
              <label htmlFor="">Teléfono:</label>
              <input type="text" />
            </div>
          </section>
          <div className="botonGuardar">
            <button>Guardar Datos</button>
          </div>
          <ExpedienteMedico />
        </section>
        
      </section>
       
    );
  }
  