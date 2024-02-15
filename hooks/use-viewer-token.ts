import { toast } from "sonner";
import { useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { createViewerToken } from "@/actions/token";

export const useViewerToken = (hostIdentity: string) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [identity, setIdenitity] = useState("");

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken(hostIdentity);
        setToken(viewerToken);

        const decodedToken = jwtDecode(viewerToken) as JwtPayload & {
          name?: string;
        };
        const name = decodedToken?.name;
        const identity = decodedToken.jti;

        if (identity) {
          setIdenitity(identity);
        }
        if (name !== undefined) {
          setName(name);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    createToken();
  }, [hostIdentity]);
  return {
    token,
    name,
    identity,
  };
};
