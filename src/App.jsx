import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Footer from './components/Footer'


function App() {

  return (
    <div className='bodyd'>
      <Header />
      <Main/>
      <div className='fon'>
      <Section1/>
      <Section2/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
