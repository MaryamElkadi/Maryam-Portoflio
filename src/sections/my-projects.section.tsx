import Adline from '../assets/adline.jfif';
import BookMarker from '../assets/bookmarker.jfif';
import Clinic from '../assets/clinic.jfif';
import Flight from '../assets/flightbooking.jfif';
import Khat from '../assets/khat-alilan.jfif';
import Weather from '../assets/weather.jfif';
import Yummi from '../assets/yummi.jfif';
import { SectionTitle } from '../components/section-title.component';
import { colors } from '../constants/colors';
const timeline = [
	{
		title: 'Featured Project',
		items: [
			{
				title: 'Khat Alilan Portfolio',
				place: 'Next.js | TypeScript | Three.js | Framer Motion',
				timePeriod: '2024',
				image: Khat,
				link: 'https://khat-alilan.vercel.app/',
				description: (
					<ul>
						<li>
							Engineered a full-stack portfolio using Next.js and TypeScript.
						</li>
						<li>Integrated immersive 3D graphics using Three.js.</li>
						<li>Implemented serverless API routes and deployed on Vercel.</li>
					</ul>
				),
			},
			{
				title: 'Adline Advertising',
				place: 'Next.js | TypeScript | Three.js | Framer Motion',
				timePeriod: '2026',
				image: Adline,
				link: 'https://www.adlineksa.com/',
				description: (
					<ul>
						<li>
							Engineered a full-stack portfolio using Next.js and TypeScript.
						</li>
						<li>Integrated immersive 3D graphics using Three.js.</li>
						<li>Implemented serverless API routes and deployed on Vercel.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Full Stack Projects',
		items: [
			{
				title: 'Flight Booking System',
				place: 'HTML | CSS | JavaScript | PHP | SQL',
				timePeriod: '',
				image: Flight,
				link: 'https://github.com/MaryamElkadi/Flight-booking',
				description: (
					<ul>
						<li>Developed a secure web-based flight reservation system.</li>
						<li>
							Built backend logic using PHP with SQL database integration.
						</li>
					</ul>
				),
			},
			{
				title: "Doctor's Appointment Platform",
				place: 'React | Go | MongoDB',
				timePeriod: '',
				image: Clinic,
				link: 'https://github.com/amrmoh-02/Clinic-Reservation-System',
				description: (
					<ul>
						<li>Built a platform to streamline doctor appointments.</li>
						<li>Managed patient data with MongoDB and Go backend.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Frontend Projects',
		items: [
			{
				title: 'Book Marker Website',
				place: 'HTML | CSS | JavaScript | Bootstrap',
				timePeriod: '',
				image: BookMarker,
				link: 'https://maryamelkadi.github.io/bookmarker/',
				description: (
					<ul>
						<li>Validates website names using Regex conditions.</li>
						<li>Applies rule-based input validation system.</li>
					</ul>
				),
			},
			{
				title: 'Weather Website',
				place: 'HTML | CSS | JavaScript | Bootstrap',
				timePeriod: '',
				image: Weather,
				link: 'https://maryamelkadi.github.io/Weather-App/',
				description: (
					<ul>
						<li>Displays weather forecast for today and upcoming days.</li>
						<li>Fetches real-time weather data based on country.</li>
					</ul>
				),
			},
			{
				title: 'Yummi Website',
				place: 'HTML | CSS | JavaScript | Bootstrap',
				timePeriod: '',
				image: Yummi,
				link: 'https://maryamelkadi.github.io/yummi/',
				description: (
					<ul>
						<li>
							Displays meals from API based on category, area, and ingredients.
						</li>
						<li>Shows detailed information for each meal.</li>
					</ul>
				),
			},
		],
	},
];

export const MyProjects = () => {
	return (
		<section
			className='about-me container'
			id='my-projects'
			style={{ backgroundColor: colors.dark, color: colors.light }}
		>
			<div style={{ transform: 'scale(0.8)', transformOrigin: 'left' }}>
				<SectionTitle
					title='Projects'
					subTitle={<span style={{ color: '#7C6CFF' }}>My</span>}
				/>
			</div>

			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px', color: colors.accent }}>
						🚀 Here are selected projects showcasing my frontend and full-stack
						experience.
					</p>
					<p>
						I build scalable, performant applications using{' '}
						<strong style={{ color: colors.primary }}>React</strong>,{' '}
						<strong style={{ color: colors.secondary }}>Next.js</strong>, and
						modern web technologies.
					</p>
				</div>

				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1 style={{ color: colors.primary }}>{title}</h1>

							{items.map(
								(
									{ title, place, timePeriod, description, image, link },
									idx,
								) => (
									<div
										className='timeline-list'
										key={idx}
									>
										<a
											href={link}
											target='_blank'
											rel='noopener noreferrer'
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											<div
												className='timeline-item'
												style={{
													display: 'flex',
													flexDirection: 'column',
													gap: '15px',
													cursor: 'pointer',
													maxWidth: '600px',
												}}
											>
												{/* Title */}
												<p
													className='designation'
													style={{
														color: colors.secondary,
														fontSize: '20px',
														fontWeight: '600',
													}}
												>
													{title}
												</p>
												{/* Tech Stack */}
												<p
													className='place'
													style={{ opacity: 0.8 }}
												>
													{place} {timePeriod && `| ${timePeriod}`}
												</p>
												{/* Image */}
												<img
													src={image}
													alt={title}
													style={{
														width: '100%',
														height: '220px',
														objectFit: 'cover',
														borderRadius: '12px',
														border: `2px solid ${colors.primary}`,
														boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
													}}
												/>

												{/* Description */}
												<div className='timeline-description'>
													{description}
												</div>
											</div>
										</a>
									</div>
								),
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
