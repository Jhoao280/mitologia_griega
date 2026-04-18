"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { ScrollReveal, ScaleIn } from "@/components/scroll-reveal"
import { Monitor, Scale, Leaf, Quote, Lightbulb, Heart, Globe, Shield, Users, Recycle } from "lucide-react"

const reflections = [
  {
    id: "digital",
    icon: Monitor,
    title: "Cultura Digital",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    content: `La cultura digital se refiere al conjunto de prácticas, valores y formas de interacción que surgen a partir del uso de tecnologías como internet, redes sociales y dispositivos electrónicos. Ha transformado la manera en que las personas se comunican, aprenden, trabajan y construyen su identidad.

Hoy en día, la información circula de forma rápida y masiva, lo que facilita el acceso al conocimiento, pero también genera riesgos como la desinformación, el ciberacoso y la pérdida de privacidad.`,
    reflection: "La cultura digital no solo implica saber usar la tecnología, sino hacerlo con conciencia y ética. Es necesario desarrollar un pensamiento crítico para analizar la información que consumimos y compartimos. Además, debemos entender que nuestras acciones en el entorno digital tienen impacto real en otras personas.",
    points: [
      { icon: Shield, text: "Uso responsable de la tecnología" },
      { icon: Lightbulb, text: "Pensamiento crítico digital" },
      { icon: Users, text: "Impacto en las relaciones" },
    ]
  },
  {
    id: "justice",
    icon: Scale,
    title: "Justicia Social",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    content: `La justicia social es un principio que busca garantizar la igualdad de derechos, oportunidades y condiciones de vida dignas para todas las personas. Implica eliminar las desigualdades sociales, económicas y culturales que afectan a ciertos grupos, promoviendo la inclusión y el respeto a la diversidad.`,
    reflection: "La justicia social no es solo responsabilidad de los gobiernos, sino también de cada individuo. Nuestras acciones cotidianas pueden contribuir a una sociedad más equitativa.",
    points: [
      { icon: Heart, text: "Igualdad de derechos" },
      { icon: Users, text: "Inclusión y diversidad" },
      { icon: Scale, text: "Responsabilidad individual" },
    ]
  },
  {
    id: "sustainable",
    icon: Leaf,
    title: "Desarrollo Sostenible",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
    content: `El desarrollo sostenible busca satisfacer las necesidades actuales sin comprometer los recursos de las futuras generaciones. Se basa en el equilibrio entre el crecimiento económico, el cuidado del medio ambiente y el bienestar social.`,
    reflection: "Adoptar un estilo de vida sostenible implica tomar decisiones responsables en nuestro día a día y comprender que nuestras acciones tienen un impacto global.",
    points: [
      { icon: Globe, text: "Impacto global de nuestras acciones" },
      { icon: Recycle, text: "Equilibrio con el medio ambiente" },
      { icon: Users, text: "Bienestar de futuras generaciones" },
    ]
  }
]

export default function ReflexionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop"
            alt="Thinking statue"
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
              Conexiones con el Presente
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Reflexiones
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explorando cómo la sabiduría antigua ilumina los desafíos contemporáneos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La mitología griega, con sus historias de dioses, héroes y criaturas fantásticas, nos ofrece una ventana única para reflexionar sobre temas que siguen siendo relevantes en nuestra sociedad actual. A través de estos relatos ancestrales, podemos encontrar sabiduría aplicable a la cultura digital, la justicia social y el desarrollo sostenible.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Reflection Cards */}
      {reflections.map((reflection, index) => (
        <Section 
          key={reflection.id} 
          id={reflection.id}
          className={index % 2 === 1 ? "bg-secondary/30" : ""}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                {/* Header Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-br ${reflection.color} p-8 rounded-3xl border ${reflection.borderColor} mb-8`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${reflection.iconBg} flex items-center justify-center mb-6`}>
                    <reflection.icon className={`w-8 h-8 ${reflection.iconColor}`} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {reflection.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {reflection.content}
                  </p>
                </motion.div>

                {/* Key Points */}
                <div className="grid grid-cols-3 gap-4">
                  {reflection.points.map((point, pointIndex) => (
                    <ScaleIn key={pointIndex} delay={pointIndex * 0.1}>
                      <div className="bg-card p-4 rounded-2xl shadow-md border border-border/50 text-center">
                        <div className={`w-10 h-10 mx-auto rounded-xl ${reflection.iconBg} flex items-center justify-center mb-3`}>
                          <point.icon className={`w-5 h-5 ${reflection.iconColor}`} />
                        </div>
                        <p className="text-sm text-muted-foreground">{point.text}</p>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {/* Reflection Quote */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card p-8 pt-12 rounded-3xl shadow-xl border border-border/50"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-4">Reflexión</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                      {`"${reflection.reflection}"`}
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${reflection.iconBg} flex items-center justify-center`}>
                          <Lightbulb className={`w-6 h-6 ${reflection.iconColor}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Aplicación Práctica</p>
                          <p className="text-sm text-muted-foreground">Sabiduría para el día a día</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Section>
      ))}

      {/* Connection Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&h=600&fit=crop"
            alt="Greek temple"
            fill
            className="object-cover opacity-10"
          />
        </div>
        
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
              El Puente Entre Dos Mundos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La mitología griega nos recuerda que las preguntas fundamentales sobre la existencia humana, la justicia y nuestro lugar en el cosmos son eternas. Al estudiar estos relatos antiguos, no solo aprendemos sobre el pasado, sino que encontramos herramientas para navegar los desafíos del presente y construir un futuro más consciente y equitativo.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Monitor, label: "Tecnología Consciente", desc: "Usar la tecnología con ética y responsabilidad" },
                { icon: Scale, label: "Equidad Universal", desc: "Trabajar por una sociedad más justa para todos" },
                { icon: Leaf, label: "Armonía Natural", desc: "Vivir en equilibrio con nuestro planeta" },
              ].map((item, index) => (
                <ScaleIn key={index} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-card p-8 rounded-3xl shadow-lg border border-border/50"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Footer />
    </main>
  )
}
