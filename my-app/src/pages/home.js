import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { Button } from 'react-bootstrap';
import style from './home.module.scss'

function Home() {
  return (
      <header className={style.Appheader}>
        <Title/>
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
      <div className={style.button}>
        <Button type="submit">HOME</Button>{' '}
      </div>
    </div>
    

  );
}
function Title(){
  return(
    <div className={style.title}>
      <h1>
        Jogo do Ivo
      </h1>
    </div>
  )
}



export default Home;
