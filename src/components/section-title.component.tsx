type TSectionTitleProps = {
	title?: string;
	subTitle?: React.ReactNode;
};
export const SectionTitle = ({ title, subTitle }: TSectionTitleProps) => {
	return (
		<div className='title'>
			<p className='primary-text'>{title}</p>
			{subTitle && <p className='secondary-text'>{subTitle}</p>}
		</div>
	);
};
