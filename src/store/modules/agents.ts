import {
  getAgents,
  getAgent,
  saveAgent,
  updateAgent,
  deleteAgent,
} from "../../services/agents";
import { Agent } from "../../models/agent";

const state = {
  agents: [],
  agent: null,
};

const getters = {
  allAgents: (state: any) => state.agents,
  getSelectedAgent: (state: any) => state.agent,
};

const actions = {
  async fetchAgents(context: any): Promise<void> {
    context.commit("SET_AGENTS", await getAgents());
  },
  async fetchAgent(context: any, agentId: string): Promise<void> {
    context.commit("SET_AGENT", await getAgent(agentId));
  },
  async addAgent(context: any, agent: Agent): Promise<void> {
    const newAgent = {
      name: agent.name,
    };

    const response = await saveAgent(newAgent);
    context.commit("ADD_AGENT", response);
  },
  async updateAgent(context: any, agent: Agent): Promise<void> {
    await updateAgent(agent);
    context.commit("UPDATE_AGENT", agent);
  },
  async deleteAgent(context: any, agentId: string): Promise<void> {
    await deleteAgent(agentId);
    context.commit("DELETE_AGENT", agentId);
  },
};

const mutations = {
  SET_AGENTS(state: any, payload: any) {
    state.agents = payload;
  },
  SET_AGENT(state: any, payload: any) {
    state.agent = payload;
  },
  ADD_AGENT(state: any, payload: any) {
    state.agents.push(payload);
  },
  UPDATE_AGENT(state: any, payload: any) {
    const index = state.agents.findIndex(
      (agent: { _id: any }) => agent._id === payload._id
    );
    if (index !== -1) {
      state.agents.splice(index, 1, payload);
    }
  },
  DELETE_AGENT(state: any, payload: any) {
    state.agents = state.agents.filter(
      (agent: { _id: string }) => agent._id !== payload
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
