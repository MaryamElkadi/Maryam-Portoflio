import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiTailwindcss } from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';
import { colors } from '../constants/colors';

const techs = [
	{
		heading: 'Core Stack',
		items: [
			{
				title: 'Next.js',
				icon: <SiNextdotjs color={colors.light} />,
				color: colors.primary,
			},
			{
				title: 'React.js',
				icon: <FaReact color={colors.accent} />,
				color: colors.accent,
			},
			{
				title: 'Node.js',
				icon: <FaNodeJs color={colors.secondary} />,
				color: colors.secondary,
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color={colors.primary} />,
				color: colors.primary,
			},
			{
				title: 'Redux',
				icon: <SiRedux color={colors.secondary} />,
				color: colors.secondary,
			},
		],
	},
	{
		heading: 'UI & Styling',
		items: [
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color={colors.accent} />,
				color: colors.accent,
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color={colors.primary} />,
				color: colors.primary,
			},
		],
	},
	{
		heading: 'Databases',
		items: [
			{
				title: 'MongoDB',
				icon: <DiMongodb color={colors.secondary} />,
				color: colors.secondary,
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
			style={{ backgroundColor: colors.dark, color: colors.light }}
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p style={{ color: colors.primary }}>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>

			<div>
				<SectionTitle
					title='Tech'
					subTitle={<span style={{ color: '#7C6CFF' }}>STACK</span>}
				/>
			</div>
		</section>
	);
};
