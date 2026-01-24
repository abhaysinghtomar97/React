import React, { useState } from 'react'
import Note from './components/Note'


function App() {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [task, settask] = useState([])

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    settask(copyTask)
    
  }
  return (
    <div>
      <div className="container  flex flex-col h-auto lg:flex-row lg:w-auto bg-black  ">

        <div className="addNotes  p-2 lg:w-1/2">
          <h2 className=" p-2 text-white text-xl ">Add Notes</h2>
          <form onSubmit={(e) => {
            e.preventDefault()

            const copyTask = [...task]
            copyTask.push({ title, desc })
            localStorage.setItem('Task', JSON.stringify(copyTask))

            settask(copyTask)

            setTitle('')
            setDesc('')
          }
          }
            className="flex flex-col gap-2 p-3 ">
            <input
              className="border-white p-2 border text-white rounded"
              type='text'
              value={title}
              placeholder="Enter title"
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <textarea
              className='border-white p-2 h-40 border text-white  rounded'
              placeholder="Enter Notes"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value)
              }}
            />
            <button className="bg-white h-8 active:scale-95 rounded text-xl">Add</button>
          </form>
        </div>
        <div className="recentNotes border-white border-t-2 h-screen overflow-auto lg:border-l-2 lg:border-t-0 lg:w-1/2 ">
          <h2 className=" p-2 text-white text-xl ">Recent Notes</h2>
          <div className="notes m-3 h-fit flex flex-wrap p-2  gap-2 ">
            {task.map((elem, idx) => (
              <Note
                key={idx}
                id={idx}
                title={elem.title}
                details={elem.desc}
                deleteNote={deleteNote}
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
