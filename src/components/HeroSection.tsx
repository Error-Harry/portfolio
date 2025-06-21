
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Full Stack Developer', 'AI Developer', 'React Specialist', 'Problem Solver'];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 100 : 150);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 dark:from-cyan-600/10 dark:to-blue-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Harsh Nargide
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a </span>
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer specializing in AI integration, modern web technologies, 
            and creating innovative solutions that drive business growth and user engagement.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://linkedin.com/in/harsh-nargide-428100207/', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            Connect on LinkedIn
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://github.com/Error-Harry', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
          >
            <FileText className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-slate-400 dark:text-slate-500" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
