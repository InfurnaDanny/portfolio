import Image from 'next/image';

import bgWallpaper from './../../assets/4kwallpaper.jpg';
import HeaderStyle from './../../styles/components-style/core/header.module.css';

function Header() {
	return (
		<header className={HeaderStyle.header}>
			<nav>
				<div>
					<p>Front-end Developer</p>
				</div>

				<div>
					<h1>Danny's Portfolio</h1>
				</div>

				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/francesco-danny-infurna-204b4b244/"
							title="Linkedin"
						>
							<i className={`${HeaderStyle.icon} fa-brands fa-linkedin`}></i>
						</a>
					</li>
					<li>
						<a href="https://github.com/InfurnaDanny" title="Github">
							<i className={`${HeaderStyle.icon} fa-brands fa-square-github`}></i>
						</a>
					</li>
					<li>
						<a href="mailto:f.danny95@gmail.com" title="gmail">
							<i className={`${HeaderStyle.icon} fa-solid fa-envelope`}></i>
						</a>
					</li>
				</ul>
			</nav>

			<Image src={bgWallpaper} alt="wallpaper" className={HeaderStyle.background} />
		</header>
	);
}

export default Header;
