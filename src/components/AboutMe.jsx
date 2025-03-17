import { Smartphone, Code, Gamepad, Database } from "lucide-react"
function AboutMe() {
  const servicesData = [
    {
      title: "Desarrollo Web",
      description: "Creación de sitios web de alta calidad a nivel profesional.",
      icon: Code,
      iconColor: "text-yellow-500",
    },
    {
      title: "Desarrollo Backend",
      description: "Servicios backend optimizados para alto rendimiento y escalabilidad.",
      icon: Database,
      iconColor: "text-yellow-500",
    },
    {
      title: "Desarrollo de Videojuegos",
      description: "Proyectos de videojuegos como hobby.",
      icon: Gamepad,
      iconColor: "text-yellow-500",
    },
    {
      title: "Aplicaciones Móviles",
      description: "Desarrollo de apps para Android e iOS.",
      icon: Smartphone,
      iconColor: "text-yellow-500",
    },
  ];
  return (
    <div className="space-y-12">
      <section id="about">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <div className="space-y-4 text-zinc-400">
          <p>
            ¡Hola! Soy Ignacio Muñoz, ingeniero en computación con una gran pasión por la tecnología y la resolución de problemas.
            Me encanta desarrollar software y optimizar algoritmos.
            Aquí encontrarás mis proyectos, experiencia y lo que me motiva en el mundo de la tecnología.
          </p>

        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8">Lo que estoy haciendo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-[#141414] rounded-lg p-6 border border-gray-800 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-md">
                  <service.icon className={`${service.iconColor} w-8 h-8`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutMe
