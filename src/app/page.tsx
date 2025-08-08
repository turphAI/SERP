import Layout from '@/components/core/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      name: 'Answer',
      description: 'AI-powered answer cards that appear above search results with confidence indicators and sources.',
      versions: [
        { version: 'v1', href: '/answer/v1', status: 'Complete', description: 'Append the phrase Key passage: to applicable results' },
        { version: 'v2', href: '/answer/v2', status: 'In Progress', description: 'Enhanced answer cards with improved layout and features' }
      ]
    },
    {
      name: 'Type Ahead',
      description: 'Predictive search suggestions that appear as user types in the search input.',
      versions: [
        { version: 'v1', href: '/type-ahead/v1', status: 'Planned', description: 'Basic type-ahead suggestions' },
        { version: 'v2', href: '/type-ahead/v2', status: 'Planned', description: 'Enhanced suggestions with categories' },
        { version: 'v3', href: '/type-ahead/v3', status: 'Planned', description: 'Smart suggestions with context' }
      ]
    },
    {
      name: 'Spellcheck',
      description: 'Automatic spelling correction and suggestion features for search queries.',
      versions: [
        { version: 'v1', href: '/spellcheck/v1', status: 'Planned', description: 'Basic spell correction' },
        { version: 'v2', href: '/spellcheck/v2', status: 'Planned', description: 'Advanced spell suggestions' }
      ]
    },
    {
      name: 'Related Questions',
      description: 'Show related questions and topics to help users refine their search.',
      versions: [
        { version: 'v1', href: '/related-questions/v1', status: 'Complete', description: 'Remove accordion FAQ, replace with conversation buttons' },
        { version: 'v2', href: '/related-questions/v2', status: 'Complete', description: 'Use branded conversational buttons' },
        { version: 'v3', href: '/related-questions/v3', status: 'Complete', description: 'FAQ accordion for related questions' }
      ]
    },
    {
      name: 'Enhanced Input',
      description: 'Advanced search input with smart features and improved UX.',
      versions: [
        { version: 'v1', href: '/enhanced-input/v1', status: 'In Progress', description: 'Floating bottom input with scrollable content' },
        { version: 'v2', href: '/enhanced-input/v2', status: 'Planned', description: 'Advanced input features' }
      ]
    },
    {
      name: 'Enhanced Result Row',
      description: 'Improved search result display with additional metadata and interactions.',
      versions: [
        { version: 'v1', href: '/enhanced-result-row/v1', status: 'Planned', description: 'Enhanced result layout' },
        { version: 'v2', href: '/enhanced-result-row/v2', status: 'Planned', description: 'Interactive result rows' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Planned': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Layout variant="landing">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SERP Prototypes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore different search experience features and prototypes. Each feature has multiple versions for A/B testing and iteration.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.name} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{feature.name}</CardTitle>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3">
                  {feature.versions.map((version) => (
                    <Link 
                      key={version.version} 
                      href={version.href}
                      className="block border rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-blue-600">
                          {feature.name} {version.version}
                        </span>
                        <Badge className={`text-xs ${getStatusColor(version.status)}`}>
                          {version.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">{version.description}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Links */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Development Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/search" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Component Demo
              </Link>
              <a 
                href="https://github.com/turphAI/SERP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
