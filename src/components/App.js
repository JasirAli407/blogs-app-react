import { Routes, Route } from 'react-router-dom';
import { Home, Navbar, PostDetails, CreatePost } from './';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
