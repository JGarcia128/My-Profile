import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/Jeidis picture.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				My name is Jeidi Garcia. I obtained my AS in Computer Science from Mercer County Community College.
				 After obtaining my degree I gained more an interest in web developemnt and wanted to advance my 
                 knowledge and understanding. I recently earned a certificate in full stack development from the
				 University of Rutgers bootcamp, with newly developed skills in JavaScript, CSS, React.js, and more. 
				 I am known as a problem solver, when doing a project I aim to do my best for the audience to see my experience.  
				</p>
				<p>
					I applied some of the skills i know in my recent project. 
					<a
						href="https://github.com/JGarcia128/Note-Taker"
						target="_blank"
					>
						develop
					</a>{' '}
					<a
						href="https://heroku.link"
						target="_blank"
					>
					</a>{' '}

				</p>
			</div>
		</section>
	);
}

export default About;
