# automatisch-appkit

## Setup

1. Create GitHub repo and upload these files.
2. Add GitHub Secrets:
   - `SAFE_ADDRESS`
   - `SIGNER_KEY`
   - `DISCORD_WEBHOOK`
   - `RPC_URL`
   - `SAFE_TX_SERVICE_URL`

3. Deploy on Vercel linked to the repo.
4. Merge PR or label issue to create a Safe transaction.

Use the AppKit frontend to approve and execute transactions.

# automatisch-appkit

## 🚀 Setup

1. Fork or create this repo in GitHub.
2. Add these GitHub Secrets:
   - `SAFE_ADDRESS` – `0x821f2b40d965b81202b181Aba1c7a380C49Ed675`
   - `SIGNER_KEY` – **your signer private key** `0xAfD5f60aA...`
   - `DISCORD_WEBHOOK` – your webhook URL
   - `RPC_URL` – your Arbitrum RPC endpoint
   - `SAFE_TX_SERVICE_URL` – e.g. `https://safe-transaction.gnosis.io`
3. Deploy to Vercel:
   - Connect to the GitHub repo
   - Set `NEXT_PUBLIC_` envs same as above
   - Set `DISCORD_WEBHOOK`, `GITHUB_TRIGGER_LABEL`, etc.
4. Use the App:
   - Visit deployed URL
   - Connect using Safe AppKit → signer
   - Create transactions (send ETH, tokens, call contracts)

## 🛠 GitHub Automation

- Merging a PR or applying the trigger label (`propose` by default) creates a proposal.
- Discord will receive a notification:
  - It contains a link to the Safe Safe app frontend.
  - Click → approve within AppKit → transaction executes.

## 🧪 Testing

1. Create a PR → merge it → alert fires → Safe dashboard shows proposal.
2. Go to AppKit frontend → see pending tx → sign & execute.

---

### 🧩 Extension

- Add new chains by providing chains array to AppKit.
- Customize Safe proposal data in Action step under `safeTransactionData`.

