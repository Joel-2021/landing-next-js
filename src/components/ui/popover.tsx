"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function Popover({
                     ...props
                 }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
    return <PopoverPrimitive.Root data-slot="popover" { ...props } />
}

function PopoverTrigger({
                            ...props
                        }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
    return <PopoverPrimitive.Trigger data-slot="popover-trigger" { ...props } />
}

function PopoverContent({
                            className,
                            align = "center",
                            sideOffset = 4,
                            children,
                            ...props
                        }: React.ComponentProps<typeof PopoverPrimitive.Content>) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                data-slot="popover-content"
                align={ align }
                sideOffset={ sideOffset }
                className={ cn(
                    "bg-[#e5dff7] text-sm font-secondary max-w-[320px] h-auto text-popover-foreground data-[state=open]:animate-in " +
                    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 " +
                    "data-[state=open]:zoom-in-95 slide-in-from-bottom-2 md:data-[side=bottom]:slide-in-from-top-2 md:data-[side=left]:slide-in-from-right-2 md:data-[side=right]:slide-in-from-left-2 " +
                    "md:data-[side=top]:slide-in-from-bottom-2 z-150 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border px-3 py-2 shadow-md outline-hidden",
                    className
                ) }
                { ...props }
            >
                { children }
                <PopoverPrimitive.Arrow
                    className="bg-[#e5dff7] fill-[#e5dff7] z-150 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"/>
            </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
    )
}

function PopoverAnchor({
                           ...props
                       }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
    return <PopoverPrimitive.Anchor data-slot="popover-anchor" { ...props } />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
