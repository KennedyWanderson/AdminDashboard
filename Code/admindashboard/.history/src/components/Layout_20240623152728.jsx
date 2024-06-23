"use client";

import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import LateralMenu from "./LateralMenu";
import HomePage from "./Home";


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
                <Content>
                    {renderActiveComponent()}
                </Content>
            </div>
        </div>
    );
}
