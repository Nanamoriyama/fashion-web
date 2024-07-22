const customFetch = {
  post: async (url: string, data: any) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      return response;
    } catch (error: any) {
      console.error(`Error during fetch: ${error.message}`, error);
      throw error;
    }
  },
};

export default customFetch;
