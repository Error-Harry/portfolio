import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.E. in Computer Science Engineering",
      institution: "SVERI's College Of Engineering, Pandharpur, Solapur University",
      period: "2020 - 2024",
      grade: "CGPA: 9.74",
      location: "Maharashtra, India",
      type: "Bachelor's Degree"
    },
    {
      degree: "MSBSHSE (Class XII) - Science",
      institution: "Walchand College Of Arts And Science, Solapur",
      period: "2019 - 2020",
      grade: "Aggregate: 70%",
      location: "Maharashtra, India",
      type: "Higher Secondary"
    },
    {
      degree: "MSBSHSE (Class X)",
      institution: "Vidya Mandir Highschool, Vairag, Solapur",
      period: "2017 - 2018",
      grade: "Aggregate: 94.80%",
      location: "Maharashtra, India",
      type: "Secondary School"
    }
  ];

  const trainings = [
    {
      title: "Full Stack Web Development",
      provider: "100xDevs",
      period: "Completed",
      skills: ["React", "Node.js", "TypeScript", "Prisma", "PostgreSQL"],
      type: "Online Course"
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      provider: "Udemy",
      period: "Completed",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "React", "MongoDB"],
      type: "Online Course"
    },
    {
      title: "Vocational Training in Web Development",
      provider: "Katare Informatics",
      period: "Aug '22 - Sep '22",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "Training"
    }
  ];

  return (
    <div className="py-20 px-6 bg-slate-50/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Education & Training
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Education */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              Education
            </h3>

            <div className="space-y-6 flex-1">
              {education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {edu.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>

                    <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <p className="font-medium text-slate-700 dark:text-slate-300">
                        {edu.institution}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>

                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                          <Award className="h-4 w-4" />
                          <span className="text-sm font-semibold">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Training & Certifications */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-purple-600" />
              Training & Certifications
            </h3>

            <div className="space-y-6 flex-1">
              {trainings.map((training, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                        {training.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar className="h-4 w-4" />
                        {training.period}
                      </div>
                    </div>

                    <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {training.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <p className="font-medium text-slate-700 dark:text-slate-300">
                        {training.provider}
                      </p>

                      <div>
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
                          Key Skills Learned:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {training.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="bg-slate-50 dark:bg-slate-700 text-xs">
                              {skill}
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
      </div>
    </div>
  );
};

export default EducationSection;
