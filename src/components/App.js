import Post from "./Post";
import Nav from "./Nav";

const App = () => {
  const username = localStorage.getItem('username')

  const welcomeMessage = username ? 'Welcome back to Stranger\'s Things ' + username : 'Welcome to Stranger\'s Things'
  return (  
    <div>
      <div id="header">
        <p>{ welcomeMessage }</p>
      </div>
      <Nav />

      <Post />
    </div>
  );
}

export default App;
