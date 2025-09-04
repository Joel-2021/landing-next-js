"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {

    return (
        <Sonner
            theme="dark"
            className="toaster group"
            style={
                {
                    "--success-bg": "rgb(34,197,94)",
                    "--success-text": "white",
                    "--success-border": "rgb(22,163,74)",

                    // Error toast
                    "--error-bg": "rgb(239,68,68)",
                    "--error-text": "white",
                    "--error-border": "rgb(220,38,38)",

                    // Warning toast
                    "--warning-bg": "rgb(251,191,36)",
                    "--warning-text": "black",
                    "--warning-border": "rgb(202,138,4)",

                    // Info toast
                    "--info-bg": "rgb(59,130,246)",
                    "--info-text": "white",
                    "--info-border": "rgb(37,99,235)",
                } as React.CSSProperties
            }
            {...props}
        />
    )
}

export { Toaster }
