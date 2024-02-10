import AdminPanel from "./Pages/AdminPanel";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/AdminPanel"  element={<AdminPanel />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
