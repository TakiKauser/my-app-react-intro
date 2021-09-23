import logo from './logo.svg';
import './App.css';

function App() {
  const cinemas = [
    { actor: "Hrithik Rosan", actress: "Swastika" },
    { actor: "Dhanush", actress: "Sai Pallavi" },
    { actor: "Chanchal Cowdhury", actress: "Joya Ahsan" }
  ];

  return (
    <div className="App">
      {/* { <Cinema actor= "kb" actress="fft"></Cinema> } */}
      {
        cinemas.map(cinema => <Cinema actor={cinema.actor} actress={cinema.actress}></Cinema>)
      }
    </div>
  );
}
/* 
      <a href="https://github.com/TakiKauser" target="_blank">GitHub</a>
      <Person actor="Hrithik Rosan" actress="Swastika"></Person>
      <Person actor="Dhanush" actress="Sai Pallavi"></Person>
      <Person actor="Chanchal Cowdhury" actress="Joya Ahsan"></Person>
*/
/* 
    <div className="App">
      <Friend phone="0123456789101" address="Mymenshingh"></Friend>
      <Friend phone="0123456789102" address="Chittangong"></Friend>
      <Friend phone="0123456789103" address="Sylhet"></Friend>
    </div>
*/
function Person(props) {
  console.log(props);
  const person = {
    color: "aliceblue",
    backgroundColor: "#282c34",
    margin: "30px",
    border: "3px solid black",
    borderRadius: "20px"
  }
  return (
    <div style={person}>
      <h2>Actor: {props.actor}</h2>
      <h5>Actress: {props.actress}</h5>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="person">
      <h3>Phone: {props.phone}</h3>
      <h3>Adress: {props.address}</h3>
    </div>
  );
}
function Cinema(props) {
  return (
    <div className="person">
      <h2>Actor: {props.actor}</h2>
      <h5>Actress: {props.actress}</h5>
    </div>
  );
}

export default App;
