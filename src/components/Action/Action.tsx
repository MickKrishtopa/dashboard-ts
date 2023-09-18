import "./Action.css";

type ActionProps = {
    title: string;
    cur: number;
    prev: number;
    interval: string;
};

export default function Action({ title, cur, prev, interval }: ActionProps) {
    const actionType = title.toLocaleLowerCase().replace(/ /g, "-");

    return (
        <div className={`action action_type_${actionType}`}>
            <div className="action__content">
                <div className="action__title-area">
                    <h2 className="content__title">{title}</h2>
                    <span>...</span>
                </div>
                <p className="action__time-cur">{`${cur} hrs`}</p>
                <p className="action__time-prev">{`Last ${interval} - ${prev} hrs`}</p>
            </div>
        </div>
    );
}
