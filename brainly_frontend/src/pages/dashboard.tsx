
import { useState } from 'react';
import '../App.css'
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CreateContentModel } from '../components/CreateContent';
import { PlusIcon } from '../icons/plus_icon';
import { ShareIcon } from '../icons/share_icon';
import { SideBar } from '../components/Sidebar';


function Dashboard() {
  const [modalOpen , setModelOpen] = useState(false);

  return (
    <>
    <div>
      <SideBar/>
    </div>

    <div className='position-relative p-4 ml-72 min-h-screen bg-gray-100 border' >
        <div>

          <CreateContentModel open={modalOpen} onClose={() => {
            setModelOpen(false);
          }}/>

          <div className='flex justify-end gap-4'>
            <Button onClick={()=>{
              setModelOpen(true)
            }} variant="primary" text="text content" startIcon={<PlusIcon/>}/> 
            <Button variant="secondary" text="share brain" startIcon={<ShareIcon/>}/> 
          </div>
          
          <br/>

          <div className='flex gap-4'>
          <Card title='first tweet' type='twitter' link="https://x.com/Cometml/status/1864024806280007837" />
          <Card title='first video' type='youtube' link="https://www.youtube.com/watch?v=ShzMLpqwdsk" />
          </div>

        </div>
    </div>
    

      
    </>
  )
}

export default Dashboard;
