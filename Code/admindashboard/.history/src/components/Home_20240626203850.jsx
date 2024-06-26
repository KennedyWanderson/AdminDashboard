import { IconeCheck, IconeComment, IconeEye, IconeLike } from "./icons";

export default function HomePage() {
    return (
        <div className=" py-24 sm:py-32 bg-gray-800">
            <div className=" mx-auto max-w-full px-6 lg:px-8 ">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                    <div className="mx-auto flex items-center max-w-xs flex-col w-full border-2 rounded-2xl shadow-2xl shadow-indigo-500 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Article Views</dt>
                        <dd className="order-first flex items-center gap-10 text-3xl font-semibold tracking-tight text-white sm:text-5xl">60.5k {IconeEye}</dd>
                    </div>
                    <div className="mx-auto flex items-center max-w-xs flex-col w-full border-2 rounded-2xl shadow-2xl shadow-indigo-500 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Likes</dt>
                        <dd className="order-first text-3xl flex items-center gap-10 font-semibold tracking-tight text-white sm:text-5xl">150 {IconeLike}</dd>
                    </div>
                    <div className="mx-auto flex items-center max-w-xs flex-col w-full border-2 rounded-2xl shadow-2xl shadow-indigo-500 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Comments</dt>
                        <dd className="order-first text-3xl flex items-center gap-10 font-semibold tracking-tight text-white sm:text-5xl">320 {IconeComment}</dd>
                    </div>
                    <div className="mx-auto flex items-center max-w-xs flex-col w-full border-2 rounded-2xl shadow-2xl shadow-indigo-500 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Published</dt>
                        <dd className="order-first text-3xl flex items-center gap-10 font-semibold tracking-tight text-white sm:text-5xl">70 {IconeCheck}</dd>
                    </div>
                </dl>

                


            </div>
        </div>
    )
}
