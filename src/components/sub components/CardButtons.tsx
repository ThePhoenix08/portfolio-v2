import { cn } from "../../utils/cn";
import { Button } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const CardButtons = ({
  className,
  liveDemo,
  githubRepo,
}: {
  className?: string;
  liveDemo: string;
  githubRepo: string;
}) => {
  return (
    <div className={cn("flex gap-4 items-center text-xl", className)}>
      <Button
        variant="soft"
        color="neutral"
        href={liveDemo}
        component="a"
        endDecorator={<OpenInNewIcon />}
      >
        Live Demo
      </Button>
      <Button
        variant="soft"
        color="neutral"
        href={githubRepo}
        component="a"
        endDecorator={<GitHubIcon />}
      >
        Github Repo
      </Button>
    </div>
  );
};

export default CardButtons;
