"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ADMIN_ROUTE = "/admin"
const USER_ROUTE = "/"

export const RoleToggle = () => {
    const pathname = usePathname()

    const isAdminRoute = pathname.includes("admin");

    return (
        <Button variant={"outline"} asChild>
            <Link href={isAdminRoute ? USER_ROUTE : ADMIN_ROUTE}>
                <span className='hidden sm:flex'> Switch to</span> {isAdminRoute ? "User" : "Admin"}
            </Link>
        </Button>
    )
}
