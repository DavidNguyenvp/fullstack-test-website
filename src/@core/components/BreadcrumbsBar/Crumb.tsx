import Typography from "@mui/material/Typography";
import Link from "next/link";


export interface ICrumbProps {
  href: string;
  text: string;
  last: boolean;
}

const Crumb: React.FC<ICrumbProps> = ({ text, href, last }: ICrumbProps) => {
  if (last) {
    return (
      <Typography data-testid={`crumb-component__${href}`}>{text}</Typography>
    );
  }
 
  return (
    <Link href={href} data-testid={`crumb-component__${href}`}>
      {text}
    </Link>
  );
};

export default Crumb;
