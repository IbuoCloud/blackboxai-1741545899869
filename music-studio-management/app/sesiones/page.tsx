"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Datos de ejemplo - En producción vendrían de la base de datos
const sesionesEjemplo = [
  {
    id: "1",
    fecha: "2024-03-15",
    hora: "10:00",
    duracion: "2 horas",
    sala: "Sala A",
    cliente: "Juan Pérez",
    estado: "confirmada",
  },
  {
    id: "2",
    fecha: "2024-03-15",
    hora: "14:00",
    duracion: "4 horas",
    sala: "Sala B",
    cliente: "María García",
    estado: "pendiente",
  },
  {
    id: "3",
    fecha: "2024-03-16",
    hora: "11:00",
    duracion: "3 horas",
    sala: "Sala C",
    cliente: "Carlos López",
    estado: "completada",
  },
]

export default function SesionesPage() {
  const [sesiones] = useState(sesionesEjemplo)

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
            Sesiones de Grabación
          </h1>
          <Button>
            Nueva Sesión
          </Button>
        </div>

        <Card className="p-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Hora</TableHead>
                  <TableHead>Duración</TableHead>
                  <TableHead>Sala</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sesiones.map((sesion) => (
                  <TableRow key={sesion.id}>
                    <TableCell>{sesion.fecha}</TableCell>
                    <TableCell>{sesion.hora}</TableCell>
                    <TableCell>{sesion.duracion}</TableCell>
                    <TableCell>{sesion.sala}</TableCell>
                    <TableCell>{sesion.cliente}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          sesion.estado === "confirmada"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : sesion.estado === "pendiente"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {sesion.estado.charAt(0).toUpperCase() + sesion.estado.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          Cancelar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Sesiones Pendientes</h3>
            <p className="text-3xl font-bold text-yellow-600">2</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Sesiones Confirmadas</h3>
            <p className="text-3xl font-bold text-green-600">5</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Sesiones Completadas</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
