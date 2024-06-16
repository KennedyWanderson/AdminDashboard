
import { IconeAtencao } from './icons'



export default function Header({titulo, subtitulo}) {


    return (
        <div className={`flex`}>
            <Titulo titulo={titulo} subtitulo={psubtitulo} />
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
                <IconeAtencao className="ml-3" />
            </div>
        </div>
    )
}