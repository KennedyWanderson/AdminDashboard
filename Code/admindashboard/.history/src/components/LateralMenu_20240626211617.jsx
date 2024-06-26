"use client";

import { useState } from "react";
import MenuItem from "./ItemMenu";
import { IconeAcademic, IconeAjustes, IconeAtencao, IconeCasa, IconeCheck, IconeSair, IconeSearch, IconeSino } from "./icons";

export default function LateralMenu({ setActiveComponent }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative">
            {menuOpen ? (
                <aside className={`
                    flex flex-col items-center hidden flex
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
                    <div className="flex items-center justify-center w-full h-20">
                        <h4 className="font-bold italic border-y-4 text-xl">DASHBOARD</h4>
                    </div>

                    <ul className="flex-grow w-full">
                        <MenuItem
                            texto="Articles"
                            icone={IconeCasa}
                            onClick={() => setActiveComponent('Articles')}
                        />
                        <MenuItem
                            texto="Report"
                            icone={IconeAcademic}
                            onClick={() => setActiveComponent('Report')}
                        />
                        <MenuItem
                            texto="Institution"
                            icone={IconeSearch}
                            onClick={() => setActiveComponent('Institution')}
                        />
                        <MenuItem
                            texto="Profile"
                            icone={IconeCheck}
                            onClick={() => setActiveComponent('Profile')}
                        />
                        <MenuItem
                            texto="Settings"
                            icone={IconeAjustes}
                            onClick={() => setActiveComponent('Settings')}
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
            ) : (
                <button
                    className="p-4 bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200 rounded-full"
                    onClick={() => setMenuOpen(true)}
                >
                    {IconeSino}
                </button>
            )}
            {menuOpen && (
                <button
                    className="absolute top-4 right-4 p-2 bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200 rounded-full"
                    onClick={() => setMenuOpen(false)}
                >
                    ✖
                </button>
            )}
        </div>
    );
}
