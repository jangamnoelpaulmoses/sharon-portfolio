"use client";

import React from "react";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
}

export default function LiquidButton({ children, href, className, ...props }: LiquidButtonProps) {
    const Component = href ? "a" : "button";

    return (
        // @ts-ignore - dynamic component props
        <Component
            href={href}
            className={`liquid-button ${className || ""}`}
            {...props}
        >
            <span>{children}</span>
            <div className="liquid"></div>
        </Component>
    );
}
