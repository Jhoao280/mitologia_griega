"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { ScrollReveal, ScaleIn } from "@/components/scroll-reveal"
import { Sparkles, Crown, Swords, Ghost, BookOpen, ChevronRight } from "lucide-react"

const cosmogony = [
  { name: "Caos", description: "Estado inicial del universo (vacío)" },
  { name: "Gea (Tierra)", description: "Origen de la vida" },
  { name: "Urano (Cielo)", description: "Se une con Gea" },
  { name: "Titanes", description: "Hijos de Gea y Urano" },
  { name: "Cronos", description: "Líder de los Titanes" },
  { name: "Zeus", description: "Derrota a Cronos" },
  { name: "Dioses Olímpicos", description: "Gobiernan el mundo desde el Olimpo" },
]

const olympianGods = [
  { name: "Zeus", role: "Dios del cielo y rey de los dioses" },
  { name: "Hera", role: "Diosa del matrimonio y la familia" },
  { name: "Poseidón", role: "Dios del mar" },
  { name: "Hades", role: "Dios del inframundo" },
  { name: "Atenea", role: "Diosa de la sabiduría" },
  { name: "Ares", role: "Dios de la guerra" },
  { name: "Afrodita", role: "Diosa del amor y la belleza" },
  { name: "Apolo", role: "Dios del sol, la música y las artes" },
  { name: "Artemisa", role: "Diosa de la caza" },
  { name: "Hermes", role: "Mensajero de los dioses" },
]

const heroes = [
  { name: "Heracles (Hércules)", feat: "Famoso por sus doce trabajos" },
  { name: "Perseo", feat: "Derrotó a Medusa" },
  { name: "Teseo", feat: "Venció al Minotauro" },
  { name: "Aquiles", feat: "Héroe de la guerra de Troya" },
  { name: "Odiseo", feat: "Protagonista de un largo viaje lleno de desafíos" },
]

const creatures = [
  { name: "Minotauro", description: "Criatura con cuerpo humano y cabeza de toro" },
  { name: "Medusa", description: "Convertía en piedra con la mirada" },
  { name: "Cíclopes", description: "Gigantes de un solo ojo" },
  { name: "Centauros", description: "Mitad hombre, mitad caballo" },
  { name: "Sirenas", description: "Atraían con su canto a los marineros" },
]

const characteristics = [
  "Explica fenómenos naturales y el origen del mundo",
  "Transmite enseñanzas morales",
  "Los dioses tienen forma y emociones humanas",
  "Intervienen en la vida de los seres humanos",
  "Refleja valores y creencias de la sociedad griega",
]

export default function MitologiaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1920&h=800&fit=crop"
            alt="Ancient Greek columns"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Sistema de Creencias
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Mitología Griega
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un sistema de creencias que explica el origen del mundo y la existencia humana mediante relatos simbólicos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cosmogony Section */}
      <Section>
        <SectionHeader
          eyebrow="Origen del Mundo"
          title="Cosmogonía"
          description="La historia de cómo surgió el universo según los antiguos griegos."
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-8">
            {cosmogony.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.1}>
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 inline-block"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center shrink-0 hidden md:flex">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Olympian Gods */}
      <Section className="bg-secondary/30">
        <SectionHeader
          eyebrow="Los Doce Olímpicos"
          title="Dioses Principales del Olimpo"
          description="Las deidades que gobiernan desde la cima del Monte Olimpo."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {olympianGods.map((god, index) => (
            <ScaleIn key={god.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Crown className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{god.name}</h3>
                <p className="text-sm text-muted-foreground">{god.role}</p>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </Section>

      {/* Heroes Section */}
      <Section>
        <SectionHeader
          eyebrow="Leyendas Inmortales"
          title="Héroes Importantes"
          description="Los mortales que alcanzaron la gloria a través de sus hazañas legendarias."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {heroes.map((hero, index) => (
            <ScrollReveal key={hero.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-[3/4] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Swords className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2">{hero.name}</h3>
                  <p className="text-sm text-muted-foreground">{hero.feat}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Mythical Creatures */}
      <Section className="bg-secondary/30">
        <SectionHeader
          eyebrow="Seres Fantásticos"
          title="Criaturas Míticas"
          description="Los seres extraordinarios que poblaban el mundo de los mitos griegos."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {creatures.map((creature, index) => (
            <ScrollReveal key={creature.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border/50 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center mb-4">
                  <Ghost className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{creature.name}</h3>
                <p className="text-sm text-muted-foreground">{creature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Characteristics */}
<Section>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    <ScrollReveal direction="left">
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/linea.png"
          alt="linea de tiempo"
          fill
          className="object-contain"
        />
      </div>
    </ScrollReveal>
    
    <ScrollReveal direction="right">
      <div>
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
          Elementos Distintivos
        </p>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Características de la Mitología
        </h2>
        
        <div className="space-y-4">
          {characteristics.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ChevronRight className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">{char}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollReveal>

  </div>
</Section>
      <Footer />
    </main>
  )
}
