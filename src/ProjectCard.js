import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
export default function ProjectCard(props) {
  return (
    <>
    <div className="portfolio-card">
      <img src={props.projectImage} alt="Project" />
      <div className="card-content">
        <h2>{props.title}</h2>
        <div className="card-images">
          <img src={props.firstImage} alt="dev tool" />
          {props.secondImage ? <img src={props.secondImage} alt="dev tool" /> : null}
          {props.thirdImage ? <img src={props.thirdImage} alt="dev tool" /> : null}
        </div>
        <div className="button-group">
        {props.website ? 
          <Link to={props.website} target="_blank" rel="noopener noreferrer">
            <LanguageIcon fontSize='large' className='project-link' />
          </Link>
          : null }
          <Link to={props.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize='large' className='project-link' />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
