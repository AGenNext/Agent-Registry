export type AgentListing = {
  canonical_id: string;
  agent_id: string;
  did: string;
  publisher_id: string;
  publisher_did: string;
  name: string;
  source_repository: string;
  short_description: string;
  categories: string[];
  capabilities: string[];
  verification_status: string;
  lifecycle_state: string;
};

export const agents: AgentListing[] = [
  {
    canonical_id: 'did:web:agents.agennext.dev:docker-cagent-runtime',
    agent_id: 'agent_docker_cagent_001',
    did: 'did:web:agents.agennext.dev:docker-cagent-runtime',
    publisher_id: 'publisher_docker',
    publisher_did: 'did:web:docker.com',
    name: 'Docker Agent Runtime',
    source_repository: 'https://github.com/docker/cagent',
    short_description: 'Multi-agent runtime for building, sharing, and running specialized agent teams using Docker Agent/cagent.',
    categories: ['runtime', 'multi-agent', 'developer-tools'],
    capabilities: ['agent_team_orchestration', 'mcp_tooling', 'oci_agent_packaging', 'terminal_runtime'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:google-adk-agent',
    agent_id: 'agent_google_adk_001',
    did: 'did:web:agents.agennext.dev:google-adk-agent',
    publisher_id: 'publisher_google',
    publisher_did: 'did:web:google.com',
    name: 'Google ADK Agent',
    source_repository: 'https://github.com/google/adk-python',
    short_description: "Production-grade agent built using Google's Agent Development Kit.",
    categories: ['framework', 'agent-development'],
    capabilities: ['tool_calling', 'session_management', 'evaluation', 'deployment'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:langgraph-workflow-agent',
    agent_id: 'agent_langgraph_001',
    did: 'did:web:agents.agennext.dev:langgraph-workflow-agent',
    publisher_id: 'publisher_langchain',
    publisher_did: 'did:web:langchain.com',
    name: 'LangGraph Workflow Agent',
    source_repository: 'https://github.com/langchain-ai/langgraph',
    short_description: 'Stateful, durable workflow agent built on LangGraph.',
    categories: ['workflow', 'stateful-agents'],
    capabilities: ['checkpointing', 'human_in_the_loop', 'graph_execution'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:crewai-research-crew',
    agent_id: 'agent_crewai_research_001',
    did: 'did:web:agents.agennext.dev:crewai-research-crew',
    publisher_id: 'publisher_crewai',
    publisher_did: 'did:web:crewai.com',
    name: 'CrewAI Research Crew',
    source_repository: 'https://github.com/crewAIInc/crewAI',
    short_description: 'Collaborative research team based on CrewAI.',
    categories: ['research', 'multi-agent'],
    capabilities: ['web_research', 'analysis', 'report_generation'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:microsoft-autogen-coordinator',
    agent_id: 'agent_microsoft_autogen_001',
    did: 'did:web:agents.agennext.dev:microsoft-autogen-coordinator',
    publisher_id: 'publisher_microsoft',
    publisher_did: 'did:web:microsoft.com',
    name: 'AutoGen Coordinator',
    source_repository: 'https://github.com/microsoft/autogen',
    short_description: 'Multi-agent orchestration based on Microsoft AutoGen.',
    categories: ['orchestration', 'multi-agent'],
    capabilities: ['agent_coordination', 'tool_use', 'workflow_execution'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:agno-knowledge-agent',
    agent_id: 'agent_agno_001',
    did: 'did:web:agents.agennext.dev:agno-knowledge-agent',
    publisher_id: 'publisher_agno',
    publisher_did: 'did:web:agno.com',
    name: 'Agno Knowledge Agent',
    source_repository: 'https://github.com/agno-agi/agno',
    short_description: 'Memory and knowledge-aware agent built using Agno.',
    categories: ['knowledge', 'memory'],
    capabilities: ['rag', 'memory', 'tool_use'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:dspy-optimizer-agent',
    agent_id: 'agent_dspy_001',
    did: 'did:web:agents.agennext.dev:dspy-optimizer-agent',
    publisher_id: 'publisher_stanfordnlp',
    publisher_did: 'did:web:stanford.edu',
    name: 'DSPy Optimizer Agent',
    source_repository: 'https://github.com/stanfordnlp/dspy',
    short_description: 'Prompt and program optimization agent built with DSPy.',
    categories: ['optimization', 'evaluation'],
    capabilities: ['prompt_optimization', 'teleprompting', 'evaluation'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:langflow-visual-agent',
    agent_id: 'agent_langflow_001',
    did: 'did:web:agents.agennext.dev:langflow-visual-agent',
    publisher_id: 'publisher_langflow',
    publisher_did: 'did:web:langflow.org',
    name: 'Langflow Visual Agent',
    source_repository: 'https://github.com/langflow-ai/langflow',
    short_description: 'Visually designed agent workflow built with Langflow.',
    categories: ['visual-builder', 'workflow'],
    capabilities: ['drag_and_drop_design', 'tool_calling', 'api_deployment'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:dify-enterprise-agent',
    agent_id: 'agent_dify_001',
    did: 'did:web:agents.agennext.dev:dify-enterprise-agent',
    publisher_id: 'publisher_dify',
    publisher_did: 'did:web:dify.ai',
    name: 'Dify Enterprise Agent',
    source_repository: 'https://github.com/langgenius/dify',
    short_description: 'Enterprise-grade agent application built on Dify.',
    categories: ['enterprise', 'application-platform'],
    capabilities: ['workflow_orchestration', 'knowledge_base', 'api_publishing'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  },
  {
    canonical_id: 'did:web:agents.agennext.dev:llamaindex-rag-agent',
    agent_id: 'agent_llamaindex_001',
    did: 'did:web:agents.agennext.dev:llamaindex-rag-agent',
    publisher_id: 'publisher_llamaindex',
    publisher_did: 'did:web:llamaindex.ai',
    name: 'LlamaIndex RAG Agent',
    source_repository: 'https://github.com/run-llama/llama_index',
    short_description: 'Retrieval-augmented generation agent built with LlamaIndex.',
    categories: ['rag', 'knowledge'],
    capabilities: ['document_ingestion', 'retrieval', 'query_engine', 'agentic_rag'],
    verification_status: 'source_verified',
    lifecycle_state: 'active'
  }
];

export const categories = Array.from(new Set(agents.flatMap((agent) => agent.categories))).sort();
export const capabilities = Array.from(new Set(agents.flatMap((agent) => agent.capabilities))).sort();
export const publishers = Array.from(new Set(agents.map((agent) => agent.publisher_id))).sort();
export const verificationStatuses = Array.from(new Set(agents.map((agent) => agent.verification_status))).sort();
