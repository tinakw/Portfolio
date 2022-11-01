import './App.css';
import Project1Image from './project1-img.png';
import icon from './logo.png';
import Resume from './TWordenResume.pdf';

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
          <p className='title'>Hello 👋 I'm Tina.</p>
          <h1 className='occupation'>Web Developer</h1>
          <p className='bio-text'>A creative problem solver bringing great ideas to life on the web. My projects are a showcase of my journey to develop my practice alongside my professional career as a PMI certified program management professional. For more information about me, follow the link above to my LinkedIn profile or download my resume.</p>
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
            <img className='project1-img' src={Project1Image} />
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
