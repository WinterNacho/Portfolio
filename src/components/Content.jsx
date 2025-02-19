import NavBar from './NavBar'
import Resume from './Resumen'
function Content() {

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-3rem)] flex-grow">
      <NavBar />
      <div className="card flex-grow overflow-auto p-10">
        <Resume />
      </div>
    </div>
  )
}
export default Content

