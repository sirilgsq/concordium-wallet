import React, { useEffect } from "react";
import {
  ConcordiumWalletConnector,
  useAccountAddress,
  useConnect,
  useConnection,
} from "./components/concordium";
import useConcordiumNodeClient from "./hooks/useConcordiumNodeClient";
import { BROWSER_WALLET, WALLET_CONNECT } from "./config/concordium-config";
import stIdentityRegistry from "./lib/st-identity-registry";
import { TransactionHash, TransactionStatusEnum } from "@concordium/web-sdk";

const App = (appProps) => {
  return (
    <ConcordiumWalletConnector>
      {(props) => <ConcordiumCard {...props} {...appProps} />}
    </ConcordiumWalletConnector>
  );
};

export default App;

const ConcordiumCard = ({
  activeConnector,
  connectedAccounts,
  genesisHashes,
  setActiveConnectorType,
}) => {
  const concordiumNodeClient = useConcordiumNodeClient();
  const { connection, setConnection, account } = useConnection(
    connectedAccounts,
    genesisHashes
  );

  const isConnected = account !== undefined;

  const accountAddress = useAccountAddress(account || null) || "";
  console.log(accountAddress, "accountAddress");
  const { connect } = useConnect(activeConnector, setConnection);

  // connecting the wallet
  useEffect(() => {
    setActiveConnectorType(WALLET_CONNECT);
  }, []);

  // deploying the identity registry
  const handleDeployIdentity = async () => {
    console.log(connection, "connection");
    if (connection) {
      const txnHash = await stIdentityRegistry
        .init(
          "ef23134582caa49733cb669958c12712459701441148f66676b3ee236641cf05",
          "rwa_identity_registry"
        )
        .init(connection, accountAddress)
        .then(TransactionHash.fromHexString);
      // =================================

      const checkStatus = async () => {
        const { status, outcome } =
          await concordiumNodeClient.getBlockItemStatus(txnHash);
        if (status === TransactionStatusEnum.Finalized) {
          let { index, subindex } =
            outcome?.summary?.contractInitialized?.address;
          alert(
            `Identity Registry deployed successfully with address: ${index}-${subindex}`
          );
        } else {
          // If the status isn't finalized yet, check again after some delay
          setTimeout(checkStatus, 5000); // Check again in 5 seconds
        }
      };

      // Start checking the status
      checkStatus();
    } else {
      alert(
        "Reference or Contact name or provider is missing. Please contact admin."
      );
    }
  };

  return (
    <div>
      <h3>Connect wallet:{accountAddress?.address}</h3>
      <br />
      <button
        onClick={() => {
          connect();
        }}
      >
        Connect Wallet
      </button>
      <br />
      <h3>Deploy Identity Registry</h3>
      <button onClick={handleDeployIdentity}>Deploy Identity Registry</button>
    </div>
  );
};
