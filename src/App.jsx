import FinalFooter from "./components/FinalFooter"
import FirstFooter from "./components/FirstFooter"
import MainContent from "./components/MainContent"
import MainHeader from "./components/MainHeader"

function App() {
  return (
    <>
      <div className="container">
        <MainHeader />
        <div className="blue-backgroung"><MainContent /></div>
        <div className="image-background"><FirstFooter /></div>
        <div className="social"><FinalFooter /></div>
      </div>
    </>
  )
}

export default App
