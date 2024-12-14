interface IExample {
  input: string;
  output: string;
  explanation: string;
}

interface IDecription {
  title: string;
  description: string;
  example: IExample[];
}

export type { IDecription };
