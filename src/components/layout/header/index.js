import React, { useState } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {
  Modal,
  Box,
  FormGroup,
  InputLabel,
  Input,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import StickyHeader from "react-sticky-header";
import "react-sticky-header/styles.css";
import uuidv4 from "uuid/v4";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Header(props) {
  const { title, cards, setDisplayCards } = props;
  const [open, setOpen] = useState(false);
  const [issueType, setIssueType] = useState("EPIC");
  const [newtitle, setNewtitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const submitHandler = () => {
    if (newtitle === "") {
      alert("Please provide a title");
      return;
    }
    if (description === "") {
      alert("Please provide a description");
      return;
    }
    if (assignedTo === "") {
      alert("Please provide an assignee");
      return;
    }
    let newCards = cards;
    newCards["TO DO"].cards.push({
      id: uuidv4(),
      title: newtitle,
      description: description,
      assignedTo: assignedTo,
      type: issueType,
    });
    localStorage.setItem("prevState", JSON.stringify(newCards));
    setDisplayCards({ ...cards, ...newCards });
    setOpen(false);
    setIssueType("EPIC");
    setNewtitle("");
    setDescription("");
    setAssignedTo("");
  };
  return (
    <StickyHeader
      headerOnly={true}
      header={
        <Toolbar
          sx={{ borderBottom: 1, borderColor: "divider", background: "white" }}
        >
          {/* <Button href="https://www.buymeacoffee.com/ankitpawar" size="small">
            Buy me a coffee
          </Button> */}
          <Button size="small" onClick={() => setOpen(true)}>
            Create
          </Button>
          <Modal open={open}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Issue
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <FormGroup>
                  <InputLabel htmlFor="title">Title</InputLabel>
                  <Input
                    id="title"
                    value={newtitle}
                    onChange={(e) => setNewtitle(e.target.value)}
                  />
                  <InputLabel htmlFor="description">Description</InputLabel>
                  <Input
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <InputLabel htmlFor="assignedTo">Assigned To</InputLabel>
                  <Input
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    id="assignedTo"
                  />
                  <InputLabel htmlFor="issueType">Work Item Type</InputLabel>
                  <Select
                    id="issueType"
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                  >
                    <MenuItem value="EPIC">Epic</MenuItem>
                    <MenuItem value="STORY">Story</MenuItem>
                    <MenuItem value="TASK">Task</MenuItem>
                    <MenuItem value="BUG">Bug</MenuItem>
                  </Select>
                  <Button onClick={() => submitHandler()}>Create</Button>
                </FormGroup>
              </Typography>
            </Box>
          </Modal>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      }
    ></StickyHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
