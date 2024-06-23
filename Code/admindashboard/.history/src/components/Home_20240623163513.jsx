import { IconeEye, IconeLike } from "./icons";

export default function HomePage() {
    return (
        <div className="py-24 sm:py-32 bg-gray-800">
            <div className="mx-auto max-w-full px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                    <div className="mx-auto flex items-center max-w-xs flex-col w-full border-2 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Article Views</dt>
                        <dd className="order-first flex items-center gap-10 text-3xl font-semibold tracking-tight text-white sm:text-5xl">60.5k {IconeEye}</dd>
                    </div>
                    <div className="mx-auto flex items-center max-w-xs flex-col w-full border-2 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Likes</dt>
                        <dd className="order-first text-3xl flex items-center gap-10 font-semibold tracking-tight text-white sm:text-5xl">150 {IconeLike}</dd>
                    </div>
                    <div className="mx-auto flex items-center max-w-xs flex-col w-full border-2 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Comments</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">320 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
</dd>
                    </div>
                    <div className="mx-auto flex items-center max-w-xs flex-col w-full border-2 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Published</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">70</dd>
                    </div>
                </dl>

                {/* <table className="table-auto w-full mt-8 text-white">
                    <thead>
                        <tr className="">
                            <th className="px-4 py-2 border">Song</th>
                            <th className="px-4 py-2 border">Artist</th>
                            <th className="px-4 py-2 border">Year</th>
                        </tr>
                    </thead>
                    <tbody>
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
                </table> */}
            </div>
        </div>
    )
}
