import React from "react";
import { useEffect, useState } from "react";
import DataTable from "@/components/data-table";
import columns from "@/components/columns";

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("/api/tasks");
                if (response.ok) {
                    const data = await response.json();
                    setTasks(data);
                } else {
                    console.error("Failed to fetch tasks");
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) {
        return <p>Loading tasks...</p>;
    }

    return (
        <DataTable data={tasks} columns={columns} />
    );
};

export default TaskPage;
