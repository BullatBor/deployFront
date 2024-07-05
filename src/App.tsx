import './App.css';
import { Header } from './widgets/Header';
import styles from './test.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles['back']}></div>
    </>
  );
}

export default App;
