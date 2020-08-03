import {threadId} from "worker_threads";

interface Body<TVariables> {
    query: string;
    variables?: TVariables;
}

interface Error {
    message: string;
}

export const server = {
    fetch: async <TData = any, TVariables = any>(body: Body<TVariables>) => {
        const response = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error("Failed to fetch from server!");
        }

        return response.json() as Promise<{
            data: TData,
            errors: Error[]
        }>;
    }
};
