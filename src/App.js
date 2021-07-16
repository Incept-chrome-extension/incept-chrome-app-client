import './App.css';
import { useContext } from 'react';
import DataContext from './components/contexts/DataContext';
import Time from './components/Time';
import BackgroundCredit from './components/BackgroundCredit';
import TodoContainer from './components/TodoContainer';
import QuickLinksContainer from './components/QuickLinksContainer';

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
      <TodoContainer />
      <QuickLinksContainer />
      <BackgroundCredit />
    </div>
  );
}

export default App;
