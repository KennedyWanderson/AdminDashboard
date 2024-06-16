import LateralMenu from "./LateralMenu";


export default function Layout() {

    return (

            <div className={` flex h-screen w-screen`}>
                <LateralMenu />
                <div className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-800
            `}>

                </div>
            </div>
    )
}