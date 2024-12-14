interface ICodeResultProps {
  output?: string;
  error?: string;
  loading: boolean;
}

interface ISwitchLangProps {
  language: string;
  handleLanguageChange: (e: string) => void;
}

export type { ICodeResultProps, ISwitchLangProps };
