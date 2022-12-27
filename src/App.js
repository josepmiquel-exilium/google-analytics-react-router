import { Route, Routes } from 'react-router-dom';
import { usePageTracking } from './hooks/usePageTracking';
import './App.css';

function App() {
    usePageTracking();

    return (
        <Routes>
            <Route path="/" element={<h1>Route One</h1>} />
            <Route path="/two" element={<h1>Route Two</h1>} />
            <Route path="/two" element={<h1>Route Three</h1>} />
        </Routes>
    );
}

export default App;
