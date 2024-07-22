import { NextResponse } from "next/server";
import { connDB } from "@/libs/mysqlDB";

export async function GET() {
    try {
      const results = await connDB.query("SELECT * FROM pacientes ORDER BY `nombrePaciente` ASC;");
      return NextResponse.json(results);
    } catch (error:any) {
      console.log(error);
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }

  export async function POST(request:any) {
    try {
      const data = await request.formData();

      const results = await connDB.query("INSERT INTO pacientes SET ?" ,{
        dniPaciente: data.get("dniPaciente"),
        nombrePaciente: data.get("nombrePaciente"),
        rtnPaciente: data.get("rtnPaciente"),
        fechaNacimientoPaciente: data.get("fechaNacimientoPaciente"),
        sexoPaciente: data.get("sexoPaciente"),
        emailPaciente: data.get("emailPaciente"),
        telefonoPaciente: data.get("telefonoPaciente"),
        direccionPaciente: data.get("direccionPaciente"),
        aseguradoraPaciente: data.get("aseguradoraPaciente"),
        polizaPaciente: data.get("polizaPaciente"),
        nombreContactoPaciente: data.get("nombreContactoPaciente"),
        parentescoPaciente: data.get("parentescoPaciente"),
        telefonoContactoPaciente: data.get("telefonoContactoPaciente"),
      });

      return NextResponse.json(results);
    } catch (error:any) {
      console.log(error);
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }