"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
    Disc3,
    BarChart3,
    Users,
    LayoutDashboard,
    Music2,
    MapPin,
    Calendar,
    Globe,
    Mail,
    TrendingUp,
    Menu,
    X,
} from "lucide-react";

const navigationItems = [
    {
        title: "Overview",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Releases",
        href: "/releases",
        icon: Disc3,
    },
    {
        title: "Analytics",
        href: "/analytics",
        icon: BarChart3,
    },
    {
        title: "Engagement",
        href: "/engagement",
        icon: Users,
    },
];

function ArtistSidebar() {
    return (
        <div className="p-6 space-y-6">
            {/* Artist Profile */}
            <div className="space-y-4">
                <div className="flex flex-col items-center text-center">
                    <Avatar className="h-32 w-32 mb-4">
                        <AvatarImage src="https://picsum.photos/seed/artist/400/400" />
                        <AvatarFallback className="text-4xl">LE</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold">Luna Echo</h2>
                    <p className="text-sm text-muted-foreground">
                        Electronic / Indie Pop
                    </p>
                    <Badge variant="secondary" className="mt-2">
                        Premium Artist
                    </Badge>
                </div>
            </div>

            <Separator />

            {/* Artist Stats */}
            <Card>
                <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Monthly Listeners
                        </span>
                        <span className="font-semibold">107.5K</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Total Followers
                        </span>
                        <span className="font-semibold">89.2K</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Total Releases
                        </span>
                        <span className="font-semibold">12</span>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500 font-medium">+12.4%</span>
                        <span className="text-muted-foreground">this month</span>
                    </div>
                </CardContent>
            </Card>

            {/* Artist Info */}
            <div className="space-y-3">
                <h3 className="font-semibold text-sm uppercase text-muted-foreground">
                    Artist Info
                </h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Los Angeles, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Joined March 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a
                            href="https://lunaecho.com"
                            className="text-primary hover:underline"
                        >
                            lunaecho.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>contact@lunaecho.com</span>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Bio */}
            <div className="space-y-2">
                <h3 className="font-semibold text-sm uppercase text-muted-foreground">
                    About
                </h3>
                <p className="text-sm leading-relaxed">
                    Luna Echo is an electronic indie pop artist known for
                    atmospheric soundscapes and ethereal vocals. Blending dreamy
                    synths with introspective lyrics, creating music that
                    resonates with listeners worldwide.
                </p>
            </div>

            {/* Top Tracks */}
            <div className="space-y-3">
                <h3 className="font-semibold text-sm uppercase text-muted-foreground">
                    Top Tracks
                </h3>
                <div className="space-y-2">
                    {[
                        { title: "Midnight Dreams", streams: "2.4M" },
                        { title: "Electric Soul", streams: "1.8M" },
                        { title: "Velvet Shadows", streams: "1.5M" },
                    ].map((track, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground w-4">
                                    {i + 1}
                                </span>
                                <span className="font-medium">{track.title}</span>
                            </div>
                            <span className="text-muted-foreground">
                                {track.streams}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen flex-col">
            {/* Skip to main content link for screen readers */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
            >
                Skip to main content
            </a>

            {/* Top Navigation Header */}
            <header className="flex h-16 items-center gap-4 border-b border-border bg-background px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" aria-label="Home">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                        <Music2 className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="hidden sm:inline text-lg font-bold">Artist Dashboard</span>
                </Link>

                <Separator orientation="vertical" className="h-8 hidden md:block" />

                {/* Navigation Links - Hidden on mobile */}
                <nav className="hidden md:flex flex-1 items-center gap-1" aria-label="Main navigation">
                    {navigationItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant={isActive ? "secondary" : "ghost"}
                                    size="sm"
                                    className="gap-2"
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <item.icon className="h-4 w-4" aria-hidden="true" />
                                    {item.title}
                                </Button>
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Navigation Menu */}
                <div className="flex md:hidden flex-1">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" aria-label="Open navigation menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64">
                            <SheetTitle>Navigation Menu</SheetTitle>
                            <nav className="flex flex-col gap-2 mt-8" aria-label="Mobile navigation">
                                {navigationItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link key={item.href} href={item.href}>
                                            <Button
                                                variant={isActive ? "secondary" : "ghost"}
                                                size="sm"
                                                className="w-full justify-start gap-2"
                                                aria-current={isActive ? "page" : undefined}
                                            >
                                                <item.icon className="h-4 w-4" aria-hidden="true" />
                                                {item.title}
                                            </Button>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Artist Info Toggle (Mobile) & User Avatar */}
                <div className="flex items-center gap-2">
                    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" className="lg:hidden" aria-label="View artist information">
                                <Users className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 overflow-auto" aria-label="Artist information">
                            <SheetTitle>Artist Information</SheetTitle>
                            <ArtistSidebar />
                        </SheetContent>
                    </Sheet>

                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://picsum.photos/seed/artist/100/100" alt="Luna Echo profile picture" />
                        <AvatarFallback>LE</AvatarFallback>
                    </Avatar>
                </div>
            </header>

            {/* Main Content Area with Sidebar */}
            <div className="flex flex-1 overflow-hidden">
                {/* Main Content */}
                <main id="main-content" className="flex-1 overflow-auto p-4 md:p-6" role="main">
                    {children}
                </main>

                {/* Artist Info Sidebar - Hidden on mobile/tablet */}
                <aside className="hidden lg:block w-80 border-l border-border bg-muted/20 overflow-auto" aria-label="Artist information">
                    <ArtistSidebar />
                </aside>
            </div>
        </div>
    );
}
