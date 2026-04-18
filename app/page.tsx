"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader, FeatureCard } from "@/components/section"
import { ScrollReveal, ScaleIn } from "@/components/scroll-reveal"
import { BookOpen, Users, Lightbulb, ArrowRight, Sparkles, Globe, Scale } from "lucide-react"

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Cultura Digital",
    description: "Exploramos cómo la tecnología transforma nuestra forma de comunicar, aprender y construir identidad en el mundo moderno."
  },
  {
    icon: <Scale className="w-6 h-6 text-primary" />,
    title: "Justicia Social",
    description: "Analizamos los principios de igualdad y equidad que conectan la sabiduría antigua con los desafíos contemporáneos."
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Desarrollo Sostenible",
    description: "Reflexionamos sobre el equilibrio entre progreso y preservación, inspirados en la armonía de los antiguos griegos."
  }
]

const characters = [
  { name: "Zeus", image: "https://images.pexels.com/photos/5209729/pexels-photo-5209729.jpeg?_gl=1*11u5uju*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDQ0NjYkajI2JGwwJGgw"},
  { name: "Atenea", image: "https://images.pexels.com/photos/19540364/pexels-photo-19540364.jpeg?_gl=1*f3457y*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDQ2NzgkajgkbDAkaDA." },
  { name: "Poseidón", image: "https://images.pexels.com/photos/13963475/pexels-photo-13963475.jpeg?_gl=1*1fuavws*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDQ4NzAkajU5JGwwJGgw" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&h=1080&fit=crop"
            alt="Ancient Greek Temple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
            >
              Proyecto Educativo
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance leading-tight">
              Puentes del Pasado{" "}
              <span className="text-primary">al Presente</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              La cultura clásica y el mundo digital unidos en una exploración de sabiduría atemporal
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/personajes"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Explorar Personajes
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/mitologia"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground rounded-full font-medium hover:bg-muted transition-colors border border-border"
                >
                  Descubrir Mitología
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/mito.jpeg"
                  alt="Infografia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Introducción
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              La Mitología Griega
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La mitología griega es un conjunto de relatos, creencias y tradiciones que pertenecen a la antigua Grecia. Estas historias explican el origen del mundo, los fenómenos naturales y el comportamiento humano a través de dioses, héroes y seres míticos.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A pesar de haber surgido hace miles de años, la mitología griega sigue teniendo una gran influencia en la actualidad, especialmente en áreas como la cultura digital, la justicia social y el desarrollo sostenible.
            </p>
            <Link
              href="/mitologia"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Explorar más
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-secondary/50">
        <SectionHeader
          eyebrow="Temas Principales"
          title="Conexiones con el Mundo Actual"
          description="Descubre cómo la sabiduría antigua se conecta con los desafíos y oportunidades de nuestro tiempo."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </Section>

      {/* Characters Preview */}
      <Section>
        <SectionHeader
          eyebrow="Dioses del Olimpo"
          title="Personajes Mitológicos"
          description="Conoce a los dioses, héroes y seres míticos que dieron forma a la cultura griega."
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {characters.map((char, index) => (
            <ScaleIn key={char.name} delay={index * 0.15}>
              <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground">{char.name}</h3>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
        
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/personajes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Ver Todos los Personajes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1920&h=600&fit=crop"
            alt="Greek columns"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <ScrollReveal>
          <div className="text-center py-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Explora las Reflexiones
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Descubre cómo la mitología griega nos ayuda a reflexionar sobre la cultura digital, la justicia social y el desarrollo sostenible.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/reflexiones"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Leer Reflexiones
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </Section>

      <Footer />
    </main>
  )
}
