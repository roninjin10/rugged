import { chain, createClient, WagmiConfig } from "wagmi";
import { getDefaultProvider } from "ethers";
import * as React from "react";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(chain.mainnet.id),
});

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
