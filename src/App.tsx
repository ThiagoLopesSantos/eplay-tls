import Banner from './componests/Banner'
import Header from './componests/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
