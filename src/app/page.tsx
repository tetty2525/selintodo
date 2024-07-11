"use client";

import * as React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleAddTask(task: string) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(index: number) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom align="center">
        SelinのToDoリスト
      </Typography>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </Box>
  );
}