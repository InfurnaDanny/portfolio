import MainCtx from '@/components/(Main)';
import Projects from '@/components/(Projects)';
import Doors from '@/components/(Doors)';
import Header from '@/components/core/(Header)';
import Footer from '@/components/core/(Footer)';

export default function Home() {
	return (
		<>
			<Header />
			<MainCtx />
			<section className="section-dark"></section>
			<Doors />
			<section className="section-dark reverse"></section>
			<Projects />
			<Footer />
		</>
	);
}
