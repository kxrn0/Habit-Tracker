import { useEffect, useState } from "react";

export default function Clock() {
    const [date, setDate] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className="clock">
            <p className="hours">{`${String(date.getHours()).padStart(
                2,
                "0"
            )}:${String(date.getMinutes()).padStart(2, "0")}:${String(
                date.getSeconds()
            ).padStart(2, "0")}`}</p>
            <p className="clock-date">{date.toDateString()}</p>
        </div>
    );
}
