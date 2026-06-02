---
title: Zero Trust & SASE Architecture
guideId: zerotrust
icon: 🔒
---

# 🔒 Zero Trust & SASE Architecture

*Modern perimeter-less security design for cloud-first, hybrid, and remote-work environments.*

## The End of the Perimeter

Traditional security architectures assumed a hard perimeter: everything inside the network was trusted, everything outside was untrusted. Cloud adoption, remote work, and sophisticated lateral-movement attacks made this model obsolete. Zero Trust replaces perimeter trust with continuous verification — "never trust, always verify."

## Zero Trust — Core Tenets (NIST SP 800-207)

1. **All data sources and computing services are resources.** Devices, users, and services must all authenticate regardless of network location.
2. **All communication is secured regardless of network location.** No implicit trust based on being "inside" the corporate network.
3. **Access to individual enterprise resources is granted on a per-session basis.** Each request is evaluated independently.
4. **Access to resources is determined by dynamic policy.** Policy evaluates identity, device health, behavior, and context — not just credentials.
5. **All enterprise-owned devices are monitored and validated.** Device posture is continuously assessed.
6. **All resource authentication and authorization is dynamic and strictly enforced.** Reauthentication triggers on significant context changes.
7. **The enterprise collects information about the current state of assets and communications.** Data drives continuous improvement of posture.

> **Common Misconception:** Zero Trust is not a product you buy. It's an architectural philosophy implemented through multiple technologies: identity, device management, network segmentation, application access controls, and data protection — working together.

## CISA Zero Trust Maturity Model 2.0 — Five Pillars

| Pillar | Traditional (Starting State) | Optimal (Target State) |
|---|---|---|
| **Identity** | Password-only auth, static roles, manual provisioning | Continuous validation, risk-based MFA, dynamic ABAC, just-in-time access |
| **Devices** | Manual inventory, no posture assessment | Real-time device health integrated with access decisions |
| **Networks** | Flat network, implicit trust based on location | Full micro-segmentation, encrypted all-to-all, automated policy enforcement |
| **Applications** | VPN access to all apps, coarse-grained permissions | App-level access controls, threat detection per-app, continuous authorization |
| **Data** | Coarse-grained data classification, minimal encryption | Automated classification, DLP on all flows, encryption everywhere, fine-grained access |

## ZT Architecture Components (NIST SP 800-207)

- **Policy Engine (PE)** — makes the trust decision based on policy rules and signals
- **Policy Administrator (PA)** — establishes and shuts down communication paths between subject and resource
- **Policy Enforcement Point (PEP)** — the gatekeeper; enables, monitors, and terminates connections based on PDP decisions

## Identity as the New Perimeter

- **Strong MFA** — phishing-resistant (FIDO2/passkeys) preferred over SMS/TOTP for privileged access
- **Conditional Access** — grant access only when identity + device + context meet policy thresholds
- **Privileged Identity Management (PIM)** — just-in-time elevation, no standing privilege
- **ABAC over RBAC** — Attribute-Based Access Control enables fine-grained, context-aware decisions
- **Identity Governance** — automated access reviews, orphaned account detection, separation of duties

## SASE — Secure Access Service Edge

| Component | Function |
|---|---|
| **SD-WAN** | Software-defined WAN for intelligent traffic routing across branches, cloud, and internet |
| **SWG** | Secure Web Gateway: URL filtering, malware inspection, SSL inspection |
| **CASB** | Cloud Access Security Broker: SaaS visibility, DLP, shadow IT discovery |
| **ZTNA** | Zero Trust Network Access: replaces VPN with identity-aware, app-specific remote access |
| **FWaaS** | Firewall as a Service: cloud-delivered NGFW for all traffic types |

## ZTNA vs. Traditional VPN

| Dimension | VPN | ZTNA |
|---|---|---|
| Trust model | Network-level trust once connected | Per-session, per-application verification |
| Access scope | Full network segment access | Specific application only |
| Device posture | Not assessed continuously | Real-time posture evaluation before and during access |
| Lateral movement risk | High — broad network access | Low — no network exposure |

## ZT Implementation Roadmap

1. **Phase 1 — Identity Foundation:** Deploy phishing-resistant MFA, implement Conditional Access, inventory all identities
2. **Phase 2 — Device Visibility:** MDM enrollment, EDR deployment, device compliance policies
3. **Phase 3 — Application Access:** Replace VPN with ZTNA for critical apps, enforce app-level MFA
4. **Phase 4 — Network Segmentation:** Define macro-segments, begin workload isolation for critical systems
5. **Phase 5 — Data Protection:** Classify sensitive data, enforce DLP, encrypt data at rest and in transit
6. **Phase 6 — Continuous Optimization:** Behavioral analytics, automated response, ZT governance program

> **Role Prep:** Be prepared to discuss how you'd approach a ZT roadmap for a hybrid organization. Identity first is almost always the right answer — it provides the control plane for everything else.
