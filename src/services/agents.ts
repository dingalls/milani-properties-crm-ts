import { Agent } from "@/models/agent";
import axios from "axios";

export async function getAgents(): Promise<any> {
  const response = await axios.get(`${process.env.API_URL}/api/agents`);
  return response.data;
}

export async function saveAgent(newAgent: any): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  const response = await axios.post(
    `${process.env.API_URL}/api/agent`,
    newAgent,
    {
      headers,
    }
  );

  return response.data;
}

export async function getAgent(agentId: string): Promise<any> {
  const response = await axios.get(
    `${process.env.API_URL}/api/agent/${agentId}`
  );
  return response.data;
}

export async function updateAgent(agent: Agent): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const response = await axios.put(
    `${process.env.API_URL}/api/agent/${agent._id}`,
    agent,
    {
      headers,
    }
  );

  return response.data;
}

export async function deleteAgent(agentId: string): Promise<any> {
  const response = await axios.delete(
    `${process.env.API_URL}/api/agent/${agentId}`
  );
  return response.data;
}
