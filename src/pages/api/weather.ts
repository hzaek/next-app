import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const api = process.env.WEATHER_API_KEY;
  const { city = "Muscat" } = req.query;
  const url = `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=yes`;
  try {
    const response = await fetch(url, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}

// https://api.weatherapi.com/v1/current.json?key=d1b6990b8bad42cfaff195004252401&q=musqat&aqi=yes