import { AppKitMultichain } from "@reown/appkit-multichain";
import config from "../config";

export default function Home() {
  return (
    <AppKitMultichain
      safeAddress={config.SAFE_ADDRESS}
      signerAddress={config.SIGNER_ADDRESS}
      chainId={config.CHAIN_ID}
    />
  );
}