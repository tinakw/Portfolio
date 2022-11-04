import './App.css';
import Project1Image from './project1-img.png';
import icon from './logo.png';
import Resume from './TWordenResume.pdf';
import DomGameImage from './mole2-img.png';
import img from './t.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="nav">
          <img className='icon' src={icon} />
          <li><a href={Resume} target='_blank'>Resume</a></li>
          <li><a href='https://www.linkedin.com/in/tina-k-worden/'target='_blank'>LinkedIn</a></li>
        </ul>
      </header>
      <section className="bio">
        <div className='bio-inner'>
          <p className ='title'>Hi 👋 I'm <img src= {img}/>,</p>
          <h1 className='occupation'>I build things for the web.</h1>
          <p className='bio-text'>As a creative problem solver, I bring great ideas to life. My projects showcase a developing practice using the latest web technologies. Below are samples of my work. Thanks for your interest!</p>
        </div>
      </section>
      <section className='project1'>
        <div className='project1-inner'>
          <div className='left-column'>
            <h2>Dog Volunteer Chat App</h2>
            <div className='chips'>
              <div className='chip'>React</div>
              <div className='chip'>NodeJS</div>
              <div className='chip'>MongoDB</div>
              <div className='chip'>Socket.io</div>
            </div>
            <a className='project1-link' href=" https://harmonious-biscochitos-b429e7.netlify.app/">View Project</a>
          </div>
          <div className='right-column'>
            <img className='project1-img' src={Project1Image} />
          </div>
        </div>
      </section>
      <section className='domGame'>
        <div className='domGame-inner'>
        <div className='domGame-right'>
            <img className='mole2-img' src={DomGameImage} />
          </div>
          <div className='domGame-left'>
            <h2>Whack-A-Mole</h2>
            <div className='chips'>
              <div className='chip'>HTML</div>
              <div className='chip'>CSS</div>
              <div className='chip'>JavaScript</div>
            </div>
            <a className='domGame-link' href="https://github.com/tinakw/project1_Whack_A_Mole.git">View Project</a>
          </div>

          
        </div>
        
      </section>
      <footer>
        <p>2022 Tina Worden</p>
        </footer>
    </div>
  );
}

export default App;
