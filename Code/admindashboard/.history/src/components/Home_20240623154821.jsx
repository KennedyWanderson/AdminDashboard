

export default function HomePage() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col w-full border-2 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Transactions every 24 hours</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">44 million</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col w-full border-2 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">Assets under holding</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">$119 trillion</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col w-full border-2 p-10 border-indigo-800 gap-y-4">
                        <dt className="text-base leading-7 text-white">New users annually</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">46,000</dd>
                    </div>
                </dl>

                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}