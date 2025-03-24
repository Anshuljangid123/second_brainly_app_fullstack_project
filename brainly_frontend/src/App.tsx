import { Button } from "../components/ui/Button"
import './App.css'
import { PlusIcon } from "./icons/plus_icon";

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon/>} variant="primary" size="sm" text="Share" onClick={() => {}} />
      <Button variant ="secondary" size="md" text="Add Content" onClick={() => {}} />
      <Button variant ="secondary" size="lg" text="Add Content2" onClick={() => {}} />

    </>
  )
}

export default App;
