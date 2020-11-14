import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import UserContext from '../../Context/UserContext';
import RecentNotes from '../../Components/RecentNotes';
import TextEditor from '../../Components/TextEditor';
import './style.css';

export default function Journal() {
	const { userData } = useContext(UserContext);

	return (
		<>
			<Header />
			{userData.user ? (
				<>
					<Container fluid="xs">
						<Row>
							<Col md={2}>
							</Col>

							<Col md={8}>
								<Row>
									<Col md={12}>
										<TextEditor />
										{/* <RecentNotes /> */}
									</Col>
								</Row>
							</Col>
							<Col md={2}>
							</Col>
						</Row>
					</Container>
				</>
			) : (
				<>
					<h2 className="text-center">
						<Link to="/login">Please login</Link>
					</h2>
				</>
			)}
		</>
	);
}
