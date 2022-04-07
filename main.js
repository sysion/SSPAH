let content = document.querySelector('.content');
let defaultHash = '#lagos';
let index = "index.html";

if (!window.location.hash || window.location.pathname === index){
	window.location.hash = defaultHash;
}

const pageRoutes = [
	{
		path: 'lagos',
		template: 'templates/lagos.html'
	},
	{
		path: 'sspa/nigeria',
		template: 'templates/nigeria.html'
	},
	{
		path: 'sspa/africa',
		template: 'templates/africa.html',
	},
	{
		path: 'sspa/world',
		template: 'templates/world.html',
	},
];

let checkRoute = function(pagePath) {
	return pageRoutes.find(function(route){
		return route.path === pagePath;
	});
}

const handleRoute = async function(hash){
	let path = hash.replace("#","");
	let route = checkRoute(path);
	let template = route.template;	
	let html = await fetch(template).then((response) => response.text());

	content.innerHTML = html;
};

handleRoute(defaultHash);

window.addEventListener('hashchange', function(){
	let hash = window.location.hash;
	handleRoute(hash);
});