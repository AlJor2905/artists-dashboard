"use client";

import { useState, useEffect, type ReactNode } from "react";

interface DelayedContentProps {
    children: ReactNode;
    skeleton: ReactNode;
    delay?: number;
}

export function DelayedContent({ children, skeleton, delay = 800 }: DelayedContentProps) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (!isReady) {
        return <>{skeleton}</>;
    }

    return <>{children}</>;
}
