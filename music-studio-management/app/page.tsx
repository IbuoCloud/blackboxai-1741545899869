import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold text-neutral-900 dark:text-neutral-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tu música merece el mejor espacio
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 dark:text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Estudio profesional equipado con la mejor tecnología para dar vida a tus proyectos musicales.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/reservar"
                className="bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                Reservar Ahora
              </Link>
              <Link
                href="/salas"
                className="border border-neutral-900 dark:border-neutral-50 text-neutral-900 dark:text-neutral-50 px-8 py-3 rounded-full font-medium hover:bg-neutral-900 hover:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 transition-colors"
              >
                Ver Salas
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/studio.jpg"
                alt="Estudio Musical"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-neutral-900 dark:text-neutral-50" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-neutral-900 dark:bg-neutral-800 rounded-2xl p-12 text-center">
          <motion.h2 
            className="text-3xl font-bold text-neutral-50 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Listo para empezar tu proyecto?
          </motion.h2>
          <motion.p 
            className="text-neutral-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reserva tu sesión ahora y da el primer paso hacia tu próximo éxito musical.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/reservar"
              className="bg-neutral-50 text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors inline-block"
            >
              Reservar Sesión
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Equipamiento Profesional",
    description: "Contamos con la mejor tecnología y equipos de audio para garantizar la máxima calidad en tus grabaciones.",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        />
      </svg>
    ),
  },
  {
    title: "Ingenieros Expertos",
    description: "Nuestro equipo de profesionales te ayudará a conseguir el sonido perfecto para tu proyecto.",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Flexibilidad Horaria",
    description: "Adaptamos nuestros horarios a tus necesidades para que puedas grabar cuando más te convenga.",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]
