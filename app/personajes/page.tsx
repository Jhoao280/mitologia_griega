"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CharacterCard } from "@/components/character-card"
import { Crown, Brain, Skull, Waves, Heart, Sun } from "lucide-react"

const mainCharacters = [
  {
    name: "Zeus",
    title: "Rey de los Dioses",
    description: "Es el dios supremo del Olimpo y gobernante del cielo. Representa el poder, la autoridad y el orden. Es conocido por controlar los rayos y por ser el líder de los dioses. Su figura simboliza la justicia divina, aunque también muestra rasgos humanos como la ira y la ambición.",
    image: "https://images.pexels.com/photos/5209729/pexels-photo-5209729.jpeg?_gl=1*11u5uju*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDQ0NjYkajI2JGwwJGgw",
    icon: Crown,
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    name: "Atenea",
    title: "Diosa de la Sabiduría",
    description: "Diosa de la sabiduría, la estrategia militar y las artes. Es considerada una de las deidades más justas y racionales. Representa la inteligencia y la prudencia, siendo protectora de ciudades como Atenas.",
    image: "https://images.pexels.com/photos/19540364/pexels-photo-19540364.jpeg?_gl=1*f3457y*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDQ2NzgkajgkbDAkaDA.",
    icon: Brain,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Hades",
    title: "Señor del Inframundo",
    description: "Dios del inframundo, encargado de gobernar el reino de los muertos. A diferencia de lo que se suele pensar, no es un dios malvado, sino una figura seria que mantiene el equilibrio entre la vida y la muerte.",
    image: "https://images.pexels.com/photos/23510524/pexels-photo-23510524.jpeg?_gl=1*12yh0p3*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDY5MTMkajYwJGwwJGgw",
    icon: Skull,
    color: "from-slate-500/20 to-gray-500/20"
  },
  {
    name: "Poseidón",
    title: "Dios del Mar",
    description: "Dios del mar, los terremotos y los caballos. Es una deidad poderosa y de carácter impredecible, capaz de causar tormentas o calmar las aguas. Representa la fuerza de la naturaleza.",
    image: "https://images.pexels.com/photos/13963475/pexels-photo-13963475.jpeg?_gl=1*1fuavws*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDQ4NzAkajU5JGwwJGgw",
    icon: Waves,
    color: "from-teal-500/20 to-blue-500/20"
  },
  {
    name: "Afrodita",
    title: "Diosa del Amor",
    description: "Diosa del amor, la belleza y la atracción. Su influencia está relacionada con las emociones humanas y las relaciones afectivas. Simboliza el deseo, la pasión y la armonía.",
    image: "https://images.pexels.com/photos/13779250/pexels-photo-13779250.jpeg?_gl=1*u8xv53*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDcxMjgkajIxJGwwJGgw",
    icon: Heart,
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    name: "Apolo",
    title: "Dios del Sol",
    description: "Dios del sol, la música, la poesía y la profecía. Representa la belleza, el equilibrio y el conocimiento. También es asociado con la medicina y la verdad.",
    image: "https://images.pexels.com/photos/13779250/pexels-photo-13779250.jpeg?_gl=1*u8xv53*_ga*MjMwMTg4MzkzLjE3NzAwNDgxNzc.*_ga_8JE65Q40S6*czE3NzY1MDMxOTYkbzQkZzEkdDE3NzY1MDcxMjgkajIxJGwwJGgw",
    icon: Sun,
    color: "from-orange-500/20 to-yellow-500/20"
  }
]

export default function PersonajesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop"
            alt="Greek statues"
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
              Dioses y Héroes
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Personajes Mitológicos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre las historias de los dioses del Olimpo y los héroes legendarios que dieron forma a la cultura griega
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Characters Grid */}
      <Section>
        <SectionHeader
          eyebrow="Los Dioses del Olimpo"
          title="Deidades Principales"
          description="Los seis dioses más influyentes de la mitología griega y sus historias fascinantes."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCharacters.map((character, index) => (
            <CharacterCard
              key={character.name}
              name={character.name}
              title={character.title}
              description={character.description}
              image={character.image}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Detailed Character Sections */}
      {mainCharacters.map((character, index) => (
        <Section 
          key={character.name} 
          className={index % 2 === 0 ? "bg-secondary/30" : ""}
        >
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`absolute -bottom-4 ${index % 2 === 0 ? "-right-4" : "-left-4"} w-full h-full bg-gradient-to-br ${character.color} rounded-3xl -z-10`} />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <character.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary font-medium tracking-wider uppercase text-sm">
                      {character.title}
                    </p>
                    <h2 className="text-4xl font-bold text-foreground">{character.name}</h2>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {character.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Section>
      ))}

      <Footer />
    </main>
  )
}
