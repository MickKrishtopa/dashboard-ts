import "./SideMenu.css";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { setInterval } from "../../store/activitySlice";

type SideMenuProps = {
    children: React.ReactNode;
};

export default function SideMenu({ children }: SideMenuProps) {
    const dispatch = useAppDispatch();
    const interval = useAppSelector((state) => state.activity.interval);

    const onClick = (e: any) => {
        dispatch(setInterval(e.target.id));
    };

    return (
        <div className="sideMenu">
            {children}
            <ul className="side-menu__interval-list">
                <li
                    id="day"
                    onClick={(e) => onClick(e)}
                    className={`side-menu__interval-item ${
                        interval === "day"
                            ? "side-menu__interval-item__active"
                            : ""
                    }`}
                >
                    Dayli
                </li>
                <li
                    id="week"
                    onClick={(e) => onClick(e)}
                    className={`side-menu__interval-item ${
                        interval === "week"
                            ? "side-menu__interval-item__active"
                            : ""
                    }`}
                >
                    Weekly
                </li>
                <li
                    id="month"
                    onClick={(e) => onClick(e)}
                    className={`side-menu__interval-item ${
                        interval === "month"
                            ? "side-menu__interval-item__active"
                            : ""
                    }`}
                >
                    Monthly
                </li>
            </ul>
        </div>
    );
}
