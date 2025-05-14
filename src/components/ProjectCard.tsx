
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  liveUrl,
  category
}) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative overflow-hidden h-64">
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">

        <img 
          src={`${imageUrl}`} 
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        </a>
        <div className="absolute top-3 right-3">
          <span className="bg-primary/80 backdrop-blur-sm text-xs font-medium py-1 px-2 rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-darkText/70 mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-muted px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block text-sm font-medium text-primary-foreground link-hover"
        >
          View Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
