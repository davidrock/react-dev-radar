import React, { useEffect, useState } from 'react';
import {
	Card,
	Button,
	Row,
	Col,
	Form,
	CardColumns,
	Image,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import api from './services/api';

function App() {
	const [github_username, setGithubUsername] = useState('');
	const [techs, setTechs] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [devs, setDevs] = useState([]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				console.log(pos);
				const { latitude, longitude } = pos.coords;
				setLatitude(latitude);
				setLongitude(longitude);
			},
			(err) => {
				console.error(err);
			},
			{
				timeout: 30000,
			}
		);
	}, []);

	useEffect(() => {
		async function loadDevs() {
			const response = await api.get('/devs');

			setDevs(response.data);
    }
    
    loadDevs();
	}, []);

	async function handleSubmit(e) {
		console.log('handlee');
		e.preventDefault();
		const res = await api.post('/devs', {
			github_username,
			techs,
			latitude,
			longitude,
		});

		console.log(res.data);
	}

	return (
		<div id='app'>
			<aside>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>
							<Row>
								<Col>Register</Col>
							</Row>
						</Card.Title>
						<Form noValidate onSubmit={handleSubmit}>
							<Row>
								<Col>
									<Form.Group controlId='formGithubUser'>
										<Form.Label>Github User</Form.Label>
										<Form.Control
											type='github-user'
											placeholder="Insert your github's name"
											value={github_username}
											onChange={(e) =>
												setGithubUsername(
													e.target.value
												)
											}
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<Col>
									<Form.Group controlId='formTechStack'>
										<Form.Label>Tech Stack</Form.Label>
										<Form.Control
											type='tech-stack'
											placeholder='What technologies do you use?'
											value={techs}
											onChange={(e) =>
												setTechs(e.target.value)
											}
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<Col>
									<Form.Group controlId='formLat'>
										<Form.Label>Latitude</Form.Label>
										<Form.Control
											type='latitude'
											value={latitude}
											onChange={(e) =>
												setLatitude(e.target.value)
											}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId='formLon'>
										<Form.Label>Longitude</Form.Label>
										<Form.Control
											type='longitude'
											value={longitude}
											onChange={(e) =>
												setLongitude(e.target.value)
											}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Card.Link href='#'>
								<Button block type='submit'>
									Salvar
								</Button>
							</Card.Link>
						</Form>
					</Card.Body>
				</Card>
			</aside>
			<main>
				<CardColumns>
					{devs.map((dev) => (
						<Card key={dev._id} style={{ width: '20rem' }}>
							<Card.Body>
								<Row>
									<Col xs={2}>
										<Image
											width='60'
											src={dev.avatar_url}
											alt={dev.name}
											roundedCircle
										/>
									</Col>
									<Col xs={9} className='user-title'>
										<Row>
											<Col>
												<strong>{dev.name}</strong>
											</Col>
										</Row>
										<Row>
											<Col>
												<span className='text-muted'>
													{dev.techs.join(', ')}
												</span>
											</Col>
										</Row>
									</Col>
								</Row>
								<Row>
									<Col>
										<span>{dev.bio}</span>
									</Col>
								</Row>
								<Row>
									<Col>
										<a
											href={`https://github.com/${dev.github_username}`}
										>
											Go to Github Profile
										</a>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					))}
				</CardColumns>
			</main>
		</div>
	);
}

export default App;
