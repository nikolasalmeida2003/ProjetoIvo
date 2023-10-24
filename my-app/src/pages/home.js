import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { Button } from 'react-bootstrap';
import style from './home.scss'

function Home() {
  return (
      <header className={style.Appheader}>
        <SideMenu/>
      </header>
  );
}
function SideMenu(){
  return (
    <div className={style.sidemenu}>
      <div className={style.usericon}>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
    </div>
  );
}


export default Home;
