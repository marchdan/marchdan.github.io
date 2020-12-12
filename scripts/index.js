const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('showPage')

if(query == null || query != 'yes'){
	window.location.href = "./under-construction.html";
}

