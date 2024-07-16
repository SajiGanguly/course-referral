import { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box, Button, Modal, TextField } from "@mui/material";
import { motion } from "framer-motion";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: 4,
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: "auto",
  maxWidth: 500,
  flexGrow: 1,
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.secondary.main,
  borderColor: theme.palette.secondary.main,
  textTransform: "none",
  "&:hover": {
    borderColor: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
  },
}));

const RemoveButton = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.error.main,
  "&:hover": {
    color: theme.palette.error.dark,
  },
}));

function ComplexGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledPaper>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="/Images/Pic1.jpeg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <RemoveButton variant="body2">Remove</RemoveButton>
                <StyledButton onClick={handleModalOpen} variant="outlined">
                  Refer
                </StyledButton>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </StyledPaper>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-modal-title">Refer a User to a Course</h2>
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Referrer User ID"
              variant="outlined"
              defaultValue="123"
              disabled
              name="referrerUserId"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Referred User ID"
              variant="outlined"
              required
              name="referredUserId"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Course ID"
              variant="outlined"
              required
              name="courseId"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Notes (Optional)"
              variant="outlined"
              multiline
              rows={4}
              name="notes"
            />

            <TextField
              fullWidth
              select
              margin="normal"
              label="Status"
              variant="outlined"
              defaultValue="pending"
              name="status"
            >
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </TextField>

            <input
              type="hidden"
              name="referralDate"
              value={new Date().toISOString()}
            />

            <Button type="submit" variant="contained" color="primary">
              Submit Referral
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default function GridContainer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <ComplexGrid />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <ComplexGrid />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <ComplexGrid />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <ComplexGrid />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <ComplexGrid />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <ComplexGrid />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </>
  );
}
