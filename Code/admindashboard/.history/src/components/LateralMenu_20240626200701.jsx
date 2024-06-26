"use client";

import MenuItem from "./ItemMenu";
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "./icons";

export default function LateralMenu({ setActiveComponent }) {
    return (
        <aside className={`
            flex flex-col items-center
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center font-bold italic text-2xl
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-40
            `}>
                N L
            </div>
            <div>
            <h4>DASHBOARD</h4>
            </div>
            
            <ul className="flex-grow">
                
                <MenuItem 
                    texto="Início" 
                    icone={IconeCasa} 
                    onClick={() => setActiveComponent('HomePage')} 
                />
                <MenuItem 
                    texto="Ajustes" 
                    icone={IconeAjustes} 
                    onClick={() => setActiveComponent('Ajustes')}
                />
                <MenuItem 
                    texto="Notificações" 
                    icone={IconeSino} 
                    onClick={() => setActiveComponent('Notificacoes')}
                />
            </ul>
            <ul>
                <MenuItem
                    texto="Sair" 
                    icone={IconeSair} 
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    );
}
