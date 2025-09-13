import './App.css';
import { Greeting } from './components/Greeting/Greeting';
import { Message } from './components/Message/Message';
import { Button } from './components/Button/Button';
function App() {
  return (
    <div className="App">
      <Greeting name="Dima" />
      <Message text="14" />
      <Button onClick={() => alert('Clicked!')} />
    </div>
  );
}
export default App;