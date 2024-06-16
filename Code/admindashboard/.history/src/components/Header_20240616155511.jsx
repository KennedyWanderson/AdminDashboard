
import { IconeAtencao } from './icons'



export default function Header({ titulo, subtitulo }) {


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
                <IconeAtencao className="ml-3" />
            </div>
        </div>
    )
}