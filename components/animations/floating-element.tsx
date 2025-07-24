"use client"

import type React from "react"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
}

export function FloatingElement({ children, className = "" }: FloatingElementProps) {
  return <div className={`animate-float ${className}`}>{children}</div>
}
