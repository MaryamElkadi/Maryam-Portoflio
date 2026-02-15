import { SectionTitle } from '../components/section-title.component';
import { colors } from '../constants/colors';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Computer & Math Teacher',
				place: '@Nasr Language School',
				timePeriod: '2024 - 2025',
				description: (
					<ul>
						<li>
							Trained students in ICT fundamentals and programming basics.
						</li>
						<li>
							Designed interactive lesson plans covering Python and algorithms.
						</li>
						<li>Improved students’ analytical skills by 40%.</li>
					</ul>
				),
			},
			{
				title: 'Public Relations Specialist',
				place: '@KHM Advertising',
				timePeriod: '2021 - 2022',
				description: (
					<ul>
						<li>Negotiated 50+ supplier agreements.</li>
						<li>Improved communication strategies and client satisfaction.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certifications',
		items: [
			{
				title: 'Frontend React Diploma',
				place: 'Route',
				timePeriod: '',
				description:
					'Specialized in modern React architecture and best practices.',
			},
			{
				title: 'CCNA | CCNP | MCSA | Cloud',
				place: 'Black Horse',
				timePeriod: '',
				description: '',
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Computer Science & Artificial Intelligence',
				place: 'Cairo University',
				timePeriod: 'Graduated July 2024',
				description: 'Graduation Project Grade: Excellent',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
			style={{ backgroundColor: colors.dark, color: colors.light }}
		>
			<div>
				<SectionTitle
					title='About'
					subTitle={<span style={{ color: '#7C6CFF' }}>ME</span>}
				/>
			</div>

			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px', color: colors.accent }}>
						👋 Hey, I'm Maryam Khamis, a Frontend Developer.
					</p>
					<p>
						I specialize in{' '}
						<strong style={{ color: colors.primary }}>React.js</strong> and{' '}
						<strong style={{ color: colors.secondary }}>Next.js</strong>,
						building performant and scalable web applications.
					</p>
					<p>
						Passionate about design systems, UI/UX quality, and mentoring
						developers. I love turning ideas into beautiful digital experiences.
					</p>
				</div>

				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1 style={{ color: colors.primary }}>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p
											className='designation'
											style={{ color: colors.secondary }}
										>
											{title}
										</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
