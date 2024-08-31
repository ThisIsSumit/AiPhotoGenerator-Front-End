
import React ,{useState} from 'react';
import './App.css';
import ImageGenerator from './components/imageGenerator';
import ChatComponent from './components/chatComponent';
import RecipeGenerator from './components/recipeGenerator';


function App() {
  const[activeTap,setActiveTab ]=useState('image-generator');

  const handleTabChange=(tab)=>{
     
      setActiveTab(tab);
  }
  return (
    <div className="App">

      <button 
       className={activeTap==='image-generator'? 'active': ''}
       onClick={()=>handleTabChange('image-generator')}> Image generator</button>
      <button 
       className={activeTap==='chat'? 'active': ''}
       onClick={()=>handleTabChange('chat')}>chat</button>
      <button  
       className={activeTap==='recipe-generator'? 'active': ''}
      onClick={()=>handleTabChange('recipe-generator')}>Recipe Generator</button>
    <div>
      {activeTap === 'image-generator' && <ImageGenerator/>}
      {activeTap === 'chat' && <ChatComponent/>}
      {activeTap === 'recipe-generator' && <RecipeGenerator/>}

       </div>
    </div>
  );
}

export default App;


