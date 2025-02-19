function AboutMe() {
  const services = [
    {
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 16.5V21.5M12 16.5C14.357 16.5 16.5 14.357 16.5 12M12 16.5C9.643 16.5 7.5 14.357 7.5 12M12 21.5C9.643 21.5 7.5 19.357 7.5 17M12 21.5C14.357 21.5 16.5 19.357 16.5 17M7.5 12C7.5 9.643 9.643 7.5 12 7.5M7.5 12V17M16.5 12C16.5 9.643 14.357 7.5 12 7.5M16.5 12V17M12 7.5C14.357 7.5 16.5 5.357 16.5 3M12 7.5C9.643 7.5 7.5 5.357 7.5 3M12 2.5V7.5M7.5 3H16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Mobile Apps",
      description: "Professional development of applications for Android and iOS.",
    },
    {
      icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
    },
  ]
  return (
    <div id="about" className="card flex-grow overflow-auto">
      <div className="p-8 space-y-12">
        <section id="about">
          <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
          <div className="space-y-4 text-zinc-400">
            <p>
              Soy estudiante de Ingeniería Civil en Computación, apasionado por la tecnología y la resolución de problemas complejos.
              Me gusta aplicar mis conocimientos en programación y algoritmos para desarrollar soluciones innovadoras y eficientes.
              Busco contribuir a proyectos desafiantes que generen impacto y valor.
            </p>

          </div>
        </section>

        <section id="services">
          <h2 className="text-3xl font-bold mb-6">What I&apos;m Doing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-900/50 p-6 rounded-xl">
                <service.icon className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutMe
