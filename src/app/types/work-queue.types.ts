export interface WorkQueueItem {
  alias: string;
  fullName: string;
  client: string;
  line: string;
  type: string;
  status: string;
  statusColor: string;
  created: string;
}

export interface WorkQueueList {
  [key: string]: WorkQueueItem[];
}
