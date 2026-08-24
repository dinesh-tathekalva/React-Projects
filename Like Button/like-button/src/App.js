import './App.css';
import LikeButton from './Components/LikeButton';
import ContentTabs from './Components/ContentTabs';
import contents from './Components/content.json';

function App() {
  return (
    <div className="App">
     {/* <LikeButton></LikeButton> */}
     <ContentTabs contents = {contents}/>
    </div>
  );
}

export default App;
