import * as React from 'react';
import { AppProps } from '../../App';
import { Theme } from '../../../themes';

export type Props = {
	appProps: AppProps;
	onClick(): void;
	isCollapsed: boolean;
};

export const Header: React.StatelessComponent<Props> = ({
	appProps,
	onClick,
	isCollapsed,
}) => {
	const {
		theme: { mainColor, template },
		header: { extraHtml },
	} = appProps;

	let backgroundColor;
	{/* LP: for dev; pak změnit type na 'expandable-knob-new' */}
	if (template.type !== 'expandable-knob') {
		backgroundColor = mainColor || '#e51836';
	}

	const title = getTitle(appProps, isCollapsed);
	const avatar =
		template.avatar ||
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='none'%3E%3Cpath d='M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18Z' fill='%23F7F9FB'/%3E%3Cpath d='M14.024 18.026h-.003v-.005h.004l.001.002v.001l-.002.002Zm3.978 0v-.001l.001-.002v-.002h-.006v.004l.002.001h.003Zm3.976 0h-.003l-.001-.002v-.002l.001-.001h.004v.003l-.001.002Z' fill='%23385B75'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.718 9.023a8.912 8.912 0 0 1 5.669 2.59 8.91 8.91 0 0 1-10.583 14.12l-3.073 1.182a1.274 1.274 0 0 1-1.646-1.646l1.182-3.073a8.91 8.91 0 0 1 8.45-13.173ZM14.023 17a1.024 1.024 0 1 0 0 2.047 1.024 1.024 0 0 0 0-2.047Zm3.409.172a1.023 1.023 0 1 1 1.136 1.702 1.023 1.023 0 0 1-1.136-1.702ZM21.977 17a1.023 1.023 0 1 0 0 2.047 1.023 1.023 0 0 0 0-2.047Z' fill='%23385B75'/%3E%3C/svg%3E";

	return (
		<div
			className='feedbot-header'
			onClick={onClick}
			style={{ backgroundColor, justifyContent: 'space-between' }}>
			<div className='feedbot-header-name'>
				{/* LP: for dev; pak změnit type na 'expandable-knob-new' */}
				{template.type === 'expandable-knob' ? (
					<div className='feedbot-avatar' style={{backgroundImage: `url("${avatar}")`}}>
					</div>
				) : null}
				<div className='feedbot-name'>
					<span className='feedbot-title'>{title}</span>
						{/* LP: for dev; pak změnit type na 'expandable-knob-new' */}
						{template.type === 'expandable-knob' ? (
							<span className='feedbot-supportive-title'>
								{/* LP: for dev; pak text odstranit */}
								S čím vám dnes mohu pomoci?
								{template.supportiveTitle}
							</span>
						): null}
				</div>
			</div>

			{extraHtml && (
				<span
					className='feedbot-extra-html'
					dangerouslySetInnerHTML={{ __html: extraHtml }}
				/>
			)}

			<a
				onClick={(e) => e.preventDefault()}
				className='feedbot-minimize'
				href='#'>
				{/* LP: for dev; pak změnit type na 'expandable-knob-new' */}
				{template.type === 'expandable-knob' ? (
					<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8232 8.76256 17.8232 9.23744 17.5303 9.53033L9.53033 17.5303C9.23744 17.8232 8.76256 17.8232 8.46967 17.5303C8.17678 17.2374 8.17678 16.7626 8.46967 16.4697L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="currentColor"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L17.5303 16.4697C17.8232 16.7626 17.8232 17.2374 17.5303 17.5303C17.2374 17.8232 16.7626 17.8232 16.4697 17.5303L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967Z" fill="currentColor"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.75C6.7868 1.75 1.75 6.7868 1.75 13C1.75 19.2132 6.7868 24.25 13 24.25C19.2132 24.25 24.25 19.2132 24.25 13C24.25 6.7868 19.2132 1.75 13 1.75ZM0.25 13C0.25 5.95837 5.95837 0.25 13 0.25C20.0416 0.25 25.75 5.95837 25.75 13C25.75 20.0416 20.0416 25.75 13 25.75C5.95837 25.75 0.25 20.0416 0.25 13Z" fill="currentColor"/>
					</svg>
				) : (
					'_'
				)}
			</a>
		</div>
	);
};

const getTitle = (props: AppProps, isCollapsed: boolean) => {
	const { text, textWhenCollapsed } = props.header;

	const titleWhenExpanded = text || 'Chatbot';
	const titleWhenCollapsed = textWhenCollapsed || titleWhenExpanded;
	const titleToShow = isCollapsed ? titleWhenCollapsed : titleWhenExpanded;

	return titleToShow;
};

export type HeaderProps = Props;
