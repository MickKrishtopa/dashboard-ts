import "./Profile.css";

type ProfileProps = {
    name: string;
    image: string;
};

export default function Profile({ name, image }: ProfileProps) {
    return (
        <div className="profile">
            <img src={image} alt={`Photo ${name}`} className="profile__img" />
            <span className="profile__subtitle">Report from</span>
            <h2 className="profile__title">{name}</h2>
        </div>
    );
}
