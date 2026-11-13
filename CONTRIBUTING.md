# Contributing

This repository is an early exploration scaffold. The first contribution should define a narrow, testable use case and a documented tool/permission contract before adding agent behavior.

## Requirements

- Use fictional email content and test accounts in examples and fixtures.
- Document every permission and external data flow.
- Require explicit confirmation before sending, forwarding or deleting messages.
- Keep credentials in local environment or managed secrets, never in source control.
- Add tests for denied permissions, tool errors, retries and ambiguous outcomes.
- Distinguish a drafted message from a message actually sent.

Pull requests should include the proposed use case, tool contract, test instructions and known limitations.
