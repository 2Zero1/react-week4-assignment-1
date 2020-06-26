import React from 'react';

import Input from './Input';
import ListContainer from './ListContainer';

export default function Page({
  taskTitle,
  onChangeTitle,
  onClickAddTask,
  tasks,
  onClickDeleteTask,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={onChangeTitle}
        onClick={onClickAddTask}
      />
      <ListContainer tasks={tasks} onClickDelete={onClickDeleteTask} />
    </div>
  );
}
