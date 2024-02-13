import React, { useState, useEffect } from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./style.scss";
import flowerAnimationHTML from "./flowerAnimation.html.js"; // Adjust the import path as necessary

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0); // Track the current index of the message to display

  const message = `dear alex,
as we celebrate our 1st valentines day as husband and wife, my heart is filled with gratitude and love for all the moments we've shared together. 

the past year was truly a whirlwind for me (and you), filled with career changes, wedding planning, and everything in between (the 13 gates of hell). but through it all, you were my pillar of strength. you filled our days with laughter, and never hesitated to lend a listening ear, even when it's 1am in the morning and you're trying to fall asleep. 

truly, "“Nothing in the world is worth having or worth doing unless it means effort, pain, difficulty…"― Theodore Roosevelt"- Coey Tang 
because having you in my life, has been the greatest reward, the sweetest victory. every struggle, every tear, every sleepless night pales in comparison to the joy of loving and being loved by you.

i feel like the luckiest girl alive to have you by my side. you're the hand i hold, the shoulder i lean on, and the embrace that brings me solace. your love means everything to me, and i can't wait to spend the rest of our lives together.

thank you for choosing to love me. 

with all my love,
your lovely wife coey`;

  useEffect(() => {
    if (isOpen && index < message.length) {
      const interval = setInterval(() => {
        setIndex((currentIndex) => currentIndex + 4);
      }, 50); // Adjust typing speed here

      return () => clearInterval(interval);
    }
    // Reset index when closing the card
    if (!isOpen) {
      setIndex(0);
    }
  }, [isOpen, index, message.length]);

  // Define the animation variants for the heart
  const heartVariants = {
    beat: {
      scale: [1, 1.25, 1], // Heart grows and shrinks
      transition: {
        duration: 0.75, // Duration of one beat cycle
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "loop", // Type of repetition
        ease: "easeInOut", // Type of easing
      },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          backgroundColor: "transparent",
          "&:hover": { backgroundColor: "transparent" },
          padding: 0,
          zIndex: 10,
        }}
      >
        {/* Apply the animation to the heart */}
        <motion.div variants={heartVariants} animate="beat">
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "white", fontSize: "2rem" }}
          >
            ❤️
          </Typography>
        </motion.div>
      </Button>
      {isOpen && (
        <>
          <Card
            sx={{
              mt: 2,
              p: 2,
              maxWidth: "70%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              zIndex: 10,
              color: "white",
              overflowY: "auto",
              maxHeight: "30vh",
              borderRadius: "10px",
              "&::-webkit-scrollbar": { width: "10px" },
              "&::-webkit-scrollbar-track": { background: "#f1f1f1" },
              "&::-webkit-scrollbar-thumb": { background: "#888" },
              "&::-webkit-scrollbar-thumb:hover": { background: "#555" },
            }}
          >
            <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
              {message.slice(0, index)}
            </Typography>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              zIndex: 5,
            }}
            dangerouslySetInnerHTML={{ __html: flowerAnimationHTML }}
          />
        </>
      )}
    </Box>
  );
};

export default ValentineCard;
