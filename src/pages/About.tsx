import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BuildIcon from "@mui/icons-material/Build";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const About: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Behind the Code
      </Typography>
      <Typography
        variant="subtitle1"
        component="h2"
        gutterBottom
        align="center"
      >
        Beyond my technical skills as a software developer, I understand the
        importance of a strong team environment. I bring valuable life
        experience, a natural curiosity, and a collaborative spirit to every
        project and team I become a part of. Whether in tech or life, I value
        learning, clarity, and meaningful collaboration.
      </Typography>

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <LightbulbIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">My Path to Programming</Typography>
          </Box>
          <Typography variant="body1">
            It started with my interest in the growing reliance on machines and
            advanced tools, leading me to pursue civil engineering in
            electronics. It was during this education that I was introduced to
            programming. I found myself increasingly drawn to it, spending more
            time coding than on other subjects. This growing interest led me to
            pursue software development more seriously.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <PeopleIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">Working with People</Typography>
          </Box>
          <Typography variant="body1">
            Before and during my transition into tech, I worked as a nursing
            assistant. This experience taught me the value of active listening,
            clear communication, and effective collaboration within a team.
            These skills are fundamental to how I approach teamwork in any
            environment.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <EngineeringIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">Curiosity & Problem Solving</Typography>
          </Box>
          <Typography variant="body1">
            My natural curiosity drives me to continuously learn and explore new
            concepts, both within and beyond software development. When faced
            with challenges, I apply a divide-and-conquer mindset to break
            problems down and work efficiently toward a solutions.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <BuildIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">Hands-On Background</Typography>
          </Box>
          <Typography variant="body1">
            Growing up on a farm, I learned the value of hard work through
            animal handling, repairing cars, and building and renovating
            structures. This hands-on background instilled in me a practical
            approach to problem-solving, attention to detail, and the
            satisfaction of building things from the ground up.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <FavoriteIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">Life Outside of Work</Typography>
          </Box>
          <Typography variant="body1">
            Outside of programming, I value staying active, connecting with others,
            and engaging my creativity through hobbies like cooking and
            exploring various forms of storytelling and knowledge.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
