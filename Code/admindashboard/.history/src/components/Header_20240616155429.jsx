
import { IconeAtencao } from './icons'



export default function Header({titulo, subtitulo}) {


    return (
        <div className={`flex`}>
            <Titulo titulo={titulo} subtitulo={subtitulo} />
            <div className={`flex flex-grow justify-end items-center`}>
                <IconeAtencao className="ml-3" />
            </div>
        </div>
    )
}