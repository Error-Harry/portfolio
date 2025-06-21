import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Article Synthesizer",
      description:
        "Streamlined article summarization and content generation using React and RapidAPI. This tool enhances research productivity by providing concise summaries of long-form articles.",
      technologies: ["React.js", "Rapid API", "NLP", "Tailwind"],
      githubLink: "https://github.com/Error-Harry/Article-Synthesizer",
      liveLink: "https://article-synthesizer.vercel.app/",
      icon: <Code className="h-6 w-6" />,
      category: "AI/ML",
    },
    {
      title: "Blog App",
      description:
        "Developed a serverless blogging platform with Cloudflare Workers and Hono for backend routing. Integrated PostgreSQL with Prisma ORM and deployed frontend using React and Tailwind via Vercel.",
      technologies: ["React", "Cloudflare Workers", "Hono", "Prisma", "PostgreSQL", "Tailwind CSS"],
      githubLink: "https://github.com/Error-Harry/Medium",
      liveLink: "https://medium-pearl-xi.vercel.app/",
      icon: <Globe className="h-6 w-6" />,
      category: "Full Stack, Serverless"
    },
  ];

  const categoryColors = {
    "AI/ML": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    "Full Stack, Serverless": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  };

  return (
    <div className="py-20 px-6 bg-slate-50/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my work in AI automation, serverless architecture, and full-stack development.
          </p>
        </div>

        {/* Centered grid container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative flex flex-col h-full min-h-[400px] border-0 shadow-xl bg-white dark:bg-slate-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardHeader className="relative z-10 flex-shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                      {project.icon}
                    </div>
                    <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                      {project.category}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col flex-1">
                  {/* Content section that grows */}
                  <div className="flex-1 space-y-4 mb-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Fixed button section at bottom */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;