import { useCallback, useEffect, useMemo } from "react";
import "./App.css";
import { Header } from "./components/moleculs";

export default function App() {
    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    const close = useCallback(() => {
        Telegram.WebApp.close();
    }, []);

    const { initDataUnsafe } = Telegram.WebApp;
    const username = useMemo(
        () =>
            `${initDataUnsafe.user?.first_name} + ${initDataUnsafe.user?.last_name}`,
        []
    );

    return (
        <div className="App">
            <Header onClickButton={close} username={username} />
        </div>
    );
}
