import { Book, Briefcase } from "lucide-react"
function Resume() {
  const education = [
    {
      school: "Universidad de Chile",
      degree: "Ingeniería Civil en Computación",
      period: "2020 — Presente"
    },
    {
      school: "Universidad de Chile",
      degree: "Bachiller, mención en Ciencias Naturales y Exactas",
      period: "2019 — 2020"
    }
  ];

  const experience = [
    {
      title: "Software Engineer Intern",
      company: "Wherex",
      period: "Jun, 2024 — Sep, 2024 • 4 meses",
      location: "Chile",
      responsibilities: [
        "Desarrollé un microservicio para la integración de un chatbot utilizando PHP, JavaScript y Python.",
        "Colaboré con el equipo de desarrollo para mejorar la integración y eficiencia del sistema.",
        "Realicé pruebas y depuración del código para asegurar su correcto funcionamiento."
      ]
    }
  ];


  return (
    <div>
      {/* Education Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Book className="text-white" size={24} />
          <h2 className="text-2xl font-bold">Educación</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-800"></div>

          {education.map((item, index) => (
            <div key={index} className="mb-8 relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-yellow-500 z-10"></div>
              <h3 className="text-lg font-semibold">{item.institution}</h3>
              <p className="text-gray-300 mt-1">{item.degree}</p>
              <p className="text-yellow-500 mt-1 font-medium">{item.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-white" size={24} />
          <h2 className="text-2xl font-bold">Experiencia</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-800"></div>

          {experience.map((item, index) => (
            <div key={index} className="mb-8 relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-yellow-500 z-10"></div>
              <h3 className="text-lg font-semibold">{item.position}</h3>
              <p className="text-gray-300 mt-1">{item.company}</p>
              <p className="text-yellow-500 mt-1 font-medium">{item.period}</p>
              <p className="text-gray-300 mt-1">{item.location}</p>

              <ul className="mt-3 space-y-2">
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume
