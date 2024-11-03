type APICustomErrorResponse = {
  errorId: number | string;
  errorMessage: string;
};

interface ErrorContextProps {
  error: string | null;
  updateError: (error: Error) => void;
}

export type { APICustomErrorResponse, ErrorContextProps };
