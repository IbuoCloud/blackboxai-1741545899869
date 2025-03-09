"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const salas = [
  {
    id: "sala-a",
    nombre: "Sala A - Grabación Principal",
    descripcion: "Estudio principal equipado con la mejor tecnología para grabaciones profesionales.",
    imagen: "/images/sala-a.jpg",
    precio: 60,
    equipamiento: [
      "Consola SSL AWS 948",
      "Monitores Adam Audio S3X-H",
      "Micrófonos Neumann U87, U47",
      "Previos Neve 1073",
      "Pro Tools HDX",
      "Tratamiento acústico profesional",
    ],
    metros: 45,
    capacidad: "Hasta 8 músicos",
  },
  {
    id: "sala-b",
    nombre: "Sala B - Producción Musical",
    descripcion: "Espacio ideal para producción y post-producción musical.",
    imagen: "/images/sala-b.jpg",
    precio: 40,
    equipamiento: [
      "Estación Pro Tools Ultimate",
      "Monitores Yamaha HS8",
      "Interface Universal Audio Apollo x8",
      "Controlador MIDI Arturia KeyLab 88",
      "Plugins profesionales",
    ],
    metros: 25,
    capacidad: "Hasta 3 personas",
  },
  {
    id: "sala-c",
    nombre: "Sala C - Ensayo",
    descripcion: "Sala amplia para ensayos y pre-producción.",
    imagen: "/images/sala-c.jpg",
    precio: 25,
    equipamiento: [
      "Sistema PA QSC K12.2",
      "Batería Pearl Masters",
      "Amplificador Marshall JCM800",
      "Amplificador Fender Twin Reverb",
      "Micrófonos Shure SM57, SM58",
    ],
    metros: 50,
    capacidad: "Hasta 6 músicos",
  },
]

export default function SalasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-50">
          Nuestras Salas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salas.map((sala, index) => (
            <motion.div
              key={sala.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-neutral-900">
                    {/* Placeholder para cuando no hay imagen */}
                    <div className="h-full flex items-center justify-center text-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{sala.nombre}</h2>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {sala.descripcion}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Equipamiento:</h3>
                      <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-300">
                        {sala.equipamiento.map((equipo) => (
                          <li key={equipo}>{equipo}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">
                          {sala.metros}m² · {sala.capacidad}
                        </p>
                        <p className="text-xl font-bold mt-1">
                          {sala.precio}€/hora
                        </p>
                      </div>
                      <Button>
                        Reservar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sección de Información Adicional */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Equipamiento Premium</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Trabajamos con las mejores marcas y mantenemos nuestro equipo actualizado y en perfectas condiciones.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Soporte Técnico</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Contamos con ingenieros de sonido profesionales para asistirte durante tu sesión.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Ambiente Profesional</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Espacios diseñados acústicamente y climatizados para tu máxima comodidad.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
