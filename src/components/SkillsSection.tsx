import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Database, Wrench, Brain, Globe, Server } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "JavaScript", "TypeScript", "Python", "Java", "C", "C++", "HTML", "CSS", "SQL"
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        "ReactJS", "Next.js", "NodeJS", "ExpressJS", "FastAPI", "NestJS", "Bootstrap", "Tailwind CSS", "MUI", "Next UI"
      ]
    },
    {
      id: "databases",
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "BigQuery"
      ]
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        "Git", "GitHub", "Docker", "Apache Airflow", "Cloudflare Workers", "Vercel", "NextAuth", "Clerk Authentication"
      ]
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        "LangChain", "LangGraph", "LLMs Integration", "RAG Systems"
      ]
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white dark:bg-slate-800 p-1 rounded-xl shadow-lg">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <CardHeader className="text-center">
              <Server className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-slate-900 dark:text-white">Backend Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Expert in building scalable APIs, microservices, and server-side applications
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardHeader className="text-center">
              <Globe className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <CardTitle className="text-slate-900 dark:text-white">Frontend Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Creating beautiful, responsive, and interactive user interfaces
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-slate-900 dark:text-white">AI Integration</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Implementing AI solutions, LLMs, and machine learning workflows
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
