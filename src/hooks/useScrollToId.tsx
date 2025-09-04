"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollToId() {
    const pathname = usePathname()
    const [activeSection, setActiveSection] = useState<string>("")

    const scrollToId = (id: string) => {
        const ele = document.getElementById(id)
        if (!ele) return

        // Update the URL (no reload)
        window.history.pushState(null, "", `/${id}`)

        // Smooth scroll
        ele.scrollIntoView({ behavior: "smooth" })

        setActiveSection(id)
    }

    // Auto-scroll on page load if URL contains section
    useEffect(() => {
        const section = pathname.replace("/", "")
        if (section) {
            const ele = document.getElementById(section)
            if (ele) {
                setTimeout(() => {
                    ele.scrollIntoView({ behavior: "smooth" })
                }, 100)
                setActiveSection(section)
            }
        }
    }, [pathname])

    return { activeSection, scrollToId }
}
