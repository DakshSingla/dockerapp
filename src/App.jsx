import './App.css'

function App() {

  return (
    <div>
      <h1>Welcome to my react production house</h1>
      <form className='form' centered="true">
        <label htmlFor="name">Name:</label>
        <input type='text' id='name' name='name'/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App
