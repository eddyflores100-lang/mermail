# Security Policy

## Project status

This repository is an early scaffold for an email-oriented agent workflow. It does not yet define a production skill contract or verified runtime. Do not use it to process real mail or sensitive information until those capabilities and safeguards are implemented and reviewed.

## Reporting

Report suspected vulnerabilities privately through GitHub Security Advisories when enabled. Do not include real email contents, credentials, access tokens or personal data in public issues.

## Minimum safeguards for future implementation

Any email integration must use least-privilege scopes, explicit user approval for sending or destructive actions, redaction in logs, secret storage outside the repository, and clear reporting of whether an action was actually completed.
