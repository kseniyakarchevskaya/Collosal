import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header/header.tsx'
import Footer from './Footer/footer.tsx'
import Home from './Home/home.tsx'
import Contact from './Contact/contact.tsx'
import Qoute from './Qoute/qoute.tsx'
import Projects from './Projects/projects.tsx'
import Detail from './Detail/detail.tsx'
import Terms from './Terms/terms.tsx'
import Work from './HowWeWork/work.tsx'
import About from './About/about.tsx'
import Blog from './Blog/blog.tsx'
import BlogDetail from './BlogDetail/blogdetail.tsx'
import Services from './Services/services.tsx'
import Servdetail from './Servdetail/servdetail.tsx'
import Component from './Servdetail/Component/component.tsx'
import Pircing from './Pircing/pircing.tsx'
import Faq from './Faq/faq.tsx'
import Error from './Error/error.tsx'
function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route>
            <Route path="/" index element={<Home/>}/>
            <Route path="/contact" index element={<Contact/>}/>
            <Route path="/qoute" index element={<Qoute/>}/>
            <Route path="/projects" index element={<Projects/>}/>
            <Route path="/detail" index element={<Detail/>}/>
            <Route path="/terms" index element={<Terms/>}/>
            <Route path="/work" index element={<Work/>}/>
            <Route path="/about" index element={<About/>}/>
            <Route path="/blog" index element={<Blog/>}/>
            <Route path="/blogdetail/:id" element={<BlogDetail />} />
            <Route path="/services" index element={<Services/>}/>
            <Route path="/servdetail" index element={<Servdetail/>}/>
            <Route path="/component" index element={<Component/>}/>
            <Route path="/pircing" index element={<Pircing/>}/>
            <Route path="/faq" index element={<Faq/>}/>
            <Route path="*" index element={<Error/>}/>
            
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
