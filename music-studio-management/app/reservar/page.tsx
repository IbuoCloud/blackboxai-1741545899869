"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ReservarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedSala, setSelectedSala] = useState("")
  const [duracion, setDuracion] = useState("")

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-50">
          Reserva tu Sesión
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario de Reserva */}
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sala">Sala</Label>
                <Select value={selectedSala} onValueChange={setSelectedSala}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una sala" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sala-a">Sala A - Grabación Principal</SelectItem>
                    <SelectItem value="sala-b">Sala B - Producción Musical</SelectItem>
                    <SelectItem value="sala-c">Sala C - Ensayo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duracion">Duración</Label>
                <Select value={duracion} onValueChange={setDuracion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona la duración" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 horas</SelectItem>
                    <SelectItem value="4">4 horas</SelectItem>
                    <SelectItem value="6">6 horas</SelectItem>
                    <SelectItem value="8">8 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" placeholder="Tu nombre completo" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" type="tel" placeholder="+34 600 000 000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notas">Notas adicionales</Label>
                <Textarea
                  id="notas"
                  placeholder="Detalles sobre tu proyecto o requerimientos especiales"
                />
              </div>

              <Button className="w-full">
                Confirmar Reserva
              </Button>
            </form>
          </Card>

          {/* Información de Salas */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Sala A - Grabación Principal</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Equipada con la mejor tecnología para grabaciones profesionales. Incluye:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>Consola SSL</li>
                <li>Monitores Adam Audio</li>
                <li>Micrófonos Neumann</li>
                <li>Tratamiento acústico profesional</li>
              </ul>
              <p className="mt-4 font-semibold">Precio: 60€/hora</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Sala B - Producción Musical</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Espacio ideal para producción y post-producción. Incluye:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>Estación de trabajo Pro Tools</li>
                <li>Plugins profesionales</li>
                <li>Monitores Yamaha</li>
                <li>Controladores MIDI</li>
              </ul>
              <p className="mt-4 font-semibold">Precio: 40€/hora</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Sala C - Ensayo</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Sala amplia para ensayos y pre-producción. Incluye:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>Sistema de PA completo</li>
                <li>Backline básico</li>
                <li>Batería acústica</li>
                <li>Amplificadores</li>
              </ul>
              <p className="mt-4 font-semibold">Precio: 25€/hora</p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
