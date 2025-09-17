'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight, Sparkles, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleTrial = () => {
    router.push('/trial');
  };

  const handleDemo = () => {
    router.push('/demo');
  };

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="size-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Streamline</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleDemo}>
              <Play className="mr-2 size-4" />
              View Demo
            </Button>
            <Button size="sm" className="group" onClick={handleTrial}>
              Start Free Trial
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-accent rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start" onClick={handleDemo}>
                <Play className="mr-2 size-4" />
                View Demo
              </Button>
              <Button className="justify-start group" onClick={handleTrial}>
                Start Free Trial
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
