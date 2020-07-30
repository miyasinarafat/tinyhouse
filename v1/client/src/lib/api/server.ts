interface Body {
    query: string
}

export const server = {
    fetch: async (body: Body) => {
        const response = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });

        return response.json();
    }
};
