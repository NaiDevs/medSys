import PacientesIcon from "@/icons/pacientes";
import HistoriaIcon from "@/icons/historia";
import CitasIcon from "@/icons/citas";
import ReportesIcon from "@/icons/reportes";
import LogOutIcon from "@/icons/logOut";
import '@/styles/menu.css'
export default function Menu() {
    return (
      <section className="menu">
        <h1>MedSys</h1>
        <ul>
            <li><PacientesIcon /><a href="#">Pacientes</a></li>
            <li><HistoriaIcon /><a href="#">Historias Clinicas</a></li>
            <li><CitasIcon /><a href="#">Citas</a></li>
            <li><ReportesIcon /><a href="#">Medicamentos</a></li>
            <li><ReportesIcon /><a href="#">Doctores</a></li>
            <li><ReportesIcon /><a href="#">Reportes</a></li>
            <li><ReportesIcon /><a href="#">Configuración</a></li>
        </ul>
        <div>
            <LogOutIcon />
            <p className="text-sm user">Naidelyn</p>
            <p className="text-xs logOut">Cerrar Sesión</p>
        </div>
      </section>
    );
  }
  