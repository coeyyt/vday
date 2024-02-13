// import React, { useState } from "react";
// import Heart from "./Heart";
// import MessageModal from "./MessageModal";
// import { Container } from "@mui/material";

// function App() {
//   const [openModal, setOpenModal] = useState(false);
//   const message = "You have my heart. Let's make every day Valentine's Day!";

//   const handleOpen = () => setOpenModal(true);
//   const handleClose = () => setOpenModal(false);

//   return (
//     <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "20%" }}>
//       <Heart onClick={handleOpen} />
//       <MessageModal
//         open={openModal}
//         handleClose={handleClose}
//         message={message}
//       />
//     </Container>
//   );
// }

// export default App;
import React from "react";
import ValentineCard from "./ValentineCard";

function App() {
  return (
    <div className="App">
      <ValentineCard />
    </div>
  );
}

export default App;
