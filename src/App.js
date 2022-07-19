import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing";
import Dashboard from "./dashboard/dashboard";
import About from "./pages/about";
import FAQ from "./pages/faqs";
import Contact from "./pages/contact";
import Signin from "./pages/signin";
import Register from "./pages/register";
import Employer from './employer';
import Favorites from './dashboard/pages/favorites';
import Applied from './dashboard/pages/applied';
import Messages from './dashboard/pages/messages';
import Profile from './dashboard/pages/profile';

// connects to index.js
/** APP.JS:
 *  Used to determine where myprospect.io/PATH leads to
 *  Reference for all links relevant to myprospect.io
 * ROUTING:
 *  To Route to seperate page, wrap component in <Link to={PATH} style={{ textDecoration: 'none' }}> <Link />
 *  with PATH corresponding to the strings shown below. 
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path ='/dashboard' element={<Dashboard />} />
        <Route path ='/dashboard/favorites' element={<Favorites />} />
        <Route path ='/dashboard/applied' element={<Applied />} />
        <Route path ='/dashboard/profile' element={<Profile />} />
        <Route path ='/dashboard/messages' element={<Messages />} />
        <Route path='/about' element={<About />} />
        <Route path='/faqs' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/employer' element={<Employer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
