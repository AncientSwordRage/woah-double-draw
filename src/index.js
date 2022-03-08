import React from 'react';
import Typography from "@mui/material/Typography";
import { Drawer, List, ListItemButton, ListItemIcon } from '@mui/material';

const items = ['Inbox', 'Starred', 'Send email', 'Drafts'];
const DoubleDrawer = () => {
  return <div>
    <Typography variant="h1">Woah Double Drawer</Typography>
    <Drawer variant="permanent">
      <List>
        {items.map((text, index) => (
          <ListItemButton
            key={text}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  </div>
};

export default DoubleDrawer
