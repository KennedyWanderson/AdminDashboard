import AvatarUsuario from "./UserAvatar";
import { IconeSearch, IconeSino } from "./icons";

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
            <div className={`flex flex-grow justify-end items-center gap-8`}>
                <div className="flex gap-4">

                    {ICone}

                    <input
                        type={'text'}

                        className={`
                    px-4 py-3 rounded-lg bg-gray-200
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none
                `}
                    />
                </div>
                {IconeSino}
                <AvatarUsuario />
            </div>
        </div>
    )
}