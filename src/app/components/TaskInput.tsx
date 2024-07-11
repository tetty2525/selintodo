import * as React from 'react';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { z } from 'zod';

// タスクのバリデーションスキーマを作成
const taskSchema = z.string().min(1, "Task cannot be empty").refine((val) => val.trim().length > 0, {
    message: "Task cannot be just whitespace",
  });  

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [taskInput, setTaskInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleAddTask() {
    const validationResult = taskSchema.safeParse(taskInput);
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      return;
    }
    setError(null); // エラーをクリア
    onAddTask(taskInput.trim());
    setTaskInput('');
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTask();
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        marginBottom: 2,
      }}
    >
      <TextField
        id="taskInput"
        label="Enter a task"
        variant="outlined"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{ minWidth: 300 }}
        error={!!error} // エラーがある場合はスタイルを適用
        helperText={error} // エラーメッセージを表示
      />
      <Button variant="contained" size="large" onClick={handleAddTask}>
        Add
      </Button>
    </Box>
  );
}
