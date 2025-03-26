
import './App.css'
import { Button } from './components/Button';
import { PlusIcon } from './icons/plus_icon';
import { ShareIcon } from './icons/share_icon';


function App() {

  return (
    <>

      <Button variant="primary" text="text content" startIcon={<PlusIcon/>}/> 
      <Button variant="secondary" text="share brain" startIcon={<ShareIcon/>}/> 

    </>
  )
}

export default App;
