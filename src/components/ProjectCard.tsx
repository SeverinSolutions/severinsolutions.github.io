import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
    problem: string;
    skills: string[];
    githubLink: string;
    youtubeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    image,
    description,
    problem,
    skills,
    githubLink,
    youtubeLink,
}) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia component="img" height="140" image={image} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Problem Solved:</strong> {problem}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Skills:</strong> {skills.join(', ')}
                </Typography>
                <Button size="small" component={Link} to={githubLink} target="_blank" disabled={!githubLink}>
                    GitHub
                </Button>
                <Button size="small" component={Link} to={youtubeLink} target="_blank" disabled={!youtubeLink}>
                    YouTube
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;