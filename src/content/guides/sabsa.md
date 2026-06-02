---
title: SABSA & TOGAF — Enterprise Security Architecture
guideId: sabsa
icon: 🏗️
---

# 🏗️ SABSA & TOGAF — Enterprise Security Architecture

*Business-driven security architecture frameworks for strategic alignment and design governance.*

## Why Enterprise Architecture Frameworks Matter

Security architects who only know controls and threats are tacticians. Those who understand enterprise architecture frameworks can translate security requirements into business outcomes, engage C-suite stakeholders, and design systems that align with organizational strategy. SABSA and TOGAF are the two most important EA frameworks for security architects to know.

## SABSA — Sherwood Applied Business Security Architecture

SABSA is a risk-driven, business-outcome-focused framework for designing and delivering enterprise security architecture. Unlike NIST (which tells you *what* controls to implement), SABSA tells you *why* from a business perspective — and how to trace every security decision back to a business requirement.

### The SABSA Matrix — Six Layers

| Layer | Perspective | What it answers | Security Focus |
|---|---|---|---|
| **Contextual** | Business View | What? Why? Who? Where? When? How? | Business risk, drivers, and objectives |
| **Conceptual** | Architect's View | Concepts and principles | Security policies, risk model, control philosophy |
| **Logical** | Designer's View | Logical system design | Security services, trust model, information flows |
| **Physical** | Builder's View | Physical design | Security mechanisms, protocols, tools |
| **Component** | Tradesman's View | Products and standards | Specific products, configurations, code |
| **Operational** | Facilities Manager | Day-to-day operations | People, processes, SOPs |

> **Key Insight:** Most security teams operate at Physical and Component layers (tools and configs) without doing the Contextual and Conceptual work first. SABSA's value is forcing architects upward — to start with business context before selecting technologies.

### SABSA Attributes

Attributes are the core mechanism SABSA uses to link business requirements to security services. An attribute is any measurable property of a security service the business cares about:

- **Availability** — system must be up 99.9% of the time
- **Confidentiality** — only authorized personnel can read customer data
- **Integrity** — financial transactions must not be altered in transit
- **Auditability** — all privileged actions must be logged and retained for 7 years

### SABSA Trust Framework

SABSA defines trust architecturally: trust is not binary, it is contextual and conditional. The framework introduces **trust domains** (zones with shared trust levels) and **trust relationships** (how entities interact across domain boundaries). This maps directly to modern Zero Trust concepts — SABSA predates ZT but anticipated its logic.

## TOGAF 10 — The Open Group Architecture Framework

TOGAF is the world's most widely adopted enterprise architecture framework. It provides a structured method (ADM) for developing and managing enterprise architectures across business, data, application, and technology domains.

### The Architecture Development Method (ADM)

| Phase | Focus | Security Architect's Role |
|---|---|---|
| **Preliminary** | Set up framework and principles | Define security architecture principles and governance model |
| **A — Vision** | High-level stakeholder vision | Capture security requirements from business drivers, identify risk appetite |
| **B — Business Architecture** | Business processes and organization | Map security services to business processes; identify sensitive workflows |
| **C — Information Systems Architecture** | Data and application architecture | Define data classification, information security controls, application security requirements |
| **D — Technology Architecture** | Infrastructure and technology | Design network security zones, encryption standards, platform security patterns |
| **E — Opportunities & Solutions** | Implementation planning | Evaluate security products/tools against architecture requirements |
| **F — Migration Planning** | Transition roadmap | Sequence security improvements; manage risk during transition states |
| **G — Implementation Governance** | Oversee implementation | Review implementation conformance; security architecture compliance |
| **H — Architecture Change Management** | Architecture evolution | Assess security impact of proposed changes; update threat model |

### TOGAF Architecture Repository

- **Architecture Principles** — e.g., "Least privilege by default," "Encrypt data in transit and at rest"
- **Architecture Building Blocks (ABBs)** — reusable security capabilities (IAM, SIEM, PKI)
- **Solution Building Blocks (SBBs)** — specific products/implementations of ABBs
- **Reference Models** — approved security patterns (e.g., DMZ design, cloud landing zone)

## Integrating SABSA and TOGAF

- TOGAF ADM phases map to SABSA layers — both use a top-down, contextual-to-physical progression
- SABSA's Contextual layer aligns with TOGAF Phase A (Vision) and B (Business)
- SABSA's Logical layer aligns with TOGAF Phases C and D (Information Systems and Technology)
- SABSA attributes serve as the security-specific requirements feeding into TOGAF's Architecture Requirements Specification

> **Practical Takeaway:** TOGAF provides the governance structure and ADM process; SABSA provides the security-specific methodology within it. You need TOGAF fluency to participate in EA governance; you need SABSA fluency to bring security depth to that participation.

## Recommended Learning Path

1. Read the **SABSA Executive Summary** (free on sabsa.org) — 30 minutes to understand the whole model
2. Read the **Open Group TOGAF ADM overview** — understand phase progression
3. Read **The Open Group guide on integrating SABSA + TOGAF** (document G13B)
4. Practice by mapping a real system to the SABSA matrix — identify which layers are well-defined and which are gaps
