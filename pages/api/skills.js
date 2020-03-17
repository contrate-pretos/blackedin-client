import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const url = "https://blackedin-api.herokuapp.com/skills";

  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      return res.status(200).json(await response.json());
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } catch (error) {}
};
