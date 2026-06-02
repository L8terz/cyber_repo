---
title: Cloud Security Architecture
guideId: cloud
icon: ☁️
---

# ☁️ Cloud Security Architecture

*Security design patterns, controls, and posture management across AWS, Azure, and GCP.*

## Cloud Changes the Architecture Problem

Cloud adoption shifts the security model in fundamental ways: the attack surface is elastic, the perimeter is API-defined, infrastructure is code, and the shared responsibility boundary creates accountability gaps if not understood clearly.

## Shared Responsibility Model

| Responsibility | IaaS | PaaS | SaaS |
|---|---|---|---|
| Physical infrastructure | CSP | CSP | CSP |
| Hypervisor / host OS | CSP | CSP | CSP |
| Network controls | Shared | CSP | CSP |
| Guest OS / runtime | Customer | CSP | CSP |
| Application code | Customer | Customer | CSP |
| Identity & access | Customer | Customer | Shared |
| Data classification | Customer | Customer | Customer |
| Data encryption | Customer | Shared | Shared |

> **Architect's Trap:** "The cloud provider handles security" is always partially wrong. You always own identity, data classification, and encryption key management.

## CSA Cloud Controls Matrix (CCM v4) — 17 Domains

197 controls with cross-references to ISO 27001, NIST CSF, PCI-DSS, HIPAA, and more. Key domains: A&A (Audit), AIS (App Security), CEK (Cryptography), DSP (Data Security & Privacy), GRC (Governance), IAM (Identity), IVS (Infrastructure), LOG (Logging), SEF (Incident Management), TVM (Threat & Vuln Mgmt).

## Cloud Security Architecture Patterns

### Multi-Account / Landing Zone

- **Blast radius containment** — compromised workload account cannot access security tooling accounts
- **Policy inheritance** — SCPs or Azure Policy enforce guardrails across the estate
- **Centralized logging** — all CloudTrail/Activity Logs aggregated to a dedicated log archive account
- **Security tooling isolation** — GuardDuty, Security Hub, Defender for Cloud in separate accounts

### Hub-and-Spoke Network

Central "hub" VPC/VNet holds shared security services (firewall, SIEM ingestion, DNS). Spoke VPCs connect via peering or Transit Gateway. All egress routes through the hub for inspection.

### Defense in Depth — Cloud Layers

- **Edge** — CDN WAF, DDoS protection
- **Network** — Security Groups, NACLs, Network Firewall, NSGs, Azure Firewall
- **Compute** — EDR agents, hardened AMIs, patch management
- **Application** — API Gateway, secrets management (Secrets Manager, Key Vault)
- **Data** — Encryption at rest (KMS/CMK), TLS 1.3 in transit, DLP, bucket policies
- **Identity** — IAM least privilege, SCPs, Conditional Access, PIM

## AWS Core Security Services

- **IAM** — roles, policies, SCPs; prefer roles over access keys; enforce MFA for console
- **Organizations + Control Tower** — multi-account governance, landing zone automation
- **GuardDuty** — threat detection (network, DNS, CloudTrail anomalies, S3, EKS, Lambda)
- **Security Hub** — aggregates findings from GuardDuty, Inspector, Macie, Config
- **CloudTrail** — API audit log; enable organization trail; log to separate account
- **Macie** — PII/sensitive data discovery in S3
- **KMS** — key management; prefer CMK for sensitive workloads

## Azure Core Security Services

- **Entra ID** — identity foundation; Conditional Access; PIM for privileged roles
- **Defender for Cloud** — CSPM + CWPP; Secure Score; regulatory compliance dashboard
- **Sentinel** — cloud-native SIEM/SOAR; analytics rules; threat intelligence integration
- **Azure Policy + Management Groups** — enforce guardrails across subscriptions at scale
- **Key Vault** — secrets, keys, certificates; managed HSM for FIPS 140-2 Level 3

## CNAPP — Cloud-Native Application Protection

| Component | What it does |
|---|---|
| **CSPM** | Continuous misconfiguration detection across cloud resources; compliance mapping |
| **CWPP** | Runtime protection for VMs, containers, serverless; vulnerability scanning |
| **CIEM** | Identifies excessive permissions, orphaned identities, cross-account risk |
| **KSPM** | Misconfiguration detection for Kubernetes clusters, workloads, and RBAC |
| **IaC Security** | Scans Terraform/CloudFormation/ARM templates before deployment |

Leading vendors: Wiz, Prisma Cloud (Palo Alto), Defender for Cloud, Lacework, Orca Security.

## IAM Architecture Principles

- **Least privilege** — grant minimum permissions; review regularly with CIEM tools
- **No long-lived credentials** — use roles/managed identities; rotate if keys are required
- **Workload identity** — managed identities, workload identity federation (no secrets in code)
- **Break-glass accounts** — highly restricted, monitored emergency access for each account
- **SCPs as guardrails** — prevent critical security controls from being disabled org-wide

> **Role Prep:** Be ready to design a cloud security architecture from scratch. Start with: shared responsibility → account structure → identity model → network topology → logging strategy → threat detection → incident response. This structure shows architectural thinking, not just tool knowledge.
