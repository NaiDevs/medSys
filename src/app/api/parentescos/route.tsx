import { NextResponse } from "next/server";
import { connDB } from "@/libs/mysqlDB";

export async function GET() {
    try {
      const results = await connDB.query("SELECT * FROM parentescos");
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