$(document).ready(function () {
	// Slider
	if (window.location.href.indexOf('index') > -1) {

		$('.galeria').bxSlider({
			mode: 'fade',
			captions: false,
			slideWidth: 1200,
			responsive: true,
			pager: false
		});
	}

	// Posts
	if (window.location.href.indexOf('index') > -1) {
		var posts = [
			{
				title: 'Prueba de titulo 1',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Prueba de titulo 2',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Prueba de titulo 3',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Prueba de titulo 4',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Prueba de titulo 5',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Prueba de titulo 6',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
		];

		posts.forEach(postobject => {
			var post = `
				<article class="post">
					<h2>${postobject.title}</h2>
					<span class="date">${postobject.date}</span>
					<p>
						${postobject.content}
					</p>
					<a href="#" title='Prueba' class="button-more">Leer más</a>
				</article>
			`;

			let stringToHTML = string => {
				var div = document.createElement('div');
				div.innerHTML = string;
				return div;
			};

			let posthtml = stringToHTML(post);
			let posts = document.querySelector('#posts').append(posthtml);
		});
	}

	// Theme selector
	let themeColour = document.querySelector('#theme');

	let toGreen = document.querySelector('#to-green').addEventListener(('click'), () => {
		themeColour.href = 'css/green.css';
	});

	let toRed = document.querySelector('#to-red').addEventListener(('click'), () => {
		themeColour.href = 'css/red.css';
	});

	let toBlue = document.querySelector('#to-blue').addEventListener(('click'), () => {
		themeColour.href = 'css/blue.css';
	});

	// Fake login
	const formSession = document.querySelector('#mainForm');
	formSession.addEventListener(('submit'), e => {
		e.preventDefault();
		let name = e.target.name.value;
		localStorage.setItem('form_name', name);
	
		location.reload();
	});	

	let getName = localStorage.getItem('form_name');

	if (getName !== null && getName !== "undefined" && getName !== '') {
		let loginh4 = document.querySelector('#login h4').innerHTML = `<h4><span>Bienvenido: ${getName}</span></h4>
		<a href='#' id='logout'>Cerrar sesión</a>`;

		formSession.style.display = 'none';

		let logOut = document.querySelector('#logout').addEventListener(('click'), e => {
			e.preventDefault();
			localStorage.clear();
			location.reload();
		});
	}

	// Acordeon
	if (window.location.href.indexOf('about') !== -1) {
		$("#acordeon").accordion();
	}

	// Clock
	if (window.location.href.indexOf('reloj') !== -1) {
		setInterval(() => {
			let reloj_Data = moment().format("hh:mm:ss");
			let reloj = document.querySelector('#reloj').innerHTML = reloj_Data;
		}, 1000);
	}
});