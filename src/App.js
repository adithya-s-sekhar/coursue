import './App.css';
import MainContent from './components/MainContent/MainContent';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';

function App() {
  return (
    <div className="app">
      <SidebarLeft />
      <MainContent />
      <SidebarRight />
    </div>
  );
}

export default App;
