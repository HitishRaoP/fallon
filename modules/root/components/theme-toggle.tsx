'use client';

import * as React from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const themes = [
    { id: 'system', icon: Monitor, label: 'System theme' },
    { id: 'light', icon: Sun, label: 'Light theme' },
    { id: 'dark', icon: Moon, label: 'Dark theme' },
] as const;

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <div className="inline-grid grid-cols-3 h-8 items-center border rounded-full overflow-hidden text-sm font-medium">
            {themes.map(({ id, icon: Icon, label }) => (
                <Toggle
                    key={id}
                    className={cn(
                        'w-full h-full p-1.5 rounded-full hover:cursor-pointer',
                        theme === id && 'border'
                    )}
                    onClick={() => setTheme(id)}
                    aria-label={label}
                >
                    <Icon className="w-4 h-4" />
                </Toggle>
            ))}
        </div>
    );
}

function Toggle({
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <Button variant="ghost" size="icon" className={cn(className)} {...props} />;
}
