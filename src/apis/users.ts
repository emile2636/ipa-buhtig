import { octokit } from "../utils/request";

export async function getUserByName({ userName }: { userName: string }) {
  const res = await octokit.request(`GET /users/${userName}`);
  return res.data;
}

export async function getUserReposByName({ userName }: { userName: string }) {
  const res = await octokit.request(`GET /users/${userName}/repos`);
  return res.data;
}
