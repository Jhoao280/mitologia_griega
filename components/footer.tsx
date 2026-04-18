"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg">🏛️</span>
              </div>
              <span className="text-xl font-semibold">Mitología Griega</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              Explorando los puentes entre el pasado y el presente a través de la mitología griega y su conexión con el mundo digital.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/personajes", label: "Personajes" },
                { href: "/mitologia", label: "Mitología" },
                { href: "/reflexiones", label: "Reflexiones" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Temas</h4>
            <ul className="space-y-3">
              {["Cultura Digital", "Justicia Social", "Desarrollo Sostenible"].map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/50 text-sm"
        >
          <p>© 2024 Puentes del Pasado al Presente. Proyecto Educativo.</p>
        </motion.div>
      </div>
    </footer>
  )
}
