
import AvatarUsuario from '.'



export default function Cabecalho({ titulo, subtitulo }) {

    return (
        <div className={`flex`}>
                   <div>
                <h1 className={`
                font-black text-3xl
                text-gray-900 dark:text-gray-100
            `}>
                    {props.titulo}
                </h1>
                <h2 className={`
                font-light text-sm
                dark:text-gray-300
            `}>
                    {props.subtitulo}
                </h2>
            </div>
            <div className={`flex flex-grow justify-end items-center`}>
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    )
}