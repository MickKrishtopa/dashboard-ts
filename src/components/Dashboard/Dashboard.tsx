import "./Dashboard.css";
import SideMenu from "../SideMenu/SideMedu";
import Profile from "../Profile/Profile";
import Action from "../Action/Action";
import avatar from "../../images/image-jeremy.png";

import { useAppSelector } from "../../hooks";

export default function Dashboard() {
    const actions = useAppSelector((state) => state.activity.data);
    const interval = useAppSelector((state) => state.activity.interval);

    return (
        <main className="dashboard">
            <SideMenu>
                <Profile name="Mikhail Krishtopa" image={avatar} />
            </SideMenu>
            {actions.map((action) => {
                const intervalData =
                    interval === "week"
                        ? action.timeframes.weekly
                        : interval === "day"
                        ? action.timeframes.daily
                        : action.timeframes.monthly;
                return (
                    <Action
                        key={action.title}
                        title={action.title}
                        cur={intervalData.current}
                        prev={intervalData.previous}
                        interval={interval}
                    />
                );
            })}
        </main>
    );
}
