import Titulo from './Titulo'
import BotaoAlternarTema from './BotaoAlternarTema'
import useAppData from '../../data/hook/useAppData'
import AvatarUsuario from './AvatarUsuario'



export default function Cabecalho({titulo, subtitulo}) {

    return (
        <div className={`flex`}>
            <        <div>
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
        </div> titulo={props.titulo} subtitulo={props.subtitulo}
            <div className={`flex flex-grow justify-end items-center`}>
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    )
}