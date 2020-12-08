import image from "./jsxlogo.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
    <div style={{
      border:'solid 1 black',
      maxWidth:'100'
      }}
      >
<h1 className="titlered">Rahal Hasnia</h1>
<br/>
<img src={image} alt="profile"/>
<br/>
<img src="/image/logo.png" alt="logo"/>
</div>
<video width="320" height="240" controls>
<source src={"myVideo.mp4"} type="video/mp4"/>
</video>
    </div>
  );
}
export default App;
