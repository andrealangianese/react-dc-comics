import FinalFooter from "./components/FinalFooter"
import FirstFooter from "./components/FirstFooter"
import MainContent from "./components/MainContent"
import MainHeader from "./components/MainHeader"
import ComicsList from "./components/MainComic"

function App() {
  return (
    <>
      <div className="full-screen">
        <MainHeader />
        <div className="full-screen"><ComicsList /></div>
        <div className="blue-backgroung"><MainContent /></div>
        <div className="image-background"><FirstFooter /></div>
        <div className="social"><FinalFooter /></div>
      </div>
    </>
  )
}

export default App
