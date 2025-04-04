import React from "react";
import {
  TESTNET,
  WithWalletConnector,
  stringMessage,
  useConnect,
  useConnection,
  useWalletConnectorSelector,
} from "@concordium/react-components";
import useAccountAddress from "../hooks/useAccountAddress";

const ConcordiumWalletConnector = ({ children }) => {
  return (
    <WithWalletConnector network={TESTNET}>
      {(props) => children(props)}
    </WithWalletConnector>
  );
};

export {
  TESTNET,
  useConnect,
  stringMessage,
  useConnection,
  useAccountAddress,
  ConcordiumWalletConnector,
  useWalletConnectorSelector,
};
