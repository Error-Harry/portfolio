import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "nargideharsh@gmail.com",
      href: "mailto:nargideharsh@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-7249861080",
      href: "tel:+917249861080"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Pune, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/Error-Harry",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/harsh-nargide-428100207/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      href: "https://instagram.com/harshnargide",
      color: "hover:text-pink-600"
    }
  ];


  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                    <div className="text-blue-600">{info.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                Connect with Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className="p-4 hover:scale-110 transition-all duration-300"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${social.color}`}
                    >
                      {social.icon}
                      <span className="hidden sm:inline">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I'm always open to discussing new opportunities, interesting projects,
                  and potential collaborations. Don't hesitate to reach out!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
