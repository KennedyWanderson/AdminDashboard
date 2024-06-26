import { IconeCheck, IconeComment, IconeEye, IconeLike } from "./icons";

export default function HomePage() {
    return (
        <div className=" py-24 sm:py-32 bg-gray-800">
            <div className="mb-16 mx-auto max-w-full px-6 lg:px-8 ">
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
            <div className="border border-indigo-800 p-6 rounded-2xl shadow-2xl shadow-indigo-500">
                    <table className="table-auto w-full text-white">
                        <thead>
                            <tr className="">
                                <th className="px-4 py-2 border border-indigo-800">Song</th>
                                <th className="px-4 py-2 border border-indigo-800">Artist</th>
                                <th className="px-4 py-2 border border-indigo-800">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-2 border border-indigo-800">Malcolm Lockyer</td>
                                <td className="px-4 py-2 border border-indigo-800">1961</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">Witchy Woman</td>
                                <td className="px-4 py-2 border border-indigo-800">The Eagles</td>
                                <td className="px-4 py-2 border border-indigo-800">1972</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">Shining Star</td>
                                <td className="px-4 py-2 border border-indigo-800">Earth, Wind, and Fire</td>
                                <td className="px-4 py-2 border border-indigo-800">1975</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-2 border border-indigo-800">Malcolm Lockyer</td>
                                <td className="px-4 py-2 border border-indigo-800">1961</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">Witchy Woman</td>
                                <td className="px-4 py-2 border border-indigo-800">The Eagles</td>
                                <td className="px-4 py-2 border border-indigo-800">1972</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">Shining Star</td>
                                <td className="px-4 py-2 border border-indigo-800">Earth, Wind, and Fire</td>
                                <td className="px-4 py-2 border border-indigo-800">1975</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-2 border border-indigo-800">Malcolm Lockyer</td>
                                <td className="px-4 py-2 border border-indigo-800">1961</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">Witchy Woman</td>
                                <td className="px-4 py-2 border border-indigo-800">The Eagles</td>
                                <td className="px-4 py-2 border border-indigo-800">1972</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">Shining Star</td>
                                <td className="px-4 py-2 border border-indigo-800">Earth, Wind, and Fire</td>
                                <td className="px-4 py-2 border border-indigo-800">1975</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-2 border border-indigo-800">Malcolm Lockyer</td>
                                <td className="px-4 py-2 border border-indigo-800">1961</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">Witchy Woman</td>
                                <td className="px-4 py-2 border border-indigo-800">The Eagles</td>
                                <td className="px-4 py-2 border border-indigo-800">1972</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border border-indigo-800">Shining Star</td>
                                <td className="px-4 py-2 border border-indigo-800">Earth, Wind, and Fire</td>
                                <td className="px-4 py-2 border border-indigo-800">1975</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-2 border">Malcolm Lockyer</td>
                                <td className="px-4 py-2 border">1961</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border">Witchy Woman</td>
                                <td className="px-4 py-2 border">The Eagles</td>
                                <td className="px-4 py-2 border">1972</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 border">Shining Star</td>
                                <td className="px-4 py-2 border">Earth, Wind, and Fire</td>
                                <td className="px-4 py-2 border">1975</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
        </div>
    )
}
