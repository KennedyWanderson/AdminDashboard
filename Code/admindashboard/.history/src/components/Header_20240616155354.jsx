
import { IconeAtencao } from './icons'



export default function Header() {


    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
                <IconeAtencao className="ml-3" />
            </div>
        </div>
    )
}