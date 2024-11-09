interface ServerPostRequestProps {
  title: string;
  content: string;
}

interface ServerFetchRequestProps extends ServerPostRequestProps {
  deleted: boolean;
}

export type { ServerPostRequestProps, ServerFetchRequestProps };
