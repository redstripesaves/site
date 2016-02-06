$(function() {
	CMS.init({
		
		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'Red Stripe Saves',
		siteTagline: 'High visibility safety signs',
		siteEmail: 'mulveyp@blueyonder.co.uk',
		siteAuthor: 'Paul Mulvey',
		
		// Navigation items
		//{ name: 'Github', href: 'https://github.com/', newWindow: false},
		siteNavItems: [
			{name: 'Home'}
			,{name: 'Gallery'}
			,{name: 'About'}
		],
		postsFolder: 'posts',
		pagesFolder: 'pages',
		sortDateOrder: true,
		pageAsFrontpage: 'Home',
		postsOnFrontpage: false,
		postsOnUrl: '#blog',
		fadeSpeed: 100,
		postSnippetLength: 12000,
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',
		mode: 'Github',
		githubUserSettings: {username: 'redstripesigns',repo: 'site'},
		githubSettings: {branch: 'gh-pages', host: 'https://api.github.com'}
	});
	
	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer()
		,gfm: true
		,tables: true
		,breaks: false
		,pedantic: false
		,sanitize: true
		,smartLists: true
		,smartypants: false
	});
});
