interface ServerPostRequestProps {
  title: string;
  content: string;
}

interface ServerFetchRequestProps extends ServerPostRequestProps {
  id: number;
  deleted: boolean;
  responseContent?: string;
}

interface ServerAdminFetchRequestProps extends ServerFetchRequestProps {
  id: number;
  createdAt: string;
  responseContent?: string;
}

export type {
  ServerPostRequestProps,
  ServerFetchRequestProps,
  ServerAdminFetchRequestProps,
};
