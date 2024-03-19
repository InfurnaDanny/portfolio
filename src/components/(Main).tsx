import Image from 'next/image';

import Samurai from './../assets/samurai.png';
import Elmet from './../assets/samurai elmet.svg';
import MainStyle from './../styles/components-style/main-ctx.module.css';

function MainCtx() {
	return (
		<main className={MainStyle.main}>
            <Image src={Samurai} alt='samurai' className='hidden md:flex'/>

			<div className={`${MainStyle.round} ${MainStyle.animation}`}>
				<h2>Infurna Danny</h2>
				<p>
					Ciao! Sono Danny, un Jr. Front-end Developer. <br />
					27 anni, appassionato di sviluppo, anime e videogiochi!
				</p>
			</div>

            <Image src={Elmet} alt='Elmet' className={MainStyle.elmet}/>
		</main>
	);
}

export default MainCtx;