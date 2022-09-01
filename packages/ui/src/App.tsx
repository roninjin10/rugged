import { InjectedConnector } from "@wagmi/core";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { AppProviders } from "./AppProviders";

const Content = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  return <button onClick={() => connect()}>Connect Wallet</button>;
};

export const App = () => {
  return (
    <AppProviders>
      <Content />
    </AppProviders>
  );
};
