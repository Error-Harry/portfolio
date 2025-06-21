import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Trainee Engineer",
      company: "Posit Source Technology",
      location: "Pune, India",
      period: "Jul '24 - Present",
      type: "Full-time",
      responsibilities: [
        "Built and maintained full-stack features using React, NestJS, GraphQL, PostgreSQL, and BigQuery.",
        "Enhanced multiple product modules through UI improvements, bug fixes, and unit tests using Jest.",
        "Optimized Airflow DAGs and developed unit tests using Pytest and Unittest.",
        "Developed AI-driven tools using FastAPI, LangChain, and LLMs for agreement generation and content automation.",
        "Revamped NGO website with dynamic content management using PHP, MySQL, and Bootstrap.",
        "Working on Elpro-360 with focus on RAG, fine-tuning LLMs, and automating Jira to Confluence workflows."
      ],
      technologies: ["React", "NestJS", "GraphQL", "PostgreSQL", "BigQuery", "FastAPI", "LangChain", "Airflow", "LLMs", "PHP", "MySQL"]
    },
    {
      title: "Intern",
      company: "Posit Source Technology",
      location: "Pune, India",
      period: "Jan '24 - Jun '24",
      type: "Internship",
      responsibilities: [
        "Built a Kanban project management tool using Next.js, Tailwind CSS, Next UI, and MUI.",
        "Implemented secure authentication using NextAuth and Prisma ORM with PostgreSQL.",
        "Contributed to UI performance improvements and team collaboration via GitHub."
      ],
      technologies: ["Next.js", "Tailwind CSS", "Next UI", "MUI", "NextAuth", "PostgreSQL", "Prisma", "GitHub"]
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A journey through software development, AI solutions, and full-stack engineering.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-slate-600 dark:text-slate-400">
                      <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                      <span className="hidden md:inline">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-slate-50 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
