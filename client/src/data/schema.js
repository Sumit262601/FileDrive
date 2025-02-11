import { z } from "zod";

// Define the schema for tasks
const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

// Function to validate tasks using the schema
const validateTask = (task) => taskSchema.parse(task);

export { taskSchema, validateTask };
