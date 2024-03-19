import Image from 'next/image';

import ProjectStyle from './../styles/components-style/projects.module.css';
import { AllProjects } from '@/utils/projects';

function Projects() {
	return (
		<section className={ProjectStyle.allproject}>
			<div className={ProjectStyle.wrapper}>
				<h2>My Actual Projects:</h2>

				<div
					className={`${ProjectStyle.round} ${ProjectStyle.animation} ${ProjectStyle.projects}`}
				>
					{AllProjects.map((project, index) => (
						<div className={ProjectStyle.project} key={index}>
							<a href={project.url} target="blank">
								<Image src={project.src} alt={project.title} title={project.title} />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
