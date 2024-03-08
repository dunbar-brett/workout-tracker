'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
    description: 'The homepage of the app.',
    icon: null,
  },
  {
    name: 'Add Exercise',
    href: '/dashboard/addExercise',
    description: 'Add an exercise.',
    icon: null,
  },
  {
    name: 'Start Workout',
    href: '/dashboard/startWorkout',
    description: 'Start your workout.',
    icon: null,
  },
  {
    name: 'Report',
    href: '/dashboard/report',
    description: 'The homepage of the app.',
    icon: null,
  },
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col w-1/4">
      {links.map((link) => (
        <Link
        key={link.name}
        href={link.href}
        className=''
      >
        {/* <LinkIcon className="w-6" /> */}
        <p className="hidden md:block">{link.name}</p>
      </Link>
      ))}
    </nav>
  );
}