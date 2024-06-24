import AvatarUsuario from "./UserAvatar";
import { IconeAcademic, IconeSearch, IconeSino } from "./icons";

export default function Header({ titulo, subtitulo }) {


    return (
        <div className={`flex`}>
            <div>
                <h1 className={`
                font-black text-3xl
                text-gray-900 dark:text-gray-100
            `}>
                    {titulo}
                </h1>
                <h2 className={`
                font-light text-sm
                dark:text-gray-300
            `}>
                    {subtitulo}
                </h2>
            </div>
            <header className="flex flex-grow justify-center text-white">
                <nav className=" justify-center" aria-label="Global">

                    <div className="hidden lg:flex lg:gap-x-12">

                        <a href="#" className="order-first text-xl font-bold flex items-center gap-10 italic tracking-tight text-white sm:text-3xl">NETLinks {IconeAcademic}</a>
                    </div>


                </nav>

            </header>
            <div>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">Search </span>
                    </div>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="w-full rounded-2xl border-6 border-indigo-600 focus:border-indigo-700 py-2 px-6"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center bg pr-3">
                        {IconeSearch}
                    </div>
                </div>
            </div>

            <div className={`flex flex-grow justify-end items-center gap-8`}>

                {IconeSino}
                <AvatarUsuario />
            </div>
        </div>
    )
}