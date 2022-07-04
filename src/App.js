import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import FAQ from "./pages/faqs";
import Contact from "./pages/contact";


/** APP.JS:
 *  Used to determine where myprospect.io/PATH leads to
 *  Reference for all links relevant to myprospect.io
 * ROUTING:
 *  To Route to seperate page, wrap component in <Link to={PATH}> <Link />
 *  with PATH corresponding to the strings shown below. 
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path ='./dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/faqs' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
