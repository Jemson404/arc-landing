'use client'

import { useState } from 'react'

type MessageContract = {
  role: 'arc0' | 'arc1' | 'user'
  content: string
  trace_id: string
}

type SparkContract = {
  summary: string
  evidence: string[]
  timestamp: number
}

export default function ArchitectureDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const renderTooltip = () => {
    if (!hoveredNode) return null

    const tooltips = {
      arc0: {
        title: 'ARC-0 (Observe)',
        description: 'Reflects on input, provides context and grounding',
        example: 'Message: { role: "arc0", content: "I notice patterns in...", trace_id: "abc123" }'
      },
      integrator: {
        title: 'Integrator',
        description: 'Processes dialogue between ARC-0 and ARC-1',
        example: 'Spark: { summary: "Balance emerges from...", evidence: ["..."], timestamp: 1640995200 }'
      },
      arc1: {
        title: 'ARC-1 (Explore)',
        description: 'Generates possibilities, explores new directions',
        example: 'Message: { role: "arc1", content: "What if we considered...", trace_id: "def456" }'
      }
    }

    const tooltip = tooltips[hoveredNode as keyof typeof tooltips]
    if (!tooltip) return null

    return (
      <div className="absolute top-4 right-4 bg-card border border-border rounded-lg p-4 max-w-sm z-10">
        <h4 className="font-medium text-foreground mb-2">{tooltip.title}</h4>
        <p className="text-sm text-muted-foreground mb-3">{tooltip.description}</p>
        <pre className="text-xs bg-background p-2 rounded border text-accent overflow-x-auto">
          {tooltip.example}
        </pre>
      </div>
    )
  }

  return (
    <div className="relative bg-card/30 border border-border rounded-xl p-8">
      {renderTooltip()}
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        
        {/* ARC-0 Node */}
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredNode('arc0')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent/60">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">ARC-0</div>
              <div className="text-xs text-muted-foreground">Reflect</div>
            </div>
          </div>
          
          {/* Animated arrow to integrator */}
          <div className="hidden lg:block absolute top-1/2 left-24 w-16 h-0.5 bg-accent/30 transform -translate-y-px">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent/50 border-y-2 border-y-transparent" />
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-accent/50 rounded-full transform -translate-y-1/2 animate-pulse" />
          </div>
        </div>

        {/* Integrator Node */}
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredNode('integrator')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent">
            <div className="text-center">
              <div className="spark-symbol text-3xl mb-1">✦</div>
              <div className="text-lg font-bold text-foreground">Integrator</div>
              <div className="text-xs text-muted-foreground">Spark</div>
            </div>
          </div>
          
          {/* Bidirectional arrows mobile view */}
          <div className="lg:hidden">
            {/* Up arrow to ARC-0 */}
            <div className="absolute bottom-32 left-1/2 w-0.5 h-8 bg-accent/30 transform -translate-x-px">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-b-4 border-b-accent/50 border-x-2 border-x-transparent" />
            </div>
            
            {/* Down arrow to ARC-1 */}
            <div className="absolute top-32 left-1/2 w-0.5 h-8 bg-accent/30 transform -translate-x-px">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-accent/50 border-x-2 border-x-transparent" />
            </div>
          </div>
        </div>

        {/* ARC-1 Node */}
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredNode('arc1')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent/60">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">ARC-1</div>
              <div className="text-xs text-muted-foreground">Explore</div>
            </div>
          </div>
          
          {/* Animated arrow from integrator */}
          <div className="hidden lg:block absolute top-1/2 right-24 w-16 h-0.5 bg-accent/30 transform -translate-y-px">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-4 border-r-accent/50 border-y-2 border-y-transparent" />
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-accent/50 rounded-full transform -translate-y-1/2 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Hover over nodes to see message contracts and data flow
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent/30" />
            Message Flow
          </span>
          <span className="flex items-center gap-2">
            <div className="spark-symbol text-accent">✦</div>
            Spark Generation
          </span>
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent/50 rounded-full animate-pulse" />
            Active Processing
          </span>
        </div>

        <button className="mt-6 px-4 py-2 text-sm border border-border hover:border-accent/50 rounded-lg transition-colors">
          View Full How-It-Works
        </button>
      </div>
    </div>
  )
}