import config from "../config/index.js";
import fetch from "node-fetch";
import { WorkTime } from "../work-time/index.js";

const addTimeEntry = async (data: WorkTime) => {
  const endpoint = `${config.apiBaseUrl}/workspaces/${config.workspaceId}/time-entries`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "X-Api-Key": config.apiKey,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export { addTimeEntry };
