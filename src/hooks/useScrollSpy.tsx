"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("home")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id") || "home"
                        setActiveSection(id)

                        // Update URL without reload
                        window.history.pushState(null, "", `/${id}`)
                    }
                })
            },
            { threshold: 0.6 } // Section must be 60% visible
        )

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [sectionIds])

    const scrollToId = (id: string) => {
        const ele = document.getElementById(id)
        if (!ele) return

        ele.scrollIntoView({ behavior: "smooth" })
        setActiveSection(id)
        window.history.pushState(null, "", `/${id}`)
    }

    return { activeSection, scrollToId }
}
