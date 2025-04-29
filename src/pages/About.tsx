import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BuildIcon from "@mui/icons-material/Build";

const About: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        About Me
      </Typography>
      <Typography
        variant="subtitle1"
        component="h2"
        gutterBottom
        align="center"
      >
        I’m more than just a software developer. I bring life experience,
        curiosity, and a collaborative mindset to every team I join.
      </Typography>

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <PeopleIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">Working with People</Typography>
          </Box>
          <Typography variant="body1">
            Before transitioning to tech, I worked as a nursing assistant, an
            experience that taught me to listen, stay calm under pressure, and
            collaborate in different environments. I thrive in team settings and
            genuinely value good communication and a supportive work culture.
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
            I'm naturally curious and love learning new things. Whether it’s
            picking up a new framework or finding clean solutions to tricky
            bugs, I’m quick to adapt and enjoy the problem-solving side of
            development.
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
            I’m into sports and staying active. Right now, I go to the gym and
            have started jogging. I also enjoy hanging out with people, whether
            it's after work at a bar or joining in on group activities. At home,
            I love cooking and trying out new recipes, who can say no to good
            food. I'm also enjoy reader, whether it’s fiction to unwind or
            non-fiction to gain new insights.
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
            I grew up on a farm where I helped care for animals and harvest hay.
            I also spent time fixing cars. I guess you could say I’ve always
            liked to build and repair things. That mindset naturally evolved
            into an interest in software and engineering.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
