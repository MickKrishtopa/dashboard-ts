import { useEffect } from "react";

import { useAppDispatch } from "../../hooks";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";

import { fetchData } from "../../store/activitySlice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <>
            <Header
                title="Time tracking dashboard"
                link="https://github.com/MickKrishtopa/dashboard"
            />
            <main className="main">
                <Dashboard />
            </main>
            <Footer
                name="Mikhail Krishtopa"
                link="https://github.com/MickKrishtopa"
            />
        </>
    );
}

export default App;
