export type OpportunitiesSearchContactResponseSchema = {
  id?: string /** Contact ID */;
  name?: string /** Contact name */;
  companyName?: string /** Company name */;
  email?: string /** Contact email */;
  phone?: string /** Contact phone */;
  tags?: string[] /** Contact tags */;
};

export type OpportunitiesCFResponseSchema = {
  id: string /** Custom field ID */;
  fieldValue: string | object | string[] | object[] /** Custom field value */;
};

export type Opportunity = {
  id: string /** Opportunity ID */;
  name?: string /** Opportunity name */;
  monetaryValue?: number /** Monetary value of the opportunity */;
  pipelineId?: string /** Pipeline ID */;
  pipelineStageId?: string /** Pipeline stage ID */;
  assignedTo?: string /** User ID of the assigned user */;
  status?: string /** Opportunity status */;
  source?: string /** Opportunity source */;
  lastStatusChangeAt?: string /** Last status change timestamp */;
  lastStageChangeAt?: string /** Last stage change timestamp */;
  lastActionDate?: string /** Last action date timestamp */;
  indexVersion?: string /** Index version */;
  createdAt?: string /** Created timestamp */;
  updatedAt?: string /** Updated timestamp */;
  contactId?: string /** Contact ID */;
  locationId?: string /** Location ID */;
  contact?: OpportunitiesSearchContactResponseSchema /** Contact details */;
  notes?: string[] /** Opportunity notes */;
  tasks?: string[] /** Opportunity tasks */;
  calendarEvents?: string[] /** Opportunity calendar events */;
  customFields?: OpportunitiesCFResponseSchema[] /** Opportunity custom fields */;
  followers?: string[] /** Opportunity followers */;
};

export type OpportunitiesSearchMeta = {
  total: number /** Total number of opportunities */;
  nextPageUrl: string /** URL for the next page */;
  startAfterId: string /** ID to start after */;
  startAfter: number /** Timestamp to start after */;
  currentPage: number /** Current page number */;
  nextPage: number /** Next page number */;
  prevPage: number /** Previous page number */;
};

export type OpportunitiesSearchResponse = {
  opportunities: Opportunity[];
  meta: OpportunitiesSearchMeta;
  aggregations: object;
};

export type OpportunityResponse = {
  opportunity: Opportunity;
};

export type OpportunityStatus = 'open' | 'won' | 'lost' | 'abandoned';

export type UpdateOpportunityStatusResponse = {
  succeded: boolean;
};

export type OpportunitiesCFInputArraySchema = {
  id: string /** Custom field ID */;
  key: string /** Custom field key */;
  value: string[] /** Custom field value */;
};

export type OpportunitiesCFInputObjectSchema = {
  id: string /** Custom field ID */;
  key: string /** Custom field key */;
  value: object /** Custom field value */;
};

export type OpportunitiesCFInputStringSchema = {
  id: string /** Custom field ID */;
  key: string /** Custom field key */;
  value: string /** Custom field value */;
};

export type CreateOpportunityDto = {
  pipelineId: string /** Pipeline ID */;
  locationId: string /** Location ID */;
  name: string /** Opportunity name */;
  pipelineStageId?: string /** Pipeline stage ID */;
  status: OpportunityStatus /** Opportunity status */;
  contactId: string /** Contact ID */;
  monetaryValue?: number /** Monetary value */;
  assignedTo?: string /** User ID of the assigned user */;
  customFields?: Array<
    | OpportunitiesCFInputArraySchema
    | OpportunitiesCFInputObjectSchema
    | OpportunitiesCFInputStringSchema
  >;
};

export type UpdateOpportunityDto = {
  pipelineId?: string /** Pipeline ID */;
  name?: string /** Opportunity name */;
  pipelineStageId?: string /** Pipeline stage ID */;
  status?: OpportunityStatus /** Opportunity status */;
  contactId?: string /** Contact ID */;
  monetaryValue?: number /** Monetary value */;
  assignedTo?: string /** User ID of the assigned user */;
  customFields?: Array<
    | OpportunitiesCFInputArraySchema
    | OpportunitiesCFInputObjectSchema
    | OpportunitiesCFInputStringSchema
  >;
};

export type UpsertOpportunityDto = {
  pipelineId: string /** Pipeline ID */;
  locationId: string /** Location ID */;
  contactId: string /** Contact ID */;
  name?: string /** Opportunity name */;
  pipelineStageId?: string /** Pipeline stage ID */;
  status?: OpportunityStatus /** Opportunity status */;
  monetaryValue?: number /** Monetary value */;
  assignedTo?: string /** User ID of the assigned user */;
};

export type UpsertOpportunityResponse = {
  opportunity: Opportunity /** Opportunity details */;
  new: boolean /** Whether the opportunity is new */;
};

export type AddOpportunityFollowersResponse = {
  followers: string[] /** Array of user IDs */;
  followersAdded: string[] /** Array of user IDs added */;
};

export type RemoveOpportunityFollowersResponse = {
  followers: string[] /** Array of user IDs */;
  followersRemoved: string[] /** Array of user IDs removed */;
};

export type OpportunitySearchParams = {
  location_id: string;
  assigned_to?: string;
  campaignId?: string;
  contact_id?: string;
  country?: string;
  date?: string;
  endDate?: string;
  getCalendarEvents?: boolean;
  getNotes?: boolean;
  getTasks?: boolean;
  id?: string;
  limit?: number;
  order?: string;
  page?: number;
  pipeline_id?: string;
  pipeline_stage_id?: string;
  q?: string;
  startAfter?: string;
  startAfterId?: string;
  status?: OpportunityStatus | 'all';
};

export type PipelineStage = {
  id: string /** Stage ID */;
  name: string /** Stage name */;
  position: number /** Stage position */;
  showInFunnel: boolean /** Whether to show in funnel */;
  showInPieChart: boolean /** Whether to show in pie chart */;
};

export type Pipeline = {
  id?: string /** Pipeline ID */;
  name?: string /** Pipeline name */;
  stages?: PipelineStage[] /** Pipeline stages */;
  showInFunnel?: boolean /** Whether to show in funnel */;
  showInPieChart?: boolean /** Whether to show in pie chart */;
  locationId?: string /** Location ID */;
};

export type ListPipelinesResponse = {
  pipelines: Pipeline[] /** Array of pipelines */;
};
