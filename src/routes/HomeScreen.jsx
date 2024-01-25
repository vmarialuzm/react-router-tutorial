import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

export const HomeScreen = () => {

    const { usuario } = useContext( UsuarioContext )

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tecnologia</th>
                    <th scope="col">Email</th>
                    <th scope="col">Redes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{usuario.nombre}</th>
                    <td>{usuario.tecnologia}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.redes}</td>
                </tr>
            </tbody>
        </table>
    )
}
