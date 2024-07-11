import * as React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskListProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

export default function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {tasks.map((task, index) => (
        <ListItem key={index} sx={{ borderBottom: '1px solid #ddd' }}>
          <ListItemText primary={task} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
