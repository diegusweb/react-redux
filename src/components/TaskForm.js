import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addTask, editTask} from "../features/tasks/taskSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'

const TaskForm = () => {

  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);
  const [task, settask] = useState({
    title: "",
    description: ""
  })

  const handleChange = e => {
    settask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id){
      dispatch(editTask(task))
      navigate('/');
    }else{
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
      navigate('/');
    }
  }

  useEffect(() => {
    if(params.id)
      settask(tasks.find(task => task.id === params.id));
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='title' value={task.title} onChange={handleChange}/>
      <textarea name='description' placeholder='description' value={task.description} onChange={handleChange}></textarea>
      <button>Save</button>
    </form>
  )
}

export default TaskForm