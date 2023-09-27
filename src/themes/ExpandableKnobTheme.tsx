import { Theme } from './index'

function isSafari() {
	return !(navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') !== -1)
}

export const ExpandableKnobTheme = (theme: Theme) => `
  .feedbot-reset {
    all: revert
  }

  .feedbot-reset * {
    all: revert
  }

  body .feedbot-wrapper {
    bottom: 24px;
    right: 24px;
    border-radius: 15px;
  }

  body .feedbot-header {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  body .feedbot-wrapper .wc-chatview-panel {
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .wc-app .wc-console {
    background-color: white;
    border-width: 0px;
    border-top: 1px solid #dbdee1;
  }

  .wc-app .wc-console .wc-textbox {
    left: 20px;
  }

  .wc-app .wc-console.has-upload-button .wc-textbox {
    left: 48px;
  }

  .wc-app .wc-console .wc-send {
    top: 4px;
  }

  body .feedbot-wrapper.collapsed {
    border-radius: 40px;
    width: 75px;
    min-width: auto;
    height: 75px;
  }

  body .feedbot-wrapper.collapsed .feedbot-header {
    border-radius: 40px;
    height: 100%;
    padding: 0px;

    background-image: url(${(theme.template && theme.template.iconUrl)
	? theme.template.iconUrl
	: 'https://cdn.feedyou.ai/webchat/message-icon.png'
});
    background-size: 50px 50px;
    background-position: 12px 12px;
    background-repeat: no-repeat;

    text-indent: 999%;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0px;
  }

  body .feedbot-wrapper {
    width: 420px;
    height: 565px;
  }

  .feedbot-wrapper.collapsed .feedbot-signature {
    display: none;
  }

  .feedbot-wrapper .feedbot-signature {
    position: absolute;
    bottom: -23px;
    font-size: 13px;
    right: 11px;
    opacity: 0.50;
    font-family: "Roboto", sans-serif;

    height: 22px;
    display: block;
    align-items: center;
    -webkit-transition: opacity 0.3s ease-in-out;
    -moz-transition: opacity 0.3s ease-in-out;
    -ms-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
  }

  .feedbot-wrapper .feedbot-signature:hover {
    opacity: 0.80;
  }

  .feedbot-signature a {
    transition: 0.3s;
    color: black;
    text-decoration: none;
    margin: 0 4px;
    display: flex;
    align-items: center;
  }

  .feedbot-signature a:hover {
    cursor: pointer;
  }

  .feedbot-signature a img {
    height: 22px;
  }
  
  .feedbot-signature-row{
    display: flex;
    height: 100%;
  }

  




  .feedbot-reset {
    all: revert
  }

  .feedbot-reset * {
    all: revert
  }

  .feedbot-header {
      z-index: 10;
      color: white;
      line-height: 30px;
      padding: 9px 8px 8px 16px;
      cursor: pointer;
      font-size: 1.1em;
      letter-spacing: 1px;
      display: flex;
      font-family: 'Roboto', sans-serif;
  }

  .feedbot-header .feedbot-title {
      flex-grow: 1;
  }

  .feedbot-header .feedbot-minimize {
      width: 30px;
      text-align: center;
      color: white;
      font-weight: bolder;
      font-family: Verdana;
      font-size: 1.2em;
      line-height: 0.9em;
  }

  .feedbot-wrapper.collapsed .feedbot-minimize {
      display: none;
  }

  .feedbot-header .feedbot-minimize:hover {
      font-size: 1.5em;
      line-height: 0.8em;
  }

  .feedbot-header, .feedbot-wrapper {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
  }

  .feedbot-wrapper {
    background-color: #fff;
    width: 450px;
    min-width: 275px;
    max-width: 90%;
    height: 700px;
    max-height: 90%;
    position: fixed;
    right: 5%;
    bottom: 0px;
    z-index: 100000;

    -webkit-box-shadow: 0px 0px 10px 0px rgba(167, 167, 167, 0.35);
    -moz-box-shadow: 0px 0px 10px 0px rgba(167, 167, 167, 0.35);
    box-shadow: 0px 0px 10px 0px rgba(167, 167, 167, 0.5);
  }

  .feedbot-wrapper.collapsed > .feedbot {
      display: none;
  }

  .feedbot-wrapper.collapsed {
      height: auto;
  }

  .feedbot-wrapper.collapsed .feedbot-header {
      padding-top: 10px;
  }

  .feedbot-wrapper .wc-adaptive-card, .feedbot-wrapper .wc-card {
    max-width: 337px !important;
  }



  .wc-carousel .wc-hscroll > ul > li > .wc-card {
    height: 100%;
  }

  .wc-carousel .wc-hscroll > ul > li > .wc-card > div > .ac-container > .ac-container .ac-image{
    border-radius: 5px 5px 0 0;
  }






  body.feedbot-disabled div.feedbot {
    display: none;
}

.wc-app .wc-chatview-panel {
    top: 45px;
}

.wc-app .wc-message-groups {
    top: 0px;
    background-color: white;
}

.wc-app .wc-header {
    display: none;
}

.wc-app .wc-console {
    background-color: white;
}

.wc-suggested-actions .wc-hscroll > ul > li button {
    color: white !important;
    background-color: ${theme.mainColor} !important;
    border-color: ${theme.mainColor} !important;
    border-radius: 20px;
    text-overflow: initial;
}

.wc-suggested-actions .wc-hscroll > ul > li button:hover {
    background-color: #ededed;
}

.wc-suggested-actions .wc-hscroll > ul > li button:active {
    color: ${theme.mainColor} !important;
    background-color: white !important;
    border-color: ${theme.mainColor} !important;
}

.wc-app .wc-card button {
    color: ${theme.mainColor};
}

.wc-app .wc-card button:hover {
    border-color: ${theme.mainColor};
    color: ${theme.mainColor};
}

.wc-app .wc-card button:active {
    background-color: ${theme.mainColor};
    border-color: ${theme.mainColor};
    color: #ffffff;
}

.wc-app .wc-message-from-me .wc-message-content {
    background-color: ${theme.mainColor};
}

.wc-app .wc-message-from-me svg.wc-message-callout path {
    fill: ${theme.mainColor};
}

/* TODO finish - no blank space below suggested actions when input disabled
.feedbot-wrapper .wc-message-pane .wc-suggested-actions {
    position: absolute;
    bottom: 0px;
    z-index: 10000;
    background-color: white;
}

.feedbot-wrapper  .wc-message-pane.show-actions .wc-suggested-actions {
    height: 50px;
}

.feedbot-wrapper .wc-message-pane.show-actions .wc-message-groups {
    top: 0px;
    transform: translateY(0px);
}

.feedbot-wrapper .wc-message-pane.has-upload-button .wc-message-groups {
    transform: translateY(-30px);
}

.feedbot-wrapper .wc-console.disable-input .wc-textbox {
    display: none;
}

.feedbot-wrapper .wc-console.disable-input {
    background-color: white !important;
}*/

.feedbot-wrapper .wc-message-pane.show-actions .wc-message-groups {
    top: 0px;
    transform: translateY(-40px);
}

.feedbot-wrapper .wc-suggested-actions {
    background-color: transparent;
}

.feedbot-wrapper .wc-suggested-actions .wc-hscroll > ul > li {
    max-width: initial !important;
}

.feedbot-wrapper .wc-suggested-actions .wc-hscroll > ul {
    text-align: center;
}

.feedbot-wrapper .wc-suggested-actions .wc-hscroll > ul > li button:focus, .feedbot-wrapper .wc-console .wc-mic, .wc-console .wc-send, .feedbot-wrapper .wc-app .wc-card button {
    outline:0;
}

.feedbot-wrapper .wc-app .wc-card button {
    color: white !important;
    border-radius: 5px;
    background-color: ${theme.mainColor} !important;
    border-color: ${theme.mainColor} !important;

    flex: auto;
    padding: 5px 16px;
}

.feedbot-wrapper .wc-app .wc-card button, .feedbot-wrapper .wc-app .wc-card button > div {
    text-overflow: initial !important;
    white-space: initial !important;
}

.feedbot-wrapper .wc-app .wc-card button:active {
    color: ${theme.mainColor} !important;
    background-color: white !important;
    border-color: ${theme.mainColor} !important;
}

.feedbot-wrapper .wc-message-pane.show-actions .wc-message-groups {
    top: 40px !important;
}

.feedbot-wrapper .wc-app .wc-card {
    background-color: transparent;
    border-width: 0px;
    border-radius: 8px;
}

.feedbot-wrapper .wc-app .wc-carousel .wc-card {
    background-color: #fff !important;
}

.feedbot-wrapper .wc-message-content {
    box-shadow: none;
}

.feedbot-wrapper .wc-message-from-bot .wc-message-content {
    background-color: #f5f5f5;
}

.feedbot-wrapper .wc-message-from-bot svg.wc-message-callout path {
    fill: #f5f5f5;
}

.feedbot-wrapper .wc-card {
  border: 1px solid #d2dde5;
  max-width: 100%;
}

.wc-list .ac-container {
  outline: none !important;
}

.feedbot-wrapper .wc-adaptive-card {
  max-width: 100%;
}

.wc-list.tiles .ac-actionSet {
  flex-direction: row !important;
  flex-wrap: wrap;
  justify-content: center;
}

.wc-list.tiles .ac-container {
  padding-top: 0px;
  margin-top: -5px;
}

.wc-list.tiles .ac-pushButton {
  flex-basis: 44% !important;
  min-height: 120px !important;
  margin: 3% !important;
  flex-direction: column !important;
  transition: 0.3s;
  position: relative;
  padding: 16px;
  top: 0;
}

.wc-list.tiles .ac-pushButton:hover {
  top: -3px;
  filter: brightness(90%);
}

.feedbot-wrapper .wc-app .wc-list.tiles .wc-card .ac-pushButton:active {
  background-color: ${theme.mainColor}A0 !important;
  color: white !important;
}

.wc-list.tiles .ac-pushButton img {
  width: 36px !important;
  height: 36px !important;
  margin-right: 0px !important;
  margin-bottom: 10px !important;
}

.wc-list.tiles .ac-pushButton div {
  overflow: unset !important;
  text-overflow: unset !important;
  white-space: unset !important;
}

@media (max-width: 450px) {
  .feedbot-wrapper .wc-card {
    border: 1px solid #d2dde5;
    width: 198px;
  }
  .feedbot-wrapper .wc-list.tiles .wc-card {
    border: none;
    width: 100%;
  }

  .wc-list.tiles .ac-pushButton {
    min-height: 95px !important;
  }

  .wc-list.tiles .ac-container {
    padding: 0 !important;
    margin-top: 0 !important;
  }

  .feedbot-wrapper .wc-adaptive-card {
    width: 214px;
  }
}

.wc-message-from.wc-message-from-bot {
    visibility: hidden;
    height: 2px;
}

.wc-message-wrapper:not([data-activity-id='retry']) .wc-message-from {
    visibility: hidden;
    height: 2px;
}

.wc-message-wrapper:not([data-activity-id]) .wc-message-from {
    visibility: visible;
}

.feedbot-wrapper .wc-message-content {
    padding: 10px;
    border-radius: 10px;
}

.feedbot-wrapper .wc-message-from-bot .wc-message-content {
    color: #424242 !important;
}

.feedbot-wrapper .wc-carousel {
    margin-top: 10px !important;
}

.wc-carousel .wc-hscroll ul {
  display: flex;
  align-items: stretch;
}

  .wc-carousel .wc-hscroll > ul > li > .wc-card > div {
    height: 100%;
  }

  .wc-carousel .wc-hscroll > ul > li > .wc-card > div > .ac-container {
    padding: 0 !important;
    height: 100%;
    justify-content: space-between !important;
  }

.wc-carousel .wc-hscroll > ul > li > .wc-card > div > .ac-container > .ac-container .ac-image{
  border-radius: 8px 8px 0 0;
}

.wc-carousel .wc-hscroll > ul > li > .wc-card > div > .ac-container > .ac-container .ac-textBlock{
  padding: 0 20px;
  white-space: unset !important;
  text-overflow: unset !important;
  overflow: unset !important;
}

.wc-carousel .wc-hscroll > ul > li > .wc-card > div > .ac-container > .ac-container .ac-textBlock:last-child{
  padding-bottom: 8px;
}

.wc-carousel .wc-hscroll > ul > li > .wc-card {
  height: 100%;

}

.wc-carousel .wc-hscroll > ul > li > .wc-card > div .ac-actionSet{
  margin: 4px 20px 12px !important;
}

.feedbot-signature {
  display: none;
}

.wc-upload-screenshot {
  display: none !important;
}

body .feedbot-wrapper.collapsed .feedbot-header .feedbot-extra-html {
  display: none
}

.wc-hscroll {
  margin-bottom: 5px !important;
}

.wc-hscroll::-webkit-scrollbar{
  width: 0;
  height: 0;
}

${theme.enableScreenshotUpload && !isSafari() ? `
  .wc-upload-screenshot {
    display: inline-block !important;
    position: absolute !important;
    left: 46px !important;
    height: 40px !important;
    background-color: transparent !important;
    border: none !important;
    color: #8a8a8a;
    padding: 0;
  }
  .wc-upload-screenshot svg {
    margin: 9px 6px !important;
    width: 32px;
    height: 22px;
  }
  .wc-console.has-upload-button .wc-textbox {
    left: 96px !important;
  }
` : ''}

${theme.customCss || ''}








`
