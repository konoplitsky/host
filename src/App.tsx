import './App.css';
import { Link } from 'react-router-dom';
import useStore from '@happycode-core/counter-store';
import { ContactsPage } from './shared/ui/remoteComponents/ContactsPage.tsx';

const App = () => {
  const { count, increment } = useStore();

  return (
    <div className='mf-host-page'>
      <section className='mf-host-card'>
        <h1 className='mf-host-title'>HOST</h1>
        <Link className='mf-host-link' to='/remote'>
          Перейти на remote страницу
        </Link>
        <div className='mf-host-counter'>Счетчик: {count}</div>
        <button className='mf-host-button' onClick={increment} type='button'>
          +
        </button>
      </section>

      <section className='mf-remote-slot'>
        <ContactsPage />
      </section>
    </div>
  );
};

export default App;
