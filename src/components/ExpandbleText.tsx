import { Children, useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
  //   isMore: boolean;
  //   onClickAction: () => void;
}

const ExpandbleText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <div>
      {text}...{" "}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandbleText;
