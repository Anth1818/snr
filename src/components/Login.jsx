import { TextField } from "@mui/material";

export default function Login(){
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="min-w-fit h-96 border-8 p-8">
                <div className="">
                    <h2>Iniciar sesion</h2>
                </div>
                <form className="flex flex-col">
                <TextField id="campo1" label="Usuario" variant="standard" />
                <TextField id="campo2" label="Contraseña" variant="standard" />
                    <button>Ingresar</button>
                </form>
            </div>
        </div>
    )
}