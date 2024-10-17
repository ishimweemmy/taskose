export const calculateProjectProgress = (project: TProject) => {
    let totalTaskProgress = 0;
    const taskCount = project.tasks.length;
  
    project.tasks.forEach((task) => {
      if (task.subtasks.length > 0) {
        // Calculate the average progress of the subtasks
        const subtaskProgressSum = task.subtasks.reduce((sum, subtask) => sum + subtask.progress, 0);
        const averageSubtaskProgress = subtaskProgressSum / task.subtasks.length;
        totalTaskProgress += averageSubtaskProgress;
      } else {
        // No subtasks, use the task's progress directly
        totalTaskProgress += task.progress;
      }
    });
  
    // Grand total progress for the project is the average progress of all tasks
    const grandProgress = totalTaskProgress / taskCount;
    return grandProgress;
  }