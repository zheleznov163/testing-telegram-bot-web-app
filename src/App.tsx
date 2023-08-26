import { useCallback, useEffect } from "react";
import "./App.css";

export default function App() {
    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    const close = useCallback(() => {
        Telegram.WebApp.close();
    }, []);

    return (
        <div className="App">
            work
            <button onClick={close}>Закрыть</button>
        </div>
    );
}
