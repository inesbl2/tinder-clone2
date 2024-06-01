import Nav from '../components/nav';

function Home() {
  const handleClick = (path) => {
    window.location.href = `http://localhost:3000/${path}`;
  };

  return (
    <div className='background'>
      <nav>
        {Nav()}
      </nav>
      
      <h1 className="primary-title">Welcome to Tinder®</h1>
      <div className="buttons">
        <button className="sign-button" onClick={() => handleClick('login')}>Sign In</button>
        <button className="sign-button" onClick={() => handleClick('signup')}>Sign Up</button>
      </div>
    </div>
  );
}

export default Home;