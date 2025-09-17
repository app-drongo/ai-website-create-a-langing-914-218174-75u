import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  const plans = [
    {
      name: 'Developer',
      description: 'Essential tools for indie developers',
      price: 'Free',
      period: '',
      badge: null,
      features: [
        '5 API endpoints',
        'Basic monitoring',
        'Community forums',
        '2GB compute',
        'Basic logging',
      ],
      cta: 'Start Building',
      popular: false,
    },
    {
      name: 'Scale-up',
      description: 'For growing startups and tech companies',
      price: '$49',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited endpoints',
        'Real-time monitoring',
        'Priority support',
        '250GB compute',
        'Advanced logging',
        'Custom domains',
        'Team workspaces',
        'GraphQL support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale tech operations',
      price: 'Custom',
      period: '',
      badge: 'Contact Sales',
      features: [
        'Everything in Scale-up',
        'Unlimited compute',
        '24/7 engineering support',
        'Custom integrations',
        'SOC2 compliance',
        '99.99% uptime SLA',
        'Dedicated success manager',
        'On-premise deployment',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const handlePlanSelect = (plan: string) => {
    if (plan === 'Contact Sales') {
      router.push('/contact');
    } else {
      router.push('/signup');
    }
  };

  return (
    <section className="py-24 bg-background">
      {/* Rest of the component structure remains same, just update button onClick */}
      <Button
        onClick={() => handlePlanSelect(plan.cta)}
        className={cn(
          'w-full text-base py-6',
          plan.popular ? 'bg-primary hover:bg-primary/90' : ''
        )}
        variant={plan.popular ? 'default' : 'outline'}
      >
        {plan.popular && <Zap className="size-4 mr-2" />}
        {plan.cta}
      </Button>
    </section>
  );
}
