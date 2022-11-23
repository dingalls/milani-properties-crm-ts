import { Agent } from "@/models/agent";
import axios from "axios";

export async function getAgents(): Promise<any> {
  const response = await axios.get("http://localhost:3000/api/agents");
  return response.data;
}

export async function saveAgent(newAgent: any): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  const response = await axios.post(
    "http://localhost:3000/api/agent",
    newAgent,
    {
      headers,
    }
  );

  return response.data;
}

export async function getAgent(agentId: string): Promise<any> {
  const response = await axios.get(
    `http://localhost:3000/api/agent/${agentId}`
  );
  return response.data;
}

export async function updateAgent(agent: Agent): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const response = await axios.put(
    `http://localhost:3000/api/agent/${agent._id}`,
    agent,
    {
      headers,
    }
  );

  return response.data;
}

export async function deleteAgent(agentId: string): Promise<any> {
  const response = await axios.delete(
    `http://localhost:3000/api/agent/${agentId}`
  );
  return response.data;
}
