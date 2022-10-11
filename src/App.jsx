import {useState} from 'react'
import {useEffect} from 'react'

import Searcher from './components/Searcher.jsx'
import UtilsBar from './components/UtilsBar.jsx'

function App() {

  const [state, setState] = useState({
    darkModeOn: false
  })

  const toggleDarkMode = () => {
    setState({darkModeOn: !state.darkModeOn})
  }

  useEffect(() => {
    if(state.darkModeOn) {
      document.body.style.backgroundColor = 'var(--bg-dark-mode)'
      document.body.style.color = 'var(--text-dark-mode)'
    } else {
      document.body.style.backgroundColor = 'var(--bg-light-mode)'
      document.body.style.color = 'var(--text-light-mode)'
    }
  }, [state.darkModeOn])



  return (
    <div>
      <UtilsBar toggleDarkModeFunc={toggleDarkMode} darkModeOn={state.darkModeOn}/>
      <Searcher darkModeOn={state.darkModeOn}/>
   </div>
  );
}

export default App;
