import { NextResponse } from "next/server";
import { connDB } from "@/libs/mysqlDB";

export async function GET() {
    try {
      const results = await connDB.query("SELECT * FROM aseguradoras ORDER BY `nombreAseguradora` ASC;");
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

      console.log(data)

      const results = await connDB.query("INSERT INTO aseguradoras SET ?" ,{
        nombreAseguradora: data.get("nombreAseguradora"),
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