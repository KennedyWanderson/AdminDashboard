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
            <header className="bg-white">
  <nav className={`
    mx-auto flex max-w-7xl items-center justify-between
    p-6 lg:px-8
  `} aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      <div className="relative">
        <button type="button" className={`
          flex items-center gap-x-1 text-sm font-semibold
          leading-6 text-gray-900
        `} aria-expanded="false">
          Product
          <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        <div className={`
          absolute -left-8 top-full z-10 mt-3 w-screen
          max-w-md overflow-hidden rounded-3xl bg-white shadow-lg
          ring-1 ring-gray-900/5
        `}>
          <div className="p-4">
            <div className={`
              group relative flex items-center gap-x-6
              rounded-lg p-4 text-sm leading-6 hover:bg-gray-50
            `}>
              <div className={`
                flex h-11 w-11 flex-none items-center justify-center
                rounded-lg bg-gray-50 group-hover:bg-white
              `}>
                <svg className={`
                  h-6 w-6 text-gray-600 group-hover:text-indigo-600
                `} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Analytics
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Get a better understanding of your traffic</p>
              </div>
            </div>
            <div className={`
              group relative flex items-center gap-x-6
              rounded-lg p-4 text-sm leading-6 hover:bg-gray-50
            `}>
              <div className={`
                flex h-11 w-11 flex-none items-center justify-center
                rounded-lg bg-gray-50 group-hover:bg-white
              `}>
                <svg className={`
                  h-6 w-6 text-gray-600 group-hover:text-indigo-600
                `} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Engagement
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Speak directly to your customers</p>
              </div>
            </div>
            <div className={`
              group relative flex items-center gap-x-6
              rounded-lg p-4 text-sm leading-6 hover:bg-gray-50
            `}>
              <div className={`
                flex h-11 w-11 flex-none items-center justify-center
                rounded-lg bg-gray-50 group-hover:bg-white
              `}>
                <svg className={`
                  h-6 w-6 text-gray-600 group-hover:text-indigo-600
                `} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Security
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Your customers’ data will be safe and secure</p>
              </div>
            </div>
            <div className={`
              group relative flex items-center gap-x-6
              rounded-lg p-4 text-sm leading-6 hover:bg-gray-50
            `}>
              <div className={`
                flex h-11 w-11 flex-none items-center justify-center
                rounded-lg bg-gray-50 group-hover:bg-white
              `}>
                <svg className={`
                  h-6 w-6 text-gray-600 group-hover:text-indigo-600
                `} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18a2.25 2.25 0 002.25 2.25zm10.5-10.5h2.25A2.25 2.25 0 0021 7.5v-2.25a2.25 2.25 0 00-2.25-2.25h-2.25a2.25 2.25 0 00-2.25 2.25V7.5a2.25 2.25 0 002.25 2.25zm0 9.75h2.25A2.25 2.25 0 0021 17.25v-2.25a2.25 2.25 0 00-2.25-2.25h-2.25a2.25 2.25 0 00-2.25 2.25V18a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Integrations
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Connect with third-party tools</p>
              </div>
            </div>
            <div className={`
              group relative flex items-center gap-x-6
              rounded-lg p-4 text-sm leading-6 hover:bg-gray-50
            `}>
              <div className={`
                flex h-11 w-11 flex-none items-center justify-center
                rounded-lg bg-gray-50 group-hover:bg-white
              `}>
                <svg className={`
                  h-6 w-6 text-gray-600 group-hover:text-indigo-600
                `} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25l13.5 13.5m-13.5 0l13.5-13.5" />
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Automations
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Build strategic funnels that will drive your customers</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <a href="#" className={`
              flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold
              leading-6 text-gray-900 hover:bg-gray-100
            `}>
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9.243 2.343a1.2 1.2 0 011.514 0l5.4 4.2A1.2 1.2 0 0116.8 9H3.2a1.2 1.2 0 01-.757-2.157l5.4-4.2zM4.373 11.25a.75.75 0 00-.75.75v4a.75.75 0 00.75.75h11.254a.75.75 0 00.75-.75v-4a.75.75 0 00-.75-.75H4.373z" clipRule="evenodd" />
              </svg>
              View all products
            </a>
            <a href="#" className={`
              flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold
              leading-6 text-gray-900 hover:bg-gray-100
            `}>
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.25 2.5A1.75 1.75 0 002.5 4.25v11.5A1.75 1.75 0 004.25 17.5h11.5a1.75 1.75 0 001.75-1.75V4.25A1.75 1.75 0 0015.75 2.5H4.25zM6 6.5a.75.75 0 00-.75.75V10a.75.75 0 001.5 0V7.25A.75.75 0 006 6.5zm3.25 0a.75.75 0 00-.75.75V10a.75.75 0 001.5 0V7.25a.75.75 0 00-.75-.75zm3.25 0a.75.75 0 00-.75.75V10a.75.75 0 001.5 0V7.25a.75.75 0 00-.75-.75zM6 11.5a.75.75 0 00-.75.75v2.25a.75.75 0 001.5 0V12.25a.75.75 0 00-.75-.75zm3.25 0a.75.75 0 00-.75.75v2.25a.75.75 0 001.5 0V12.25a.75.75 0 00-.75-.75zm3.25 0a.75.75 0 00-.75.75v2.25a.75.75 0 001.5 0V12.25a.75.75 0 00-.75-.75z" clipRule="evenodd" />
              </svg>
              View documentation
            </a>
          </div>
        </div>
      </div>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div className="lg:hidden" role="dialog" aria-modal="true">
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <a href="#" className={`
              -mx-3 block rounded-lg py-2 px-3 text-base font-semibold
              leading-7 text-gray-900 hover:bg-gray-400/10
            `}>Product</a>
            <a href="#" className={`
              -mx-3 block rounded-lg py-2 px-3 text-base font-semibold
              leading-7 text-gray-900 hover:bg-gray-400/10
            `}>Features</a>
            <a href="#" className={`
              -mx-3 block rounded-lg py-2 px-3 text-base font-semibold
              leading-7 text-gray-900 hover:bg-gray-400/10
            `}>Marketplace</a>
            <a href="#" className={`
              -mx-3 block rounded-lg py-2 px-3 text-base font-semibold
              leading-7 text-gray-900 hover:bg-gray-400/10
            `}>Company</a>
          </div>
          <div className="py-6">
            <a href="#" className={`
              -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold
              leading-6 text-gray-900 hover:bg-gray-400/10
            `}>Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

            <div className={`flex flex-grow justify-end items-center gap-8`}>
                
                {IconeSino}
                <AvatarUsuario />
            </div>
        </div>
    )
}