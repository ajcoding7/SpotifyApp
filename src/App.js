import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import {useState, useEffect } from 'react';

const CLIENT_ID = "7583f3d0784444a29226ffd9d0f08789";
const CLIENT_SECRET = "d2604b45a5ab4c92929a4a9e50a2f2e9";

function App() {
  const [searchInput, setSearchInput] = useState("");
  
  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
  }

    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
    <Container>
    <InputGroup className= "marginbottom3" size="lg">
      <FormControl
      placeholder="Search For Artist"
      type="input"
      onKeyPress={event => {
        if (event.key === "Enter") {
          console.log("User Hit Enter");
        }
      }}
      onChange={event => setSearchInput(event.target.value)}

      />
      <Button onClick={event => { console.log("wagwarn")}}>
      Search
      </Button>
    </InputGroup>
    </Container>

    <Container>
     <Row className="mx-2 row row-cols-4">
    
    <Card>
    <Card.Img src="#" />
    <Card.Body>
    <Card.Title>Album Name</Card.Title>
    </Card.Body>
    </Card>

    <Card>
    <Card.Img src="#" />
    <Card.Body>
    <Card.Title>Album Name</Card.Title>
    </Card.Body>
    </Card>

    <Card>
    <Card.Img src="#" />
    <Card.Body>
    <Card.Title>Album Name</Card.Title>
    </Card.Body>
    </Card>

    <Card>
    <Card.Img src="#" />
    <Card.Body>
    <Card.Title>Album Name</Card.Title>
    </Card.Body>
    </Card>

    </Row>

    </Container>
    </div>
  );
}

export default App;
