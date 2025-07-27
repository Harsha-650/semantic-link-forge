import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, Zap, Network, Download, Upload } from 'lucide-react';

interface AnalysisResult {
  filename: string;
  size: string;
  pages: number;
  extractedHeadings: string[];
  semanticStructure: {
    title: string;
    sections: { name: string; confidence: number }[];
  };
  keyInsights: string[];
  processingTime: number;
}

export const DocumentProcessor = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setResult(null);
    } else {
      toast({
        title: "Invalid File",
        description: "Please select a PDF file",
        variant: "destructive",
      });
    }
  };

  const processDocument = async () => {
    if (!file) return;

    setIsProcessing(true);
    setProgress(0);

    // Simulate document processing with realistic progress updates
    const progressSteps = [
      { step: 20, message: "Extracting document structure..." },
      { step: 40, message: "Analyzing semantic content..." },
      { step: 60, message: "Building knowledge graph..." },
      { step: 80, message: "Generating insights..." },
      { step: 100, message: "Processing complete!" }
    ];

    for (const { step, message } of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(step);
      if (step < 100) {
        toast({
          title: "Processing",
          description: message,
        });
      }
    }

    // Mock analysis result
    const mockResult: AnalysisResult = {
      filename: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      pages: Math.floor(Math.random() * 50) + 10,
      extractedHeadings: [
        "Executive Summary",
        "Introduction and Background",
        "Methodology and Approach",
        "Key Findings and Analysis",
        "Recommendations",
        "Conclusion and Future Work"
      ],
      semanticStructure: {
        title: "Advanced Research Document",
        sections: [
          { name: "Abstract", confidence: 0.95 },
          { name: "Literature Review", confidence: 0.88 },
          { name: "Data Analysis", confidence: 0.92 },
          { name: "Results", confidence: 0.89 },
          { name: "Discussion", confidence: 0.91 }
        ]
      },
      keyInsights: [
        "Document follows academic structure with high semantic coherence",
        "Strong methodological framework identified across sections",
        "Consistent terminology usage indicates expert-level content",
        "Cross-references suggest comprehensive literature coverage"
      ],
      processingTime: 3.2
    };

    setResult(mockResult);
    setIsProcessing(false);

    toast({
      title: "Analysis Complete",
      description: `Document processed successfully in ${mockResult.processingTime}s`,
    });
  };

  const downloadResults = () => {
    if (!result) return;

    const output = {
      documentInfo: {
        filename: result.filename,
        size: result.size,
        pages: result.pages
      },
      analysis: {
        headings: result.extractedHeadings,
        semanticStructure: result.semanticStructure,
        insights: result.keyInsights
      },
      metadata: {
        processingTime: result.processingTime,
        timestamp: new Date().toISOString()
      }
    };

    const blob = new Blob([JSON.stringify(output, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analysis-${result.filename.replace('.pdf', '')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Upload Section */}
      <Card className="p-8 bg-gradient-to-br from-card via-accent to-secondary border-border/50 shadow-[var(--shadow-neural)]">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Brain className="h-8 w-8 text-neural" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-neural to-intelligence bg-clip-text text-transparent">
              Intelligent Document Processor
            </h2>
          </div>
          
          <div className="space-y-4">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="pdf-upload"
            />
            <label
              htmlFor="pdf-upload"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-dashed border-border hover:border-neural transition-[var(--transition-smooth)] cursor-pointer bg-background/50 hover:bg-accent/50"
            >
              <Upload className="h-5 w-5" />
              Select PDF Document
            </label>
            
            {file && (
              <div className="flex items-center justify-center space-x-4 p-4 bg-accent/30 rounded-lg">
                <FileText className="h-5 w-5 text-neural" />
                <span className="font-medium">{file.name}</span>
                <Badge variant="secondary">{(file.size / 1024 / 1024).toFixed(2)} MB</Badge>
              </div>
            )}
          </div>

          {file && (
            <Button
              onClick={processDocument}
              disabled={isProcessing}
              variant="neural"
              size="lg"
              className="w-full sm:w-auto"
            >
              {isProcessing ? (
                <>
                  <Zap className="h-5 w-5 animate-pulse" />
                  Processing...
                </>
              ) : (
                <>
                  <Brain className="h-5 w-5" />
                  Analyze Document
                </>
              )}
            </Button>
          )}

          {isProcessing && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-muted-foreground">
                Processing with neural intelligence...
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Results Section */}
      {result && (
        <Card className="p-6 space-y-6 bg-gradient-to-br from-background to-accent/20 border-border/50">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Network className="h-5 w-5 text-intelligence" />
              Analysis Results
            </h3>
            <Button
              onClick={downloadResults}
              variant="processing"
              size="sm"
            >
              <Download className="h-4 w-4" />
              Export JSON
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="semantic">Semantic</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-accent/30">
                  <div className="text-sm text-muted-foreground">Pages</div>
                  <div className="text-2xl font-bold text-neural">{result.pages}</div>
                </div>
                <div className="p-4 rounded-lg bg-accent/30">
                  <div className="text-sm text-muted-foreground">Size</div>
                  <div className="text-2xl font-bold text-intelligence">{result.size}</div>
                </div>
                <div className="p-4 rounded-lg bg-accent/30">
                  <div className="text-sm text-muted-foreground">Sections</div>
                  <div className="text-2xl font-bold text-processing">{result.extractedHeadings.length}</div>
                </div>
                <div className="p-4 rounded-lg bg-accent/30">
                  <div className="text-sm text-muted-foreground">Time</div>
                  <div className="text-2xl font-bold text-neural">{result.processingTime}s</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="structure" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Extracted Headings</h4>
                <div className="space-y-2">
                  {result.extractedHeadings.map((heading, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/20">
                      <Badge variant="outline">{index + 1}</Badge>
                      <span>{heading}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="semantic" className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold">Semantic Structure Analysis</h4>
                <div className="p-4 rounded-lg bg-accent/20">
                  <h5 className="font-medium mb-3">Document: {result.semanticStructure.title}</h5>
                  <div className="space-y-2">
                    {result.semanticStructure.sections.map((section, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded bg-background/50">
                        <span>{section.name}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={section.confidence * 100} className="w-20 h-2" />
                          <span className="text-sm text-muted-foreground">
                            {Math.round(section.confidence * 100)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Key Insights</h4>
                {result.keyInsights.map((insight, index) => (
                  <div key={index} className="p-4 rounded-lg bg-accent/20 border-l-4 border-neural">
                    <p className="text-sm">{insight}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      )}
    </div>
  );
};