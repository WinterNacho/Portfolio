
import { Github, Linkedin, Twitter, Mail, MapPin} from "lucide-react"

function ProfileSidebar() {
  return (
    <aside className="card card-container p-[1.5rem]">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative w-42 h-42 mb-4">
          <img src={"/me.JPG"} alt="Profile" className="rounded-3xl" />
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Ignacio Muñoz</h1>
        <p className="text-zinc-400">Full Stack Developer</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-zinc-400">
          <Mail className="w-5 h-5" />
          <span>ignaciomu216@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-400">
          <MapPin className="w-5 h-5" />
          <span>Santiago, Chile</span>
        </div>
      </div>

      <div className="flex justify-center gap-4 absolute bottom-6 left-0 right-0">
        <a href="#" className="text-zinc-400 hover:text-amber-400">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-zinc-400 hover:text-amber-400">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-zinc-400 hover:text-amber-400">
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </aside>
  )
}
export default ProfileSidebar