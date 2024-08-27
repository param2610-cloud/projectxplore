import { Earth, Home, LucideLayoutDashboard, Package, Settings, Users2  } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge'
import { Separator } from '@radix-ui/react-separator'
import { usePathname } from 'next/navigation'
import { Users } from '@/lib/interface/INTERFACE'


const NavbarCompo = ({ userDetails }: { userDetails: Users | null }) => {
    const pathname = usePathname()
    console.log();
    
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                    <Link
                                        href="/dashboard"
                                        className={`flex items-center gap-3 rounded-lg bg-muted px-3 py-2 ${pathname.includes("projects")?`text-primary`:`text-muted-foreground    `} transition-all hover:text-primary`}
                                    >
                                        <LucideLayoutDashboard className="h-4 w-4" />
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="#"
                                        className={`flex items-center gap-3 rounded-lg bg-muted px-3 py-2 ${pathname.includes("projects")?`text-primary`:`text-muted-foreground    `} transition-all hover:text-primary`}
                                    >
                                        <Home className="h-4 w-4" />
                                        My Projects
                                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        {userDetails?.user_project_track && userDetails?.user_project_track.length}

                                        </Badge>
                                    </Link>
                                    <Link
                                        href="/idea"
                                        className={`flex items-center gap-3 rounded-lg bg-muted px-3 py-2 ${pathname.includes("projects")?`text-primary`:`text-muted-foreground    `} transition-all hover:text-primary`}
                                    >
                                        <Home className="h-4 w-4" />
                                        My Ideas
                                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                            {userDetails?.ideas && userDetails.ideas.length}
                                        </Badge>
                                    </Link>
                                    <Link
                                        href="#"
                                        className={`flex items-center gap-3 rounded-lg bg-muted px-3 py-2 ${pathname.includes("explore-projects")?`text-primary`:`text-muted-foreground    `} transition-all hover:text-primary`}
                                    >
                                        <Earth className="h-4 w-4" />
                                        Browse Projects
                                    </Link>
                                    <Link
                                        href="/teams"
                                        className={`flex items-center gap-3 rounded-lg bg-muted px-3 py-2 ${pathname.includes("teams")?`text-primary`:`text-muted-foreground    `} transition-all hover:text-primary`}
                                    >
                                        <Package className="h-4 w-4" />
                                        Teams{" "}
                                    </Link>
                                    <Link
                                        href="#"
                                        className={`flex items-center gap-3 rounded-lg bg-muted px-3 py-2 ${pathname.includes("error")?`text-primary`:`text-muted-foreground    `} transition-all hover:text-primary`}
                                    >
                                        <Users2 className="h-4 w-4" />
                                        Error Help
                                    </Link>
                                    <Link
                                        href="#"
                                        className={`flex items-center gap-3 rounded-lg bg-muted px-3 py-2 ${pathname.includes("settings")?`text-primary`:`text-muted-foreground    `} transition-all hover:text-primary`}
                                    >
                                        <Settings className="h-4 w-4" />
                                        Settings
                                    </Link>
                                    <Separator/>
                                    

                                </nav>
  )
}

export default NavbarCompo
