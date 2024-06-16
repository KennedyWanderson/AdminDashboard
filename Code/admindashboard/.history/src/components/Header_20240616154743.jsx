
import {IconeCasa } from './icons'



export default function Header({ titulo, subtitulo }) {

    return (
        <div className={`flex`}>
                   <div>
                <h1 className={`
                font-black text-3xl
                text-gray-900
            `}>
                    {titulo}
                </h1>
                <h2 className={`
                font-light text-sm
            
            `}>
                    {subtitulo}
                </h2>
            </div>
            <div className={`flex flex-grow justify-end items-center`}>
                <IconeCasa className="ml-3" />
            </div>
        </div>
    )
}