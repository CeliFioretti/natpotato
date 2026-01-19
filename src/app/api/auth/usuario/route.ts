// Otener todos los usuarios (TESTING)
import { NextResponse } from "next/server";
import {supabase} from '@/app/lib/supabase/client'

export async function GET() {
    
    const {data, error} = await supabase
    .from('usuario')
    .select("*") 

    if (error) {
        console.error(error)
        return NextResponse.json({
            error: "Error al obtener un usuario"
        }, {status: 500})
    }

    return NextResponse.json({
        usuario: data
    })
}