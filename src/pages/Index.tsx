import { DocumentProcessor } from "@/components/DocumentProcessor";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsCounter } from "@/components/StatsCounter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Network, 
  FileText, 
  Search, 
  Target,
  GitBranch,
  ArrowRight,
  Cpu,
  Database,
  Shield
} from 'lucide-react';
import heroImage from "@/assets/hero-neural.jpg";
import logoImage from "@/assets/logo-neural.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Neural Docs" className="w-10 h-10 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-neural to-intelligence bg-clip-text text-transparent">
                  Neural Docs
                </h1>
                <p className="text-xs text-muted-foreground">Intelligent Document Processing</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="hidden sm:flex">
                <Cpu className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
              <Button variant="neural" size="sm" onClick={() => {
                document.getElementById('processor')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <GitBranch className="w-4 h-4 mr-2" />
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Advanced Document Intelligence
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform{' '}
              <span className="bg-gradient-to-r from-neural to-intelligence bg-clip-text text-transparent">
                Documents
              </span>
              {' '}into{' '}
              <span className="bg-gradient-to-r from-intelligence to-processing bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Extract structured insights, build semantic connections, and unlock the hidden potential 
              of your documents with cutting-edge AI technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="intelligence" size="lg" className="w-full sm:w-auto" onClick={() => {
                document.getElementById('processor')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Brain className="w-5 h-5 mr-2" />
                Start Processing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => {
                document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Network className="w-5 h-5 mr-2" />
                View Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-accent/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter target={99} label="Accuracy Rate" suffix="%" />
            <StatsCounter target={150} label="Processing Speed" suffix="x" />
            <StatsCounter target={50000} label="Documents Processed" suffix="+" />
            <StatsCounter target={25} label="Supported Languages" />
          </div>
        </div>
      </section>

      {/* Main Processor */}
      <section id="processor" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience{' '}
              <span className="bg-gradient-to-r from-neural to-intelligence bg-clip-text text-transparent">
                Neural Processing
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload your PDF documents and watch our AI extract meaningful structure, 
              semantic relationships, and actionable insights in seconds.
            </p>
          </div>
          
          <DocumentProcessor />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by{' '}
              <span className="bg-gradient-to-r from-intelligence to-processing bg-clip-text text-transparent">
                Advanced AI
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our neural engine combines multiple AI techniques to understand, analyze, 
              and connect document content like never before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="Neural Understanding"
              description="Deep semantic analysis that comprehends context, relationships, and meaning beyond simple text extraction."
              highlight
            />
            <FeatureCard
              icon={<Network className="w-6 h-6" />}
              title="Knowledge Mapping"
              description="Automatically builds interconnected knowledge graphs showing how concepts relate across documents."
            />
            <FeatureCard
              icon={<Search className="w-6 h-6" />}
              title="Intelligent Extraction"
              description="Identifies and extracts key information, headings, and structured data with AI-powered precision."
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="Precision Analytics"
              description="Delivers actionable insights and recommendations based on comprehensive document analysis."
              highlight
            />
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Structured Output"
              description="Converts unstructured documents into organized, queryable data formats for easy integration."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Secure Processing"
              description="Enterprise-grade security ensures your documents remain private and protected throughout analysis."
            />
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section id="architecture" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-background via-accent/10 to-secondary/10 border-border/50">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  System{' '}
                  <span className="bg-gradient-to-r from-neural to-intelligence bg-clip-text text-transparent">
                    Architecture
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Built for scale, designed for intelligence
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-neural/20 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-neural" />
                  </div>
                  <h3 className="font-semibold">Document Ingestion</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure upload and preprocessing pipeline with format validation
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-intelligence/20 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-intelligence" />
                  </div>
                  <h3 className="font-semibold">Neural Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-layer AI analysis for structure, semantics, and insights
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-processing/20 flex items-center justify-center">
                    <Database className="w-8 h-8 text-processing" />
                  </div>
                  <h3 className="font-semibold">Structured Output</h3>
                  <p className="text-sm text-muted-foreground">
                    Formatted results with JSON export and API integration
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-accent/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Neural Docs" className="w-8 h-8 rounded" />
              <span className="font-semibold">Neural Docs</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Advanced Document Intelligence Platform</span>
              <Badge variant="outline">
                Built with AI
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
