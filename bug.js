```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Missing Route for nested routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link to="/home/nested">Nested Route</Link>
        </div>
    );
}

function About() {
  return <h1>About</h1>;
}
```