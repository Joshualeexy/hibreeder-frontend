// {october 21st, i just noticed a future scaling issue please fix component from requuesting every second .. server might fry}

import { useState } from "react";
import Heading from "@/Components/Heading";

const Greeting = () => {
    const [date, setDate] = useState("");

    const formatDate = () => {
        return new Intl.DateTimeFormat(undefined, {
            weekday: 'short',  // Fri
            month: 'short',    // Nov
            day: '2-digit',    // 15
            year: 'numeric',   // 2024
            hour: '2-digit',   // 10
            minute: '2-digit', // 12
            second: '2-digit', // 37
            hour12: true       // AM/PM
        }).format(new Date());
    };

    setInterval(() => {
        setDate(formatDate)
    }, 1000);





    return (
        <div className="flex justify-between flex-col sm:flex-row items-center shadow-md p-4 text-gray-500">
            <Heading title={user.name} className="sm:!text-lg" />
            <Heading title={date} className="sm:!text-lg hidden sm:flex" />
            <span className="font-bold text-sm sm:text-lg sm:hidden font-mono tracking-widest">
                {date}
            </span>
        </div>
    );
};

export default Greeting;
