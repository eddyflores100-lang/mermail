# Mermail Agent Skill Demo

**A small project space for exploring agent workflows built around Mermail.**

> **Project status: early scaffold.** The repository currently has a placeholder-level README and does not document a runnable skill, app entry point, installation process, or automated test command. This README makes that status explicit rather than advertising functionality that is not yet verifiable.

## Purpose

The intended direction is to explore how an AI agent can work with Mermail as an email-oriented interface: understand a task, prepare a message, use approved Mermail capabilities, and report what happened. The concrete skill contract, supported tools, permissions, and runtime still need to be specified in this repository.

This repository is separate from the more developed [Mermail escrow agent demo](https://github.com/eddyflores100-lang/mermail-escrow-agent).

## Current state

| Area | Status |
| --- | --- |
| Project identity and intent | Documented at a high level |
| Runnable application / skill entry point | Not yet documented or verified |
| Installation and configuration | Not yet available |
| Tool contract and permissions | To be specified |
| Automated tests / CI | Not yet configured |
| Release package | Not published |

## Planned implementation

1. Define the exact agent use case and supported Mermail tools.
2. Add a standard skill manifest and a concise, executable `SKILL.md`.
3. Document prerequisites, installation, client configuration, authentication scopes, and removal.
4. Add examples using fictional messages and test accounts only.
5. Add automated validation for the skill manifest, required instructions, and examples.
6. Add a CI workflow and tagged releases after the runtime contract is stable.

## Security and privacy principles

- Request only the Mermail permissions required by the documented workflow.
- Never commit API keys, OAuth tokens, mailbox contents, or customer data.
- Use fictional email addresses and sample messages in documentation and tests.
- Make any message-sending action explicit and reviewable; do not imply that a draft was sent.
- Document data handling, retention, and failure behavior before connecting a real mailbox.

## License

This repository includes an [Apache License 2.0](LICENSE). Check the license file and the provenance of any future third-party assets before redistributing them.

## Links

- [Source repository](https://github.com/eddyflores100-lang/mermail)
- [Issues and feature requests](https://github.com/eddyflores100-lang/mermail/issues)
- [Commit history](https://github.com/eddyflores100-lang/mermail/commits/main)
- [Related Mermail escrow agent demo](https://github.com/eddyflores100-lang/mermail-escrow-agent)

---

*This project page describes the repository's documented state, not a production-ready email agent. Update the status table when a runnable skill and tests are added.*
