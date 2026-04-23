"use client";

import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader, FeatureCard } from "@/components/section"
import { ScrollReveal, ScaleIn } from "@/components/scroll-reveal"
import { BookOpen, Users, Lightbulb, ArrowRight, Sparkles, Globe, Scale } from "lucide-react"

export default function IliadaSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          La Ilíada
        </motion.h1>

        {/* Introducción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-center max-w-3xl mx-auto mb-14"
        >
          La Ilíada es una epopeya atribuida a Homero, ambientada en la Guerra de Troya. 
          La obra se centra en la cólera de Aquiles y sus consecuencias en el conflicto.
        </motion.p>

        {/* Grid de contenido */}
        <div className="grid md:grid-cols-2 gap-8">

          <Card title="Conflicto Principal">
            La historia gira en torno a la disputa entre Aquiles y Agamenón. 
            La retirada de Aquiles debilita a los griegos y permite el avance de los troyanos liderados por Héctor.
          </Card>

          <Card title="Intervención de los Dioses">
            Los dioses del Olimpo participan activamente en la guerra, influyendo en el destino de los mortales 
            y tomando partido en ambos bandos.
          </Card>

          <Card title="Desarrollo de Aquiles">
            Aquiles evoluciona desde una ira destructiva hacia una visión más humana del sufrimiento, 
            especialmente tras la muerte de Patroclo.
          </Card>

          <Card title="Importancia">
            Esta obra es fundamental en la literatura universal por su riqueza narrativa, su profundidad 
            temática y su influencia en la cultura occidental.
          </Card>

        </div>

        {/* Temas */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Temas Principales
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Honor",
              "Gloria",
              "Ira",
              "Venganza",
              "Muerte",
              "Fragilidad humana",
              "Consecuencias de la guerra",
            ].map((tema, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="px-5 py-2 bg-white rounded-full shadow-md border"
              >
                {tema}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* Componente Card reutilizable */
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm leading-relaxed">{children}</p>
    </motion.div>
  );
}
