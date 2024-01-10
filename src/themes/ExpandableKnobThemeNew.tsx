import { Theme } from './index';

export const ExpandableKnobThemeNew = (theme: Theme) => `
.feedbot-wrapper.collapsed .feedbot-header {
    background-image: url(${
		theme.template && theme.template.iconUrl
			? theme.template.iconUrl
			: '"' +
			  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='none'%3E%3Cpath d='M11.291 18.562L11.2898 18.5622L11.2882 18.5618L11.2869 18.5606L11.2864 18.5589L11.2867 18.5576L11.2879 18.5561L11.2898 18.5556C11.2904 18.5557 11.2916 18.5561 11.2921 18.5565C11.2926 18.557 11.2929 18.5576 11.293 18.5582L11.2928 18.5602L11.291 18.562Z' fill='white'/%3E%3Cpath d='M18.0016 18.5617L18.0025 18.5607L18.0031 18.5589L18.0026 18.5572C18.0022 18.5568 18.001 18.5558 18.0004 18.5556L17.9985 18.5558L17.997 18.557L17.9964 18.5589L17.9967 18.5602L17.9974 18.5612C17.9979 18.5617 17.9985 18.562 17.9991 18.5622L18.0016 18.5617Z' fill='white'/%3E%3Cpath d='M24.711 18.562L24.7097 18.5622C24.7091 18.5621 24.7078 18.5617 24.7074 18.5612C24.7069 18.5608 24.7066 18.5602 24.7065 18.5595L24.7066 18.5576L24.7079 18.5561L24.7097 18.5556C24.71 18.5556 24.7109 18.5558 24.7112 18.5559C24.7115 18.5561 24.7109 18.5557 24.7112 18.5559C24.7117 18.5564 24.7129 18.5576 24.713 18.5582L24.7128 18.5602L24.711 18.562Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.4346 0.0453898C23.7144 0.351612 27.7405 2.19149 30.7729 5.22729C33.8088 8.25967 35.6487 12.2851 35.9546 16.5651C36.2605 20.8451 35.0123 25.0922 32.4388 28.5258C29.865 31.9593 26.1395 34.3494 21.9456 35.2567C17.7523 36.1643 13.3715 35.5283 9.60866 33.4655L3.46231 35.8297C2.84593 36.0668 2.16128 36.0551 1.55306 35.7973C0.944834 35.5394 0.460637 35.0551 0.202461 34.4469C-0.0557144 33.8388 -0.0673678 33.1541 0.169763 32.5377L2.53452 26.3913C0.471719 22.6289 -0.164628 18.2483 0.742975 14.0544C1.65029 9.86051 4.04038 6.1346 7.47397 3.56116C10.9074 0.98764 15.1546 -0.260549 19.4346 0.0453898ZM11.2898 17.4372C11.0679 17.4372 10.8511 17.503 10.6666 17.6263C10.4821 17.7495 10.3384 17.9247 10.2535 18.1297C10.1686 18.3346 10.1464 18.5601 10.1897 18.7777C10.2329 18.9953 10.3398 19.1952 10.4966 19.352C10.6535 19.5089 10.8534 19.6157 11.0709 19.659C11.2885 19.7023 11.514 19.6801 11.719 19.5952C11.924 19.5103 12.0991 19.3665 12.2224 19.1821C12.3456 18.9976 12.4114 18.7807 12.4114 18.5589C12.4114 18.2614 12.2932 17.9761 12.0829 17.7658C11.8725 17.5554 11.5872 17.4372 11.2898 17.4372ZM17.3766 17.6263C17.561 17.503 17.7779 17.4372 17.9997 17.4372C18.2972 17.4372 18.5825 17.5554 18.7929 17.7658C19.0032 17.9761 19.1214 18.2614 19.1214 18.5589C19.1214 18.7807 19.0556 18.9976 18.9324 19.1821C18.8091 19.3665 18.6339 19.5103 18.429 19.5952C18.224 19.6801 17.9985 19.7023 17.7809 19.659C17.5633 19.6157 17.3635 19.5089 17.2066 19.352C17.0497 19.1952 16.9429 18.9953 16.8996 18.7777C16.8564 18.5601 16.8786 18.3346 16.9635 18.1297C17.0484 17.9247 17.1921 17.7495 17.3766 17.6263ZM24.7097 17.4372C24.4879 17.4372 24.271 17.503 24.0866 17.6263C23.9021 17.7495 23.7583 17.9247 23.6734 18.1297C23.5885 18.3346 23.5663 18.5601 23.6096 18.7777C23.6529 18.9953 23.7597 19.1952 23.9166 19.352C24.0735 19.5089 24.2733 19.6157 24.4909 19.659C24.7085 19.7023 24.934 19.6801 25.139 19.5952C25.3439 19.5103 25.5191 19.3665 25.6423 19.1821C25.7656 18.9976 25.8314 18.7807 25.8314 18.5589C25.8314 18.2614 25.7132 17.9761 25.5028 17.7658C25.2925 17.5554 25.0072 17.4372 24.7097 17.4372Z' fill='white'/%3E%3C/svg%3E" +
			  '"'
	});
}
.feedbot-wrapper.collapsed .feedbot-header {
	background-color: ${theme.mainColor ? theme.mainColor : '#0063f8'};
}
.feedbot-wrapper.collapsed .feedbot-header:before {
	border-color: ${theme.mainColor ? theme.mainColor : '#0063f8'};
}

${theme.customCss || ''}
`;
