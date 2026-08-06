# Contact endpoint — serverless + Resend (planned)

Approved approach: a serverless function receives the contact form POST and
sends the email via [Resend](https://resend.com), routing to Tuni, Any or
both depending on the user's selection.

Deployment-agnostic for now: the function will be added as an Astro API
route (`src/pages/api/contact.ts`, `prerender = false`) once the hosting
platform — and therefore the Astro adapter (netlify / vercel / cloudflare) —
is decided. Until then this folder only documents the contract.

## Contract

```
POST /api/contact
Content-Type: application/json

{
  "to": "tuni" | "any" | "both",
  "name": string,
  "email": string,
  "message": string
}
```

## Environment variables (server-side only, never in client code)

| Variable            | Purpose                            |
| ------------------- | ---------------------------------- |
| `RESEND_API_KEY`    | Resend API key                     |
| `CONTACT_EMAIL_TUNI`| Tuni's destination mailbox (TBD)   |
| `CONTACT_EMAIL_ANY` | Any's destination mailbox (TBD)    |

`to: "both"` sends to both addresses. Basic spam protection (honeypot field
+ minimal rate limiting) will be included in the implementation.
