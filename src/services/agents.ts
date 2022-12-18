import { Agent } from "@/models/agent";
import axios from "axios";

export async function getAgents(): Promise<any> {
  const response = await axios.get(
    "http://crmapi-env.eba-mjteec9h.us-west-2.elasticbeanstalk.com/api/agents"
  );
  return response.data;
}

export async function saveAgent(newAgent: any): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  const response = await axios.post(
    "http://crmapi-env.eba-mjteec9h.us-west-2.elasticbeanstalk.com/api/agent",
    newAgent,
    {
      headers,
    }
  );

  return response.data;
}

export async function getAgent(agentId: string): Promise<any> {
  const response = await axios.get(
    `http://crmapi-env.eba-mjteec9h.us-west-2.elasticbeanstalk.com/api/agent/${agentId}`
  );
  return response.data;
}

export async function updateAgent(agent: Agent): Promise<any> {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const response = await axios.put(
    `http://crmapi-env.eba-mjteec9h.us-west-2.elasticbeanstalk.com/api/agent/${agent._id}`,
    agent,
    {
      headers,
    }
  );

  return response.data;
}

export async function deleteAgent(agentId: string): Promise<any> {
  const response = await axios.delete(
    `http://crmapi-env.eba-mjteec9h.us-west-2.elasticbeanstalk.com/api/agent/${agentId}`
  );
  return response.data;
}
