import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ReadmeModal from "./ReadmeModal";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  problem: string;
  skills: string[];
  githubLink: string;
  githubReadme: string;
  youtubeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  problem,
  skills,
  githubLink,
  githubReadme,
  youtubeLink,
}) => {
  const [open, setOpen] = useState(false);
  const [readmeContent, setReadmeContent] = useState("");

  const handleOpen = async () => {
    const readmeUrl = githubReadme;

    try {
      const response = await fetch(readmeUrl);
      if (response.ok) {
        const text = await response.text();
        setReadmeContent(text);
        setOpen(true);
      } else {
        console.error("Failed to fetch README:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching README:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        {image && (
          <CardMedia component="img" height="140" image={image} alt={title} />
        )}

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
            <strong>Skills:</strong> {skills.join(", ")}
          </Typography>
          <Button size="small" onClick={handleOpen} disabled={!githubLink}>
            Dokument
          </Button>
          <Button
            size="small"
            component={Link}
            to={githubLink}
            target="_blank"
            disabled={!githubLink}
          >
            Github
          </Button>
          <Button
            size="small"
            component={Link}
            to={youtubeLink}
            target="_blank"
            disabled={!youtubeLink}
          >
            Youtube
          </Button>
        </CardContent>
      </Card>
      <ReadmeModal
        open={open}
        onClose={handleClose}
        readmeContent={readmeContent}
      />
    </>
  );
};

export default ProjectCard;
