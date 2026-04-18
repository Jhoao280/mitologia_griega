"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CharacterCardProps {
  name: string
  title: string
  description: string
  image: string
  index: number
}

export function CharacterCard({ name, title, description, image, index }: CharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Gold accent line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
        <p className="text-primary text-sm font-medium mb-1 tracking-wider uppercase">
          {title}
        </p>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
