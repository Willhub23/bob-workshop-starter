import React from "react";
import { Avatar, Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box>
      <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
        <Typography variant="h6" gutterBottom color="#3f51b5">
          Om Meg
        </Typography>
        <Typography>
          hei eg kommer fra øygarden, eg har grodd denne blomsten, fin?
        </Typography>
      </Box>

      <Avatar
        src="/bilde-av-kompis.jpeg" 
        alt="Blomst"
        sx={{
          width: 150,
          height: 150,
          margin: "auto",
          border: "4px solid #3f51b5",
        }}
      />
        
    

      <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
        <Typography variant="h6" gutterBottom color="#3f51b5">
          Om andre
        </Typography>
        <Typography>
          hei han kommer fra sveits, han er skadet
        </Typography>
      </Box>
    </Box>
  );
}

export default Description;
