import './App.css';
import { useContext } from 'react';
import { RiExchangeLine } from 'react-icons/ri';
import DataContext from './components/contexts/DataContext';
import Time from './components/Time';

function App() {
  const data = useContext(DataContext);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${data.backgroundImageUrl})`,
      }}
    >
      <Time />
      <RiExchangeLine size={24} onClick={data.changeBg} style={{ zIndex: 99 }} />
    </div>

  );
}

export default App;
