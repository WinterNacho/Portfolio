import './App.css'
import Content from './components/Content'
import ProfileSidebar from './components/ProfileSidebar'

function App() {
  return (
    <div className="flex m-6 gap-6 ">
      <ProfileSidebar />
      <Content />
    </div>
  )
}

export default App
