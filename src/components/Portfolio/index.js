import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		
		{
			name: 'Code Quiz',
			description:
				'This code is design to test the user about coding. The questions are all multiple choice and at the end it gives you a score. ',
			image: 'coding test.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
			],
			github: 'https://github.com/JGarcia128/Coding-Quiz',
			deployed: 'https://jgarcia128.github.io/Coding-Quiz/',
		},
		{
			name: 'Google Book Search',
			description:
				'This app is designed to be able to look up books on google. There is a way to save the books that are favorite and the app has the ability to create an account.',
			image: 'Google Book Search.png',
			technologies: ['HTML/CSS', 'JavaScript', 'GraphQL API','MERN'],
			github: 'https://github.com/JGarcia128/Book-Search-Engine',
			deployed: 'https://jgarcia128.github.io/Book-Search-Engine/',
		},
		{
			name: 'Team Generator',
			description:
				'This application generates a team profile. It would go thorugh the git bash asks a couple question and after generates the profile on the web.',
			image: 'Team-generator.png',
			technologies: [
				'JavaScript',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/JGarcia128/Team-Profile-Generator',
			deployed: 'https://jgarcia128.github.io/Team-Profile-Generator/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city. It also stores the previous cities that were searched.',
			image: 'weather-picture.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/JGarcia128/Weather-API',
			deployed: 'https://jgarcia128.github.io/Weather-API/',
		},
		{
			name: 'Password Generator',
			description:
				'Allows you to generate a password from 8 to 128 characters. Along with accepting certain characters',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/JGarcia128/Password-Challenge',
			deployed: ' https://jgarcia128.github.io/Password-Challenge/',
		},
		{
			name: 'Note Taker',
			description:
			'This application is like a note pad, it stores the users notes. Along with allowing them to erase the notes that users wish to delete.',
			image: 'new note.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/JGarcia128/Note-Taker',
			deployed: 'https://note-taker-rut.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
