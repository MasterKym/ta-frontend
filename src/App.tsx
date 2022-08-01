import { Login, Settings } from 'components';
import { Route, Routes } from 'react-router-dom';
import 'styles/globals.scss';
function App() {
  return (
    <div className="App w-full h-full">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={'404'} />
      </Routes>
    </div>
  );
}

export default App;
