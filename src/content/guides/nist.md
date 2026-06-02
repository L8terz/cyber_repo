---
title: NIST CSF & Risk Management Framework
guideId: nist
icon: 🏛️
---

# 🏛️ NIST CSF 2.0 & Risk Management Framework

*A focused reference guide for security architects entering enterprise and federal security roles.*

## Why NIST Matters for Security Architects

NIST frameworks are the lingua franca of enterprise and federal security. Whether you're designing controls, justifying risk decisions to leadership, or responding to an audit, NIST gives you a common vocabulary and defensible methodology. CSF is the "what" (functions and outcomes), while RMF is the "how" (process to authorize systems).

## NIST CSF 2.0 — The Six Functions

Released in 2024, CSF 2.0 added a sixth function — **Govern** — reflecting that cybersecurity is fundamentally a business risk issue requiring executive ownership.

| Function | Purpose | Key Categories |
|---|---|---|
| **Govern (GV)** | Establish and monitor the organization's cybersecurity risk strategy, expectations, and policy | Organizational Context, Risk Management Strategy, Roles & Responsibilities, Policy, Oversight, Supply Chain |
| **Identify (ID)** | Understand cybersecurity risk to systems, people, assets, data, and capabilities | Asset Management, Risk Assessment, Improvement |
| **Protect (PR)** | Implement safeguards to limit impact of a cybersecurity event | Identity Mgmt, Access Control, Awareness, Data Security, Platform Security, Technology Resilience |
| **Detect (DE)** | Find and analyze potential cybersecurity events | Continuous Monitoring, Adverse Event Analysis |
| **Respond (RS)** | Take action on a detected incident | Incident Management, Analysis, Mitigation, Reporting |
| **Recover (RC)** | Restore capabilities after an incident | Incident Recovery Plan, Communication |

> **Architect's Tip:** When designing security programs, map every proposed control or capability to one of these functions. It forces clarity on whether you're investing in prevention (Protect) vs. detection (Detect) vs. response (Respond) — a common gap in immature programs.

## CSF Tiers — Measuring Maturity

CSF Tiers describe the degree to which cybersecurity risk management is informed, repeatable, and integrated with business risk decisions. They are *not* a maturity model in the traditional sense — the goal isn't always Tier 4.

- **Tier 1 — Partial:** Risk practices are ad hoc, reactive, and not formalized.
- **Tier 2 — Risk Informed:** Risk management practices are approved but may not be organization-wide policy.
- **Tier 3 — Repeatable:** Practices are formally approved policy. Updated based on changes in business/threat landscape.
- **Tier 4 — Adaptive:** Real-time updates based on continuous improvement from lessons learned and predictive indicators.

## NIST Risk Management Framework (RMF)

RMF is a seven-step lifecycle process for authorizing information systems. Originally federal (FISMA), it's now widely adopted in enterprise and defense contexts.

| Step | Action | Key Document |
|---|---|---|
| **Prepare** | Establish context, roles, and risk strategy before the system is in scope | SP 800-37 Rev 2 |
| **Categorize** | Classify the system based on impact (Low/Moderate/High) for CIA | FIPS 199, SP 800-60 |
| **Select** | Choose baseline security controls from SP 800-53 based on categorization | SP 800-53B |
| **Implement** | Deploy controls and document how they are implemented | SP 800-53A |
| **Assess** | Evaluate whether controls are implemented correctly and producing desired outcomes | SP 800-53A |
| **Authorize** | Senior official accepts residual risk and issues Authority to Operate (ATO) | SP 800-37 |
| **Monitor** | Continuously assess security posture, update controls, and report status | SP 800-137 |

## SP 800-53 Rev 5 — Control Families

The control catalog organizes 1,000+ controls into 20 families. As a security architect, you'll primarily design around these families rather than implementing individual controls directly.

- **AC** — Access Control &nbsp;|&nbsp; **AT** — Awareness and Training &nbsp;|&nbsp; **AU** — Audit and Accountability
- **CA** — Assessment, Authorization, and Monitoring &nbsp;|&nbsp; **CM** — Configuration Management
- **CP** — Contingency Planning &nbsp;|&nbsp; **IA** — Identification and Authentication &nbsp;|&nbsp; **IR** — Incident Response
- **MA** — Maintenance &nbsp;|&nbsp; **MP** — Media Protection &nbsp;|&nbsp; **PE** — Physical and Environmental Protection
- **PL** — Planning &nbsp;|&nbsp; **PM** — Program Management &nbsp;|&nbsp; **PS** — Personnel Security
- **PT** — PII Processing and Transparency &nbsp;|&nbsp; **RA** — Risk Assessment
- **SA** — System and Services Acquisition &nbsp;|&nbsp; **SC** — System and Communications Protection
- **SI** — System and Information Integrity &nbsp;|&nbsp; **SR** — Supply Chain Risk Management

## Key Relationships Between Publications

- **FIPS 199** defines impact levels → drives **SP 800-53B** control baselines
- **SP 800-37** (RMF process) → references **SP 800-53** (controls catalog)
- **SP 800-53A** → provides assessment procedures for each SP 800-53 control
- **SP 800-137** → continuous monitoring strategy once ATO is granted
- **CSF 2.0** → maps to SP 800-53 controls in the online reference tool

## Practical Architecture Considerations

### Control Inheritance

In multi-system environments, controls can be inherited (provided by a common service), system-specific, or hybrid. Architects must clearly document inheritance chains — especially when cloud providers (AWS, Azure) provide inherited controls via their FedRAMP authorizations.

### Privacy Overlay

SP 800-53 Rev 5 integrates privacy controls directly (the PT family). Architects should assess PII flows early and apply appropriate controls — not treat privacy as an afterthought.

### Supply Chain Risk (SCRM)

The SR family (added in Rev 5) addresses software supply chain integrity. Post-SolarWinds, this is now a critical architecture concern — especially SBOM requirements and vendor assessment processes.

> **Interview/Role Prep:** Be ready to explain the difference between CSF and RMF, when you'd use each, and how a control from SP 800-53 gets selected, implemented, and assessed. This is a common line of questioning in security architecture roles.

## Essential Reading Order

1. Read the **CSF 2.0 Quick Start Guide** (20 pages) — get the full picture fast
2. Skim **SP 800-37 Rev 2** Chapter 2 — understand the RMF conceptually
3. Browse **SP 800-53 Rev 5** Family introductions — don't read every control, just understand the structure
4. Use the **NIST CSF Online Reference Tool** to explore control mappings
