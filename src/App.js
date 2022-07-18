import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './components/Users';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />}/>
          <Route path='create-task' element={<TaskForm />}/>
          <Route path='edit-task/:id' element={<TaskForm />}/>
          <Route path='users' element={<Users />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
