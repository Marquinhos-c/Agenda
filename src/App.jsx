import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Cadastro } from './components/Cadastro';
import { Consulta } from './components/Consulta';

import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


export default function App() {
  return (
  <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='cadastro' element={<Cadastro/>}/>
          <Route path='consulta' element={<Consulta/>}/>
        </Routes>
      </main>
    </div>
  </div>
  );
}