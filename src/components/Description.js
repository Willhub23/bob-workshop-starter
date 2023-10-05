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
    </Box>
  );
}

export default Description;
