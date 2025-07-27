import { ReactNode } from 'react';
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

export const FeatureCard = ({ icon, title, description, highlight = false }: FeatureCardProps) => {
  return (
    <Card className={`p-6 transition-[var(--transition-neural)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 ${
      highlight 
        ? 'bg-gradient-to-br from-neural/10 to-intelligence/10 border-neural/30' 
        : 'bg-gradient-to-br from-background to-accent/20'
    }`}>
      <div className="space-y-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          highlight ? 'bg-neural text-neural-foreground' : 'bg-accent text-accent-foreground'
        }`}>
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};