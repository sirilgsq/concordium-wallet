import { AccountAddress } from "@concordium/web-sdk";

const useAccountAddress = (account) => {
  if (account) {
    return AccountAddress.fromBase58(account);
  }
  return null;
};

export default useAccountAddress;
