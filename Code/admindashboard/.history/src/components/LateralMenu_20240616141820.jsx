import MenuItem from "./ItemMenu";
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "./icons"




export default function LateralMenu() {


    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                KW
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" icone={IconeCasa}>Teste1</MenuItem>
                <MenuItem url="/ajustes" icone={IconeAjustes}>Teste2</MenuItem>
                <MenuItem url="/notificacoes" icone={IconeSino}
            </ul>
            <ul>
                <MenuItem
                    texto="Sair" icone={IconeSair} 
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}