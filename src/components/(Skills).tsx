import SkillStyle from './../styles/components-style/skills.module.css';

function Skills() {
	return (
		<div className={SkillStyle.wrapper}>
			<h2>My skills:</h2>

			<div className={`${SkillStyle.skills} ${SkillStyle.round}`}>
				<ul>
					<li>SASS, Bootstrap</li>
					<li>Angular Material</li>
					<li>Tailwind</li>
					<li>Typescript</li>
				</ul>
				<ul>
					<li>Javascript / ECMA6+</li>
					<li>GIT</li>
					<li>Angular (Preferred)</li>
					<li>NextJS</li>
				</ul>
			</div>
		</div>
	);
}

export default Skills;
