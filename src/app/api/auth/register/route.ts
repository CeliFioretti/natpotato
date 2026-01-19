import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

type RegisterBody = {
            nombre: string,
            correo: string,
            password: string
        }


// Crear usuario
export async function POST(request: Request) {
    try {
        
        // 1. obtengo datos ingresados por usuario
        const body: RegisterBody = await request.json();

        // 2. comprobación si el usuario no ingresa algun campo
        if (!body.correo || !body.nombre || !body.password) {
            return NextResponse.json({
                error: "Faltan campos por rellenar" 
            }, { status: 400 })
        }

        // 3. hasheo contraseña
        const hashedPassword = await bcrypt.hash(body.password, 10);

        // 4. comprobar si el correo existe
        const correoUsuarioNuevo = body.correo;
        

        // 5. guardo usuario en base de datos
        //....Logica para agregar a la base de datos....
        // const nuevoUsuario = 

        return NextResponse.json({
            user: {
                // datos del nuevo usuario creado
                // id: nuevoUsuario.id,
                // nombre: nuevoUsuario.nombre,
                // correo: nuevoUsuario.correo
            },
            message: "Usuario creado correctamente."
        }, { status: 201 })

    } catch (error) {
        console.error("Sucedio un error al intentar crear usuario", error)
        return NextResponse.json({ error: "Sucedio un error al intentar crear usuario" }, { status: 500 })
    }
}