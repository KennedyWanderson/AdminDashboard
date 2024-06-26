

export default function Layout() {

    return (
            <div className={`${tema} flex h-screen w-screen`}>
                <MenuLateral />
                <div className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-800
            `}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>
            </div>
        </ForcarAutenticacao>
    )
}