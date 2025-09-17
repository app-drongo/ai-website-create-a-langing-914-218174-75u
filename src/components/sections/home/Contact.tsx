'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleContactMethod = (method: string) => {
    switch (method) {
      case 'Email Us':
        window.location.href = 'mailto:support@streamline.dev';
        break;
      case 'Call Us':
        window.location.href = 'tel:+15551234567';
        break;
      case 'Live Chat':
        // Trigger chat widget
        break;
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Technical support & inquiries',
      contact: 'support@streamline.dev',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'API & Integration Support',
      contact: '+1 (555) 123-4567',
      action: 'Call Now',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Real-time developer support',
      contact: 'Average response < 5 min',
      action: 'Start Chat',
    },
  ];

  // Rest of the component remains same, just update onClick handlers
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      {/* Existing JSX structure */}
      <Card onClick={() => handleContactMethod(method.title)} className="cursor-pointer">
        {/* Card content */}
      </Card>
    </section>
  );
}
