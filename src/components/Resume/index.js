import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/Jeidi-Garcia (2).pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
			<div>
				<h5>Foundation</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>Git</li>
					<li>JavaScript</li>
					<li>Bootstrap</li>
					<li>The DOM</li>
					<li>APIs</li>
					<li>JQuery</li>
					<li>JSON</li>
					<li>AJAX</li>
				</ol>
				<br></br>
				<h5>Technical</h5>
				<ol>
					<li>Node</li>
					<li>ES6</li>
					<li>Object-oriented programming</li>
					<li>Express</li>
					<li>MySQL</li>
					<li>Model View Controller (MVC)</li>
					<li>Sequelize</li>
					<li>Testing</li>
					<li>Agile Development</li>
				</ol>
				<br></br>
				<h5>Perfromance</h5>
				<ol>
					<li>Progressive Web Apps</li>
					<li>React</li>
					<li>NoSQL</li>
					<li>MERN Stack</li>
					<li>Computer Science Fundamentals</li>
				</ol>
				<br></br>
			</div>
		</section>
	);
}

export default Resume;
