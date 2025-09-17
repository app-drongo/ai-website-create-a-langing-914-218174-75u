'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Zap, Shield, Cpu, Globe, BarChart3, GitBranch, Terminal, Clock, Lock } from 'lucide-react';

export default function Features() {
  const router = useRouter();

  const handleTrialClick = () => {
    router.push('/signup');
  };

  const handleFeaturesClick = () => {
    router.push('/features');
  };

  const features = [
    {
      icon: Cpu,
      title: 'AI Code Analysis',
      description:
        'Automated code review and optimization suggestions powered by advanced AI models.',
      badge: 'Intelligence',
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Continuous vulnerability assessment and dependency monitoring.',
      badge: 'Security',
    },
    {
      icon: Terminal,
      title: 'Smart CLI',
      description: 'Context-aware command line interface with predictive suggestions.',
      badge: 'Developer',
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Deploy',
      description: 'One-click deployment to AWS, GCP, Azure and other major platforms.',
      badge: 'DevOps',
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Real-time monitoring and optimization recommendations.',
      badge: 'Analytics',
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      description: 'Seamless workflow with GitHub, GitLab and Bitbucket.',
      badge: 'Integration',
    },
    {
      icon: Zap,
      title: 'Fast Builds',
      description: 'Parallel processing and caching for lightning quick builds.',
      badge: 'Speed',
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Automated developer time tracking and project analytics.',
      badge: 'Management',
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Role-based permissions and secure credential management.',
      badge: 'Security',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Accelerate Development
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              With Smart Tools
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our AI-powered platform streamlines your entire development workflow from code to
            deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to accelerate your development?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleTrialClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Free Trial
            </Button>
            <Button
              onClick={handleFeaturesClick}
              variant="outline"
              className="border-border hover:bg-accent"
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
