import React, { memo, useEffect } from 'react';
import { Page, withHome } from 'viewport';
import { pipe } from 'system/Utils';
// import OnlyOffice, { useOnlyOffice, OODocument } from 'react-only-office';

// @see https://api.onlyoffice.com/editors/advanced
const config = {
	document: {
		fileType: 'docx',
		key: 'Khirz6zTPdfd7',
		title: 'Sample File To Edit.docx',
		url: 'http://lab.sipas.id/playground/dedy/editor/sample.docx',
		permissions: {
			comment: false,
			download: true,
			edit: true,
			fillForms: false,
			print: false,
			review: false
		},
        editorConfig: {
            callbackUrl: 'http://localhost:4000/'
        }
		// plugins: {}
	},
	// mode: 'edit',
	// editorConfig: {
	// 	// actionLink: ACTION_DATA,
	// 	// callbackUrl: 'http://localhost:4000/',
	// 	// createUrl: 'https://example.com/url-to-create-document/',
	// 	customization: {
	// 		autosave: true,
	// 		chat: false,
	// 		commentAuthorOnly: false,
	// 		comments: true,
	// 		compactHeader: false,
	// 		compactToolbar: false,
	// 		customer: {
	// 			address: 'My City, 123a-45',
	// 			info: 'Some additional information',
	// 			logo: 'https://example.com/logo-big.png',
	// 			mail: 'john@example.com',
	// 			name: 'John Smith and Co.',
	// 			www: 'example.com'
	// 		},
	// 		feedback: {
	// 			url: 'https://example.com',
	// 			visible: true
	// 		},
	// 		forcesave: true,
	// 		goback: {
	// 			blank: true,
	// 			text: 'Go to Documents',
	// 			url: 'https://example.com'
	// 		},
	// 		help: true,
	// 		hideRightMenu: false,
	// 		logo: {
	// 			image: 'https://lab.sipas.id/favicon.png',
	// 			imageEmbedded: 'https://lab.sipas.id/favicon.png',
	// 			url: 'https://sipas.id'
	// 		},
	// 		showReviewChanges: false,
	// 		toolbarNoTabs: false,
	// 		zoom: 100
	// 	}
	// },
	onDocumentStateChange: function(...args){
	    console.log(args)
	},
	// type: 'desktop',
	// documentType: 'text',
	chat: false,
	comments: false,
	compactHeader: true,
	leftMenu: false,
	// info: false
};

const Editor = () => {
	useEffect(function() {
		new window.DocsAPI.DocEditor('doceditor', config);
	}, []);

	return (
		<Page name='Editor' centerContent>
			<div id='doceditor'>if you see this message, its mean the editor fail to load</div>
		</Page>
	);
};

// const Example = () => {
// 	return (
// 		<>
// 			<OnlyOffice {...config}>
// 				<span>Only Office:</span>
// 				<MyComponent />
// 			</OnlyOffice>
// 		</>
// 	);
// };

// const MyComponent = () => {
// 	const { getDownloadUrl } = useOnlyOffice();
// 	return (
// 		<button
// 			onClick={async () => {
// 				const url = await getDownloadUrl();
// 				window.open(url);
// 			}}>
// 			Download file!
// 		</button>
// 	);
// };

export default pipe(memo, withHome)(Editor);
