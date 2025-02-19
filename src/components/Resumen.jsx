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
      period: "Jun, 2024 — Sep, 2024 • 3 meses",
      location: "Chile",
      responsibilities: [
        "Desarrollé un microservicio para la integración de un chatbot utilizando PHP, JavaScript y Python.",
        "Colaboré con el equipo de desarrollo para mejorar la integración y eficiencia del sistema.",
        "Realicé pruebas y depuración del código para asegurar su correcto funcionamiento."
      ]
    }
  ];


  return (
    <section id="resume" className="space-y-8">
      <div className="relative">
        {/* Education section */}
        <div className="absolute left-0 top-[28px] h-[calc(100%-28px)] w-[2px] bg-zinc-800">
          {/* Punto principal de la sección */}
          <div className="absolute -left-[5px] -top-[5px] h-3 w-3 rounded-full bg-amber-400"></div>
        </div>
        <div className="pl-8">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Línea vertical para cada elemento */}
                <div className="absolute -left-9 top-[28px] h-3 w-3 rounded-full bg-amber-400"></div>
                <div className="bg-zinc-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-400">{edu.school}</h3>
                  <p className="text-zinc-400">{edu.degree}</p>
                  <p className="text-zinc-500 text-sm">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Experience section */}
        <div className="absolute left-0 top-[28px] h-[calc(100%-28px)] w-[2px] bg-zinc-800">
          {/* Punto principal de la sección */}
          <div className="absolute -left-[5px] -top-[5px] h-3 w-3 rounded-full bg-amber-400"></div>
        </div>
        <div className="pl-8">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Línea vertical para cada elemento */}
                <div className="absolute -left-9 top-[28px] h-3 w-3 rounded-full bg-amber-400"></div>
                <div className="bg-zinc-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-400">{exp.title}</h3>
                  <p className="text-zinc-400">{exp.company}</p>
                  <p className="text-zinc-500 text-sm mb-4">{exp.period} </p>
                  <p className="text-zinc-500 text-sm mb-4"> {exp.location}</p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
