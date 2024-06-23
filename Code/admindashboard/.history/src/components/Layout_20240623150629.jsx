"use client";

import { useState } from "react";
import Conteudo from "./Content";
import Header from "./Header";
import LateralMenu from "./LateralMenu";
import HomePage from "./HomePage";


export default function Layout() {
    const [activeComponent, setActiveComponent] = useState("HomePage");

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case "HomePage":
                return <HomePage />;

            default:
                return <HomePage />;
        }
    };

    return (
        <div className={`flex h-screen w-screen`}>
            <LateralMenu setActiveComponent={setActiveComponent} />
            <div className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-800
            `}>
                <Header />
                <Conteudo>
                    {renderActiveComponent()}
                </Conteudo>
            </div>
        </div>
    );
}
