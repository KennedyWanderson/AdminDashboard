"use client";

import MenuItem from "./ItemMenu";
import { IconeAcademic, IconeAjustes, IconeAtencao, IconeCasa, IconeCheck, IconeSair, IconeSearch, IconeSino } from "./icons";

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
            <div className="flex items-center justify-center w-full h-20 bg-">
                <h4 className="font-bold italic text-xl
                text-gradient-to-r from-indigo-500 to-purple-800
                ">DASHBOARD</h4>
            </div>

            <ul className="flex-grow">

                <MenuItem
                    texto="Articles"
                    icone={IconeCasa}
                    onClick={() => setActiveComponent('HomePage')}
                />
                <MenuItem
                    texto="Report"
                    icone={IconeAcademic}
                    onClick={() => setActiveComponent('Ajustes')}
                />
                <MenuItem
                    texto="Institution"
                    icone={IconeSearch}
                    onClick={() => setActiveComponent('Notificacoes')}
                />
                                <MenuItem
                    texto="Profile"
                    icone={IconeCheck}
                    onClick={() => setActiveComponent('HomePage')}
                />
                <MenuItem
                    texto="Settings"
                    icone={IconeAtencao}
                    onClick={() => setActiveComponent('Ajustes')}
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
