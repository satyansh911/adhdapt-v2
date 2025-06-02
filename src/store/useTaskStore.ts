import { create } from 'zustand';

interface Task {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  dueDate?: Date;
}

interface TaskState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    })),
  removeTask: (taskId) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
}));