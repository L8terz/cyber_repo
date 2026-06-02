const LIBRARY_DATA = [
  {
    id: 'nist',
    name: 'NIST CSF & Risk Management Framework',
    icon: '🏛️',
    iconBg: '#dbeafe',
    tag: 'tag-blue',
    tagLabel: 'NIST',
    description: 'U.S. federal standards for cybersecurity risk management and framework governance',
    resources: [
      { id: 'nist-1', title: 'NIST Cybersecurity Framework 2.0 (Official)', type: 'Official Doc', url: 'https://www.nist.gov/cyberframework', desc: 'The complete CSF 2.0 publication. Now includes a new "Govern" function making six total. The definitive starting point for enterprise security posture.' },
      { id: 'nist-2', title: 'NIST RMF Overview & Steps', type: 'Official Doc', url: 'https://csrc.nist.gov/projects/risk-management/about-rmf', desc: 'Six-step Risk Management Framework: Categorize → Select → Implement → Assess → Authorize → Monitor. Core methodology for federal and enterprise risk.' },
      { id: 'nist-3', title: 'SP 800-53 Rev 5 — Security Controls Catalog', type: 'Reference', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final', desc: 'The comprehensive control catalog with 20 families covering access control, incident response, supply chain risk, and more.' },
      { id: 'nist-4', title: 'SP 800-37 Rev 2 — RMF Guide', type: 'Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final', desc: 'Practical guide for applying the RMF to federal information systems. Excellent for understanding authorization boundaries and ATO processes.' },
      { id: 'nist-5', title: 'NIST Privacy Framework 1.0', type: 'Framework', url: 'https://www.nist.gov/privacy-framework', desc: 'Voluntary framework for improving privacy risk management, designed to work alongside the CSF. Critical for enterprise data governance.' },
      { id: 'nist-6', title: 'NIST AI Risk Management Framework', type: 'Framework', url: 'https://www.nist.gov/artificial-intelligence/ai-risk-management-framework', desc: 'Emerging AI-RMF for managing risk in AI system development and deployment — increasingly relevant for modern security architecture.' },
      { id: 'nist-7', title: 'CSF 2.0 Quick Start Guide', type: 'Guide', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1299.pdf', desc: 'Condensed implementation guide for organizations new to CSF. Maps functions to common enterprise scenarios.' },
    ]
  },
  {
    id: 'sabsa',
    name: 'SABSA & TOGAF Enterprise Architecture',
    icon: '🏗️',
    iconBg: '#ede9fe',
    tag: 'tag-purple',
    tagLabel: 'EA',
    description: 'Enterprise and security architecture frameworks for strategic alignment and design',
    resources: [
      { id: 'sabsa-1', title: 'SABSA Institute — Foundation Overview', type: 'Framework', url: 'https://sabsa.org/sabsa-executive-summary/', desc: 'Sherwood Applied Business Security Architecture — a risk-driven, business outcomes approach to security architecture. Built on the Zachman matrix adapted for security.' },
      { id: 'sabsa-2', title: 'TOGAF 10 Standard (The Open Group)', type: 'Official Doc', url: 'https://www.opengroup.org/togaf', desc: 'The Architecture Development Method (ADM) cycle defines phases A through H for enterprise architecture. Security architects must understand this for stakeholder alignment.' },
      { id: 'sabsa-3', title: 'SABSA White Paper: Business-Driven Security', type: 'Paper', url: 'https://sabsa.org/white-papers/', desc: 'Explains how SABSA attributes map business requirements to security services — foundational for understanding risk-based architecture design.' },
      { id: 'sabsa-4', title: 'Integrating SABSA and TOGAF', type: 'Guide', url: 'https://www.opengroup.org/library/g13b', desc: 'The Open Group guidance on how SABSA security architecture integrates with TOGAF ADM phases. Essential for enterprise security architects.' },
      { id: 'sabsa-5', title: 'DoDAF / MODAF Architecture Frameworks', type: 'Reference', url: 'https://dodcio.defense.gov/Library/DoD-Architecture-Framework/', desc: 'Defense-oriented architecture framework — relevant for federal and defense sector security architecture work. Complements TOGAF in government contexts.' },
      { id: 'sabsa-6', title: 'Zachman Framework for Enterprise Architecture', type: 'Reference', url: 'https://www.zachman.com/about-the-zachman-framework', desc: 'The original enterprise architecture ontology. SABSA layers security concerns atop this structure. Understanding Zachman clarifies SABSAs six-layer approach.' },
    ]
  },
  {
    id: 'zerotrust',
    name: 'Zero Trust & SASE Architecture',
    icon: '🔒',
    iconBg: '#d1fae5',
    tag: 'tag-green',
    tagLabel: 'ZT/SASE',
    description: 'Modern perimeter-less security models for cloud-first and hybrid environments',
    resources: [
      { id: 'zt-1', title: 'NIST SP 800-207 — Zero Trust Architecture', type: 'Official Doc', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final', desc: 'The authoritative definition of Zero Trust principles, logical components, and deployment models. Start here before any ZT implementation work.' },
      { id: 'zt-2', title: 'CISA Zero Trust Maturity Model 2.0', type: 'Framework', url: 'https://www.cisa.gov/zero-trust-maturity-model', desc: 'Five pillars: Identity, Devices, Networks, Applications, Data. Each with three maturity stages (Traditional → Advanced → Optimal). Excellent roadmap tool.' },
      { id: 'zt-3', title: 'DoD Zero Trust Strategy & Roadmap', type: 'Strategy', url: 'https://dodcio.defense.gov/Portals/0/Documents/Library/DoD-ZTStrategy.pdf', desc: 'The Departments 2022 ZT strategy — sets the bar for enterprise ZT capability targets. Useful even outside DoD for understanding full-scale ZT ambition.' },
      { id: 'zt-4', title: 'Gartner SASE Framework Explained', type: 'Reference', url: 'https://www.gartner.com/en/information-technology/glossary/secure-access-service-edge-sase', desc: 'Secure Access Service Edge combines SD-WAN with cloud-native security (SWG, CASB, ZTNA, FWaaS). Gartner definition and vendor landscape overview.' },
      { id: 'zt-5', title: 'BeyondCorp: Google Zero Trust Paper', type: 'Paper', url: 'https://research.google/pubs/pub43231/', desc: 'The seminal 2014 paper that introduced enterprise Zero Trust in practice. Highly readable and conceptually foundational for all modern ZT thinking.' },
      { id: 'zt-6', title: 'Microsoft Zero Trust Adoption Framework', type: 'Guide', url: 'https://learn.microsoft.com/en-us/security/zero-trust/adopt/zero-trust-adoption-overview', desc: 'Practical guidance from Microsoft on adopting ZT across identity, endpoints, apps, data, infra, and network — with technology mappings to Azure/M365.' },
      { id: 'zt-7', title: 'ZTNA vs VPN: Architecture Comparison', type: 'Reference', url: 'https://www.cloudflare.com/learning/access-management/ztna-vs-vpn/', desc: 'Clear technical comparison of Zero Trust Network Access vs legacy VPN architectures. Useful for stakeholder communication and migration planning.' },
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Security Architecture',
    icon: '☁️',
    iconBg: '#fef3c7',
    tag: 'tag-amber',
    tagLabel: 'Cloud',
    description: 'Security architecture patterns, controls, and posture management for cloud environments',
    resources: [
      { id: 'cloud-1', title: 'CSA Cloud Controls Matrix (CCM) v4', type: 'Framework', url: 'https://cloudsecurityalliance.org/research/cloud-controls-matrix/', desc: 'The industry-standard control framework for cloud security. 197 controls across 17 domains. Maps to ISO 27001, NIST CSF, PCI-DSS, HIPAA, and more.' },
      { id: 'cloud-2', title: 'AWS Security Reference Architecture', type: 'Reference', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html', desc: 'AWS prescriptive guidance for multi-account security architecture. Covers Organizations, Control Tower, Security Hub, GuardDuty, and detective controls.' },
      { id: 'cloud-3', title: 'Azure Security Benchmark v3', type: 'Framework', url: 'https://learn.microsoft.com/en-us/security/benchmark/azure/', desc: 'Microsoft security recommendations for Azure workloads. 12 control domains with Azure Defender mappings. Essential for Azure-centric architecture.' },
      { id: 'cloud-4', title: 'Google Cloud Security Foundations Blueprint', type: 'Guide', url: 'https://cloud.google.com/architecture/security-foundations', desc: 'GCP reference architecture for enterprise security posture. Covers organization hierarchy, IAM, VPC, logging, and threat detection.' },
      { id: 'cloud-5', title: 'CIS Benchmarks (Cloud)', type: 'Reference', url: 'https://www.cisecurity.org/cis-benchmarks', desc: 'Hardening benchmarks for AWS, Azure, and GCP. The go-to configuration baseline for cloud workloads and compliance assessments.' },
      { id: 'cloud-6', title: 'CNAPP Explained — Cloud-Native App Protection', type: 'Reference', url: 'https://www.gartner.com/en/information-technology/glossary/cloud-native-application-protection-platform-cnapp', desc: 'Unified platform combining CSPM, CWPP, CIEM, and KSPM. Gartner market definition and architecture guidance for modern cloud security programs.' },
      { id: 'cloud-7', title: 'Shared Responsibility Model (Deep Dive)', type: 'Guide', url: 'https://aws.amazon.com/compliance/shared-responsibility-model/', desc: 'Understanding what each CSP secures vs. what you own — foundational for cloud security architecture conversations and contract negotiations.' },
      { id: 'cloud-8', title: 'CISA Cloud Security Technical Reference', type: 'Official Doc', url: 'https://www.cisa.gov/resources-tools/resources/cloud-security-technical-reference-architecture', desc: 'Federal reference architecture for cloud adoption. Covers cloud security posture, SASE integration, and federal shared services model.' },
    ]
  }
];

const STUDY_TOPICS = [
  { id: 't1', label: 'NIST CSF 2.0 Core Functions (Govern, Identify, Protect, Detect, Respond, Recover)', framework: 'NIST' },
  { id: 't2', label: 'NIST RMF 6 Steps and ATO Process', framework: 'NIST' },
  { id: 't3', label: 'SP 800-53 Control Families Overview', framework: 'NIST' },
  { id: 't4', label: 'Risk Assessment Methodology (SP 800-30)', framework: 'NIST' },
  { id: 't5', label: 'NIST Privacy Framework Integration', framework: 'NIST' },
  { id: 't6', label: 'SABSA Six-Layer Architecture Model', framework: 'SABSA/TOGAF' },
  { id: 't7', label: 'TOGAF ADM Phases A–H', framework: 'SABSA/TOGAF' },
  { id: 't8', label: 'Security Architecture Attributes (SABSA)', framework: 'SABSA/TOGAF' },
  { id: 't9', label: 'Business Requirements → Security Services Mapping', framework: 'SABSA/TOGAF' },
  { id: 't10', label: 'Integrating Security into Enterprise Architecture', framework: 'SABSA/TOGAF' },
  { id: 't11', label: 'Zero Trust Core Tenets (NIST SP 800-207)', framework: 'Zero Trust' },
  { id: 't12', label: 'CISA ZT Maturity Model — 5 Pillars', framework: 'Zero Trust' },
  { id: 't13', label: 'Identity-Centric Security Architecture', framework: 'Zero Trust' },
  { id: 't14', label: 'SASE Architecture Components (SSE + SD-WAN)', framework: 'Zero Trust' },
  { id: 't15', label: 'Micro-Segmentation Strategies', framework: 'Zero Trust' },
  { id: 't16', label: 'Cloud Shared Responsibility Model', framework: 'Cloud' },
  { id: 't17', label: 'CSA Cloud Controls Matrix (CCM v4)', framework: 'Cloud' },
  { id: 't18', label: 'Cloud Security Posture Management (CSPM)', framework: 'Cloud' },
  { id: 't19', label: 'Multi-Cloud Identity & Access Architecture', framework: 'Cloud' },
  { id: 't20', label: 'CNAPP — Unified Cloud Native Protection', framework: 'Cloud' },
];

const ADM_PHASES = [
  {
    id: 'pre', label: 'Preliminary', short: 'PRE', color: '#64748b',
    desc: 'Establish the architecture capability. Define principles, governance model, and tailor TOGAF to the enterprise context.',
    security: 'Define security architecture principles, establish the security governance model, tailor security overlays into the ADM process.',
    sabsa: 'Contextual Layer — Business Risk Context',
    nist: 'Govern (GV)', nistColor: '#8b5cf6',
    controls: ['Security Architecture Principles', 'Governance Framework', 'RACI for Security', 'Risk Appetite Statement'],
    inputs: [], outputs: ['Architecture Principles', 'Tailored ADM', 'Governance Model']
  },
  {
    id: 'a', label: 'Architecture Vision', short: 'A', color: '#3b82f6',
    desc: 'High-level view of capabilities and business value. Scope the architecture, identify stakeholders, create Statement of Architecture Work.',
    security: 'Capture security requirements from business drivers. Identify key risks, threat actors, and data sensitivity. Align with executive risk appetite.',
    sabsa: 'Contextual Layer — Business Attributes & Drivers',
    nist: 'Govern (GV) + Identify (ID)', nistColor: '#8b5cf6',
    controls: ['Threat Modelling (high-level)', 'Data Classification Policy', 'Stakeholder Risk Register', 'Security Use Cases'],
    inputs: ['Business Strategy', 'Principles', 'Existing Arch'], outputs: ['Architecture Vision', 'Statement of Arch Work', 'Security Requirements']
  },
  {
    id: 'b', label: 'Business Architecture', short: 'B', color: '#06b6d4',
    desc: 'Define the baseline and target business architecture. Map processes, organizational structure, roles, and information flows.',
    security: 'Map security services to critical business processes. Identify privileged roles and separation of duties requirements. Document sensitive data flows.',
    sabsa: 'Conceptual Layer — Security Policy & Risk Model',
    nist: 'Identify (ID) + Govern (GV)', nistColor: '#3b82f6',
    controls: ['Separation of Duties Analysis', 'Privileged Role Mapping', 'Business Process Risk Assessment', 'Data Flow Diagrams'],
    inputs: ['Architecture Vision', 'Business Strategy'], outputs: ['Business Arch Doc', 'Risk Assessment', 'Privacy Impact Assessment']
  },
  {
    id: 'c', label: 'Information Systems Arch', short: 'C', color: '#10b981',
    desc: 'Define the data and application architecture. What data exists, how it flows, what applications process it, and how they interact.',
    security: 'Apply data classification controls, define API security requirements, establish application security standards, enforce encryption and access policies on data stores.',
    sabsa: 'Logical Layer — Security Services & Trust Model',
    nist: 'Protect (PR) + Identify (ID)', nistColor: '#10b981',
    controls: ['Data Classification Schema', 'API Security Standards', 'Encryption Requirements', 'Application Security SDLC', 'Access Control Model (ABAC/RBAC)'],
    inputs: ['Business Arch', 'Data Inventory'], outputs: ['Data Arch', 'Application Arch', 'Security Requirements per App']
  },
  {
    id: 'd', label: 'Technology Architecture', short: 'D', color: '#f59e0b',
    desc: 'Define the technology infrastructure needed to support the information systems architecture — networks, compute, platforms, tooling.',
    security: 'Design network segmentation and security zones, select security tooling, define platform hardening standards, establish PKI and cryptography architecture.',
    sabsa: 'Physical Layer — Security Mechanisms & Protocols',
    nist: 'Protect (PR)', nistColor: '#10b981',
    controls: ['Network Security Zones (DMZ, Trust Levels)', 'Zero Trust Network Access', 'PKI & Certificate Management', 'Platform Hardening Baselines', 'SIEM / Log Architecture', 'EDR Deployment Pattern'],
    inputs: ['Information Systems Arch', 'Technology Standards'], outputs: ['Technology Arch', 'Security Architecture Design', 'Infrastructure Patterns']
  },
  {
    id: 'e', label: 'Opportunities & Solutions', short: 'E', color: '#f97316',
    desc: 'Initial planning for implementation. Identify solution building blocks, delivery vehicles, and transition architectures.',
    security: 'Evaluate security products and vendors against architecture requirements. Define security SBBs (solution building blocks). Plan for security in each work package.',
    sabsa: 'Component Layer — Products & Standards',
    nist: 'Protect (PR) + Identify (ID)', nistColor: '#10b981',
    controls: ['Security Product Evaluation Criteria', 'Proof of Concept Planning', 'Security Work Package Definition', 'Vendor Risk Assessment'],
    inputs: ['Target Architectures', 'Architecture Roadmap'], outputs: ['Implementation Roadmap', 'Security Work Packages', 'Transition Architectures']
  },
  {
    id: 'f', label: 'Migration Planning', short: 'F', color: '#ef4444',
    desc: 'Detailed implementation and migration plan. Prioritize projects, finalize roadmap, assign resources, and sequence delivery.',
    security: 'Assess security risk during transition states (the "in-between" is often the most vulnerable). Define security acceptance criteria for each migration milestone.',
    sabsa: 'Operational Layer — Security Operations Planning',
    nist: 'Govern (GV) + Respond (RS)', nistColor: '#8b5cf6',
    controls: ['Transition Risk Assessment', 'Security Acceptance Criteria', 'Rollback Security Plans', 'Migration Testing Requirements'],
    inputs: ['Implementation Roadmap', 'Architecture Definition'], outputs: ['Migration Plan', 'Architecture Roadmap', 'Transition Security States']
  },
  {
    id: 'g', label: 'Implementation Governance', short: 'G', color: '#8b5cf6',
    desc: 'Oversee implementation to ensure conformance with the target architecture. Manage change requests and address deviations.',
    security: 'Review security architecture conformance in delivered solutions. Conduct security architecture reviews before go-live. Track security debt and deviations.',
    sabsa: 'Operational Layer — Security Assurance & Audit',
    nist: 'Govern (GV) + Detect (DE)', nistColor: '#8b5cf6',
    controls: ['Architecture Conformance Reviews', 'Security Acceptance Testing', 'Penetration Test Requirements', 'Security Deviation Register', 'Architecture Decision Records (ADRs)'],
    inputs: ['Architecture Definition', 'Implementation Plan'], outputs: ['Architecture Contract', 'Compliance Assessments', 'Security Sign-off']
  },
  {
    id: 'h', label: 'Architecture Change Mgmt', short: 'H', color: '#ec4899',
    desc: 'Monitor the architecture for changes and manage those changes in a controlled manner. Ensure architecture remains aligned with business needs.',
    security: 'Assess security impact of proposed architecture changes. Update threat models when architecture changes. Trigger new RMF cycles if changes affect system authorization.',
    sabsa: 'Contextual Layer — Continuous Risk Monitoring',
    nist: 'Detect (DE) + Recover (RC)', nistColor: '#10b981',
    controls: ['Change Impact Security Assessment', 'Threat Model Refresh', 'Security Patch Architecture', 'Continuous Monitoring Strategy', 'ATO Reauthorization Triggers'],
    inputs: ['Architecture Baseline', 'Change Requests', 'New Technology Reports'], outputs: ['Updated Architecture', 'New ADM Cycle', 'Architecture Change Requests']
  },
  {
    id: 'rm', label: 'Requirements Mgmt', short: 'RM', color: '#1e293b',
    desc: 'Central process running throughout all ADM phases. Manages the repository of architecture requirements, ensuring they are identified, stored, and fed into relevant ADM phases.',
    security: 'Maintains the security requirements repository. Ensures security requirements from Phase A are traceable through to Phase G. Manages security-specific architecture principles.',
    sabsa: 'All Layers — Requirements Traceability',
    nist: 'Govern (GV)', nistColor: '#8b5cf6',
    controls: ['Security Requirements Repository', 'Requirements Traceability Matrix', 'Architecture Principles Register', 'Risk Register'],
    inputs: ['All Phases'], outputs: ['Requirements to all Phases']
  }
];

const CONTROL_NODES = [
  { id: 0, name: 'Identity & Access Mgmt', group: 'identity', color: '#3b82f6', desc: 'Centralized IAM: directory services, SSO, lifecycle management for all human and machine identities.', togaf: 'Phase D', nist: 'Protect (PR.AA)', sabsa: 'Logical', x: 0, y: 0 },
  { id: 1, name: 'Privileged Access Mgmt', group: 'identity', color: '#3b82f6', desc: 'PAM: just-in-time privilege, session recording, vault for credential management of admin accounts.', togaf: 'Phase D', nist: 'Protect (PR.AA)', sabsa: 'Physical', x: 0, y: 0 },
  { id: 2, name: 'Multi-Factor Auth (MFA)', group: 'identity', color: '#3b82f6', desc: 'Phishing-resistant MFA (FIDO2/passkeys) for all user access. TOTP as minimum baseline.', togaf: 'Phase D', nist: 'Protect (PR.AA)', sabsa: 'Physical', x: 0, y: 0 },
  { id: 3, name: 'PKI & Cert Management', group: 'identity', color: '#3b82f6', desc: 'Public Key Infrastructure for mutual TLS, code signing, and device identity certificates.', togaf: 'Phase D', nist: 'Protect (PR.DS)', sabsa: 'Physical', x: 0, y: 0 },
  { id: 4, name: 'SIEM', group: 'detection', color: '#10b981', desc: 'Security Information & Event Management: centralized log aggregation, correlation, and alerting across all systems.', togaf: 'Phase D', nist: 'Detect (DE.CM)', sabsa: 'Logical', x: 0, y: 0 },
  { id: 5, name: 'Threat Intelligence', group: 'detection', color: '#10b981', desc: 'Structured threat feeds (STIX/TAXII), ISAC sharing, IOC enrichment for detection tuning.', togaf: 'Phase A', nist: 'Identify (ID.RA)', sabsa: 'Contextual', x: 0, y: 0 },
  { id: 6, name: 'EDR / XDR', group: 'detection', color: '#10b981', desc: 'Endpoint Detection & Response: behavioral analytics, malware detection, and response on all managed endpoints.', togaf: 'Phase D', nist: 'Detect (DE.CM)', sabsa: 'Physical', x: 0, y: 0 },
  { id: 7, name: 'SOAR', group: 'detection', color: '#10b981', desc: 'Security Orchestration, Automation & Response: automated playbooks to triage, enrich, and respond to SIEM alerts.', togaf: 'Phase G', nist: 'Respond (RS.MA)', sabsa: 'Operational', x: 0, y: 0 },
  { id: 8, name: 'Vuln Management', group: 'detection', color: '#10b981', desc: 'Continuous scanning, CVSS-based prioritization, and SLA-driven remediation tracking across all assets.', togaf: 'Phase H', nist: 'Identify (ID.RA)', sabsa: 'Operational', x: 0, y: 0 },
  { id: 9, name: 'Network Firewall / NGFW', group: 'network', color: '#f59e0b', desc: 'Next-generation firewall with application-layer inspection, IPS, and east-west traffic control between segments.', togaf: 'Phase D', nist: 'Protect (PR.IR)', sabsa: 'Physical', x: 0, y: 0 },
  { id: 10, name: 'Zero Trust Network Access', group: 'network', color: '#f59e0b', desc: 'ZTNA replaces VPN: identity-aware, per-session application access with continuous posture evaluation.', togaf: 'Phase D', nist: 'Protect (PR.AA)', sabsa: 'Logical', x: 0, y: 0 },
  { id: 11, name: 'Micro-Segmentation', group: 'network', color: '#f59e0b', desc: 'Workload-level isolation using software-defined policies to limit lateral movement across segments.', togaf: 'Phase D', nist: 'Protect (PR.IR)', sabsa: 'Physical', x: 0, y: 0 },
  { id: 12, name: 'Cloud Security Posture (CSPM)', group: 'network', color: '#f59e0b', desc: 'Continuous misconfiguration detection across cloud accounts/subscriptions mapped to compliance benchmarks.', togaf: 'Phase H', nist: 'Identify (ID.AM)', sabsa: 'Operational', x: 0, y: 0 },
  { id: 13, name: 'Data Loss Prevention', group: 'data', color: '#8b5cf6', desc: 'DLP policies enforced at endpoints, network egress, and cloud to detect and block sensitive data exfiltration.', togaf: 'Phase C', nist: 'Protect (PR.DS)', sabsa: 'Logical', x: 0, y: 0 },
  { id: 14, name: 'Encryption (at rest/transit)', group: 'data', color: '#8b5cf6', desc: 'AES-256 at rest, TLS 1.3 in transit, customer-managed keys (CMK) for sensitive data stores.', togaf: 'Phase C', nist: 'Protect (PR.DS)', sabsa: 'Physical', x: 0, y: 0 },
  { id: 15, name: 'Data Classification', group: 'data', color: '#8b5cf6', desc: 'Tiered sensitivity labels (Public / Internal / Confidential / Restricted) applied at creation, driving control selection.', togaf: 'Phase C', nist: 'Identify (ID.AM)', sabsa: 'Conceptual', x: 0, y: 0 },
  { id: 16, name: 'GRC Platform', group: 'governance', color: '#ef4444', desc: 'Governance, Risk & Compliance tooling: policy lifecycle, control mapping, audit evidence, risk register.', togaf: 'Phase G', nist: 'Govern (GV)', sabsa: 'Contextual', x: 0, y: 0 },
  { id: 17, name: 'Security Awareness', group: 'governance', color: '#ef4444', desc: 'Role-based security training, phishing simulations, and culture metrics tracked at the organizational level.', togaf: 'Phase B', nist: 'Protect (PR.AT)', sabsa: 'Operational', x: 0, y: 0 },
  { id: 18, name: 'Incident Response Plan', group: 'governance', color: '#ef4444', desc: 'Documented IR playbooks, tabletop exercise cadence, and defined escalation paths tied to BCP/DR.', togaf: 'Phase F', nist: 'Respond (RS)', sabsa: 'Operational', x: 0, y: 0 },
];

const CONTROL_LINKS = [
  [0,1],[0,2],[0,10],[0,4],[0,16],   // IAM → PAM, MFA, ZTNA, SIEM, GRC
  [1,4],[1,7],                        // PAM → SIEM, SOAR
  [2,10],                             // MFA → ZTNA
  [3,14],[3,10],                      // PKI → Encryption, ZTNA
  [4,7],[4,8],                        // SIEM → SOAR, VulnMgmt
  [5,4],[5,8],                        // ThreatIntel → SIEM, VulnMgmt
  [6,4],[6,7],                        // EDR → SIEM, SOAR
  [7,0],[7,9],[7,18],                 // SOAR → IAM, Firewall, IR
  [8,16],[8,12],                      // VulnMgmt → GRC, CSPM
  [9,11],[9,4],                       // Firewall → MicroSeg, SIEM
  [10,11],                            // ZTNA → MicroSeg
  [11,4],                             // MicroSeg → SIEM
  [12,4],[12,16],                     // CSPM → SIEM, GRC
  [13,14],[13,15],                    // DLP → Encryption, DataClass
  [14,15],                            // Encryption → DataClass
  [15,16],[15,13],                    // DataClass → GRC, DLP
  [16,18],[16,17],                    // GRC → IR, Awareness
  [18,7],                             // IR → SOAR
];

const MATRIX_DATA = [
  { phase:'Preliminary', sabsa:'Contextual', nist:'Govern', controls:'Architecture Principles, Governance Model, RACI', togafFocus:'Setup & Tailoring' },
  { phase:'A — Vision', sabsa:'Contextual', nist:'Govern + Identify', controls:'Threat Model (high-level), Data Classification, Risk Register', togafFocus:'Stakeholder Alignment' },
  { phase:'B — Business Arch', sabsa:'Conceptual', nist:'Identify + Govern', controls:'Separation of Duties, Privileged Role Mapping, Business Risk Assessment', togafFocus:'Process & Org Design' },
  { phase:'C — Info Systems', sabsa:'Logical', nist:'Protect + Identify', controls:'API Security, Encryption Policy, Data Classification, ABAC/RBAC', togafFocus:'Data & Application Arch' },
  { phase:'D — Technology', sabsa:'Physical', nist:'Protect', controls:'Network Zones, ZTNA, PKI, SIEM Architecture, EDR, Platform Hardening', togafFocus:'Infrastructure Design' },
  { phase:'E — Opportunities', sabsa:'Component', nist:'Protect + Identify', controls:'Security Product Evaluation, POC Criteria, Vendor Risk', togafFocus:'Solution Planning' },
  { phase:'F — Migration', sabsa:'Operational', nist:'Govern + Respond', controls:'Transition Risk Assessment, Security Acceptance Criteria, Rollback Plans', togafFocus:'Roadmap Sequencing' },
  { phase:'G — Impl Governance', sabsa:'Operational', nist:'Govern + Detect', controls:'Architecture Reviews, Security Sign-off, Pen Test, ADRs, Deviation Register', togafFocus:'Delivery Oversight' },
  { phase:'H — Change Mgmt', sabsa:'Contextual', nist:'Detect + Recover', controls:'Change Impact Assessment, Threat Model Refresh, ATO Reauthorization', togafFocus:'Continuous Evolution' },
  { phase:'RM — Req. Mgmt', sabsa:'All Layers', nist:'Govern', controls:'Security Requirements Repository, Traceability Matrix, Principles Register', togafFocus:'Central Thread' },
];

const NIST_COLORS = { 'Govern':'#8b5cf6','Identify':'#3b82f6','Protect':'#10b981','Detect':'#f59e0b','Respond':'#ef4444','Recover':'#06b6d4' };

const RSS_FEEDS = [
  { label: 'CISA', url: 'https://www.cisa.gov/news.xml' },
  { label: 'Krebs', url: 'https://krebsonsecurity.com/feed/' },
  { label: 'Dark Reading', url: 'https://www.darkreading.com/rss.xml' },
  { label: 'SANS ISC', url: 'https://isc.sans.edu/rssfeed.xml' },
];

let notes = JSON.parse(localStorage.getItem('secarch_notes') || '{}');
let progress = JSON.parse(localStorage.getItem('secarch_progress') || '{}');
