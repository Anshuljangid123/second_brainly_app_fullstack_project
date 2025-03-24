import { Button } from "../components/ui/Button"
import './App.css'
import { PlusIcon } from "./icons/plus_icon";
import { ShareIcon } from "./icons/share_icon";

function App() {

  return (
    <>
      <Button 
        startIcon={<PlusIcon size="md"/>} 
        endIcon={<ShareIcon size="md"/>}
        variant="primary" 
        size="sm" 
        text="Share" 
        onClick={() => {}} 
      />
      <Button 
        startIcon={<PlusIcon size="md"/>} 
        endIcon={<ShareIcon size="md"/>}
        variant="secondary" 
        size="lg" 
        text="add content" 
        onClick={() => {}} 
      />
      <Button 
        startIcon={<PlusIcon size="md"/>} 
        endIcon={<ShareIcon size="md"/>}
        variant="primary" 
        size="md" 
        text="add content 2" 
        onClick={() => {}} 
      />

    </>
  )
}

export default App;
