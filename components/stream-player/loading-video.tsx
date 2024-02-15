import { Loader } from "lucide-react";
import { WifiOff } from "lucide-react";

interface LoadingVideoProps {
  label: string;
}
export const LoadingVideo = ({ label }: LoadingVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center items-center">
      <Loader className="h-10 w-10 text-muted-foreground" />
      <p className="text-muted-foreground capitalize">{label}</p>
    </div>
  );
};