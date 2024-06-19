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
            <header className="flex flex-grow justify-center text-white">
                <nav className=" justify-center" aria-label="Global">

                    <div className="hidden lg:flex lg:gap-x-12">

                        <a href="#" className="text-sm font-semibold leading-6 text-white">Features</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Marketplace</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Company</a>
                    </div>
                    <div>
                        <label for="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span class="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00">
                                <div class="absolute inset-y-0 right-0 flex items-center">
                                    <label for="currency" class="sr-only">Currency</label>
                                    <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                        <option>USD</option>
                                        <option>CAD</option>
                                        <option>EUR</option>
                                    </select>
                                </div>
                        </div>
                    </div>

                </nav>

            </header>

            <div className={`flex flex-grow justify-end items-center gap-8`}>

                {IconeSino}
                <AvatarUsuario />
            </div>
        </div>
    )
}