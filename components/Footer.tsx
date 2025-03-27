import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const socialLinks = [
    { href: "https://github.com/YD-YC", Icon: AiFillGithub, label: "GitHub",  },
    { href: "https://x.com/_Yash2610", Icon: AiOutlineTwitter, label: "X (Twitter)" },
    { href: "https://www.instagram.com/_yash.2610/", Icon: AiFillInstagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/yash-chakerverti/" , Icon: AiFillLinkedin, label: "LinkedIn" },
];

export const Footer = () => {
    return (
        <footer className="py-8 max-w-[1200px] mx-auto px-4">
            <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="text-gray-200">
                    © 2024. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socialLinks.map(({ href, Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-gray-400 transition-colors"
                        >
                            <Icon size={30} />
                        </a>
                    ))}
                </ul>
            </div>
        </footer>
    );
};
