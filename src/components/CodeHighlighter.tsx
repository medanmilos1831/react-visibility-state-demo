import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeHighlighterProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  language = "tsx",
  showLineNumbers = true,
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      showLineNumbers={showLineNumbers}
      wrapLines={true}
      wrapLongLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};
