import "./Footer.css";

type HeaderProps = {
    name: string;
    link: string;
};

export default function Footer({ name, link }: HeaderProps) {
    return (
        <header className="footer">
            <h3 className="footer__title">© {name}</h3>
            <a href={link} target="blank" className="footer__link">
                Github
            </a>
        </header>
    );
}
