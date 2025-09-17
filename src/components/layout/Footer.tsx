import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Sparkles,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Automation', href: '/automation' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Workflows', href: '/workflows' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'API Access', href: '/api' },
        { name: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Streamline', href: '/about' },
        { name: 'Tech Blog', href: '/blog' },
        { name: 'Engineering', href: '/careers' },
        { name: 'News', href: '/news' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Developer Hub', href: '/developers' },
        { name: 'Community Forum', href: '/community' },
        { name: 'Code Examples', href: '/examples' },
        { name: 'Tech Talks', href: '/talks' },
        { name: 'Success Stories', href: '/stories' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Trust',
      links: [
        { name: 'Privacy Center', href: '/privacy' },
        { name: 'Service Terms', href: '/terms' },
        { name: 'Data Processing', href: '/data' },
        { name: 'ISO Compliance', href: '/compliance' },
        { name: 'Security', href: '/security' },
        { name: 'SOC Reports', href: '/soc' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/streamline' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/streamline' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/streamline' },
  ];

  return (
    <footer className="bg-background border-t border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="size-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Streamline</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering developers with intelligent automation and workflow tools. Join over
                50,000 tech teams accelerating their development process.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">developers@streamline.tech</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">535 Mission St, San Francisco</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Developer Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="dev@company.com"
                  className="flex-1 px-3 py-2 text-sm border border-muted rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Weekly technical insights and API updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-muted bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Streamline Technologies, Inc.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-primary fill-current" /> in San Francisco
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-muted">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Site Map
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Technical Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
