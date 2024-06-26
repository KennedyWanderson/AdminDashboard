

export default function HomePage() {
    return (
        <div class=" py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div class="mx-auto flex max-w-xs flex-col border-2 p-10 border-indigo-800 gap-x-4">
                        <dt class="text-base leading-7 text-white">Transactions every 24 hours</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">44 million</dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col border-2 p-10 border-indigo-800 gap-x-4">
                        <dt class="text-base leading-7 text-white">Assets under holding</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">$119 trillion</dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col border-2 p-10 border-indigo-800 gap-y-4">
                        <dt class="text-base leading-7 text-white">New users annually</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">46,000</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}