"use client"

import { ReactNode } from "react"
import { ScrollReveal } from "./scroll-reveal"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, title, description, centered = true }: SectionHeaderProps) {
  return (
    <ScrollReveal className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
        {title}
      </h2>
      {description && (
        <p className={`text-muted-foreground text-lg leading-relaxed ${centered ? "max-w-3xl mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group p-8 bg-card rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  )
}
