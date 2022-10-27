import { useEffect } from "react";
import show_loading from "../../utilities/loading_icon";
import "./loading.css";

export default function Loading() {
    useEffect(() => {
        const canvas = document.querySelector(".loading-icon");
        const animeKiller = { id: null };

        show_loading(animeKiller, canvas);

        return () => cancelAnimationFrame(animeKiller.id);
    });

    return <canvas width="200" height="200" className="loading-icon"></canvas>;
}
