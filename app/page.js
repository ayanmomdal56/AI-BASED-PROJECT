import Hero from "@/components/hero";
import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Box from "@/components/box";
import Stat from "@/components/stat";

export default function AuthLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Hero />
            <Box />
            <Stat />
    </div>
  );
}
