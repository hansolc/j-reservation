interface ServerPostRequestProps {
  title: string;
  content: string;
}

interface ServerFetchRequestProps extends ServerPostRequestProps {
  id: number;
  deleted: boolean;
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
