import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5'; // added WhatsApp icon

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';
import { colors } from '../constants/colors';

export const InfoSection = () => {
	return (
		<div
			className='hero-section'
			style={{ backgroundColor: colors.dark, color: colors.light }}
		>
			{/* ⭐ Star This Repo Ribbon */}
			<a
				href='https://github.com/MaryamElkadi/khat-alilan'
				target='_blank'
				rel='noopener noreferrer'
				className='github-ribbon'
			>
				<div>⭐ Star this repo</div>
				<span></span>
			</a>

			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>

			<p style={{ color: colors.accent }}>Hi, I am</p>

			<TextHover
				text='MARYAM'
				className='name'
			/>

			<p style={{ color: colors.secondary }}>
				Frontend Developer | Software Engineer
			</p>

			<FloatingButton
				label='Tech'
				className='sec'
				href='/#tech-stack'
			/>

			<div className='blur'></div>

			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/MaryamElkadi'
					color={colors.primary}
					icon={<FaGithub color={colors.light} />}
					aria-label='github'
				/>

				<GlowLink
					href='https://linkedin.com/in/maryam-khamis-1bbb65192'
					color={colors.secondary}
					icon={<FaLinkedinIn color={colors.light} />}
					aria-label='linkedin'
				/>

				{/* 📱 WhatsApp link */}
				<GlowLink
					href='https://wa.me/201557460922'
					color='#25D366' // WhatsApp green
					icon={<IoLogoWhatsapp color={colors.light} />}
					aria-label='whatsapp'
				/>
			</div>
		</div>
	);
};
