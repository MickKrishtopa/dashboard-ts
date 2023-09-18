import "./Header.css";

type HeaderProps = {
    title: string;
    link: string;
};

export default function Header({ title, link }: HeaderProps) {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <a href={link} target="blank" className="header__link">
                Repo
            </a>
        </header>
    );
}
