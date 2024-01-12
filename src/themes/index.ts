import { ExpandableBarTheme } from './ExpandableBarTheme';
import { FullScreenTheme } from './FullScreenTheme';
import { ExpandableKnobTheme } from './ExpandableKnobTheme';
import { SidebarTheme } from './SidebarTheme';
import { ExpandableKnobThemeNew } from './ExpandableKnobThemeNew';
import { SidebarThemeNew } from './SidebarThemeNew';

export type Theme = {
	mainColor: string;
	template?: {
		// Dost možná tu nějaký propy chyběj,
		// tak je neváhej připsat! :)
		autoExpandTimeout?: number;
		type?: string;
		headerText?: string;
		collapsedHeaderText?: string;
		popupMessage?: {
			title: string;
			description: string;
			timeout: number;
		};
		iconUrl?: string;
		customScript?: string;
		logoUrl?: string;
		avatar?: string;
		supportiveTitle?: string;
		persistentMenu?: [{
			title: string;
			dialog: string;
		}]
	};
	customCss?: string;
	showSignature?: boolean;
	enableScreenshotUpload?: boolean;
	signature?: {
		partnerLogoUrl: string;
		partnerLogoStyle: string;
		partnerLinkUrl: string;
		partnerName: string;
		mode: string;
	};
};

export function getStyleForTheme(theme: Theme, remoteConfig: boolean): string {
	switch (theme && theme.template && theme.template.type) {
		case 'expandable-bar':
			return ExpandableBarTheme(theme);
		case 'full-screen':
			return FullScreenTheme(theme);
		case 'expandable-knob':
			return ExpandableKnobTheme(theme);
		case 'sidebar':
			return SidebarTheme(theme);
		case 'expandable-knob-new':
			return ExpandableKnobThemeNew(theme);
		case 'sidebar-new':
			return SidebarThemeNew(theme);
	}

	// backward compatibility - knob is new default for remote config, old default is bar
	return remoteConfig
		? ExpandableKnobTheme(theme)
		: ExpandableBarTheme(theme);
}
