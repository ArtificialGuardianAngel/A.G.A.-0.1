import { SearchTemplate } from "@/templates";
import { cookies } from "next/headers";

const HomePage = () => {
  const isActivated = cookies().get("is_activated")?.value === "true";

  return <SearchTemplate isActivated={isActivated} />;
};

export default HomePage;
