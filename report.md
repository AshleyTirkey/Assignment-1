# Test Report

**❌ 9 test(s) failed** &nbsp;·&nbsp; 11/20 passing &nbsp;·&nbsp; 2026-05-22 09:27 UTC

## `tests/generator.test.ts`

### Step 1 – Block Definitions

- ✅ rbac_role block exists and has a ROLE dropdown field
- ❌ rbac_role ROLE dropdown includes TRANSITDIRECTOR, TRAINOPERATOR, and COMMUTER
  > 💬 AssertionError: The ROLE dropdown must include the option "TRANSITDIRECTOR": expected 'TRUSTANDSAFETYLEAD' to be 'TRANSITDIRECTOR' // Object.is equality
- ✅ rbac_resource block exists and has a RES dropdown field
- ❌ rbac_resource RES dropdown includes CONTROLCENTER, SUBWAYTRAINS, and TRANSITPASSES
  > 💬 AssertionError: The RES dropdown must include the option "CONTROLCENTER": expected 'USERACCOUNTS' to be 'CONTROLCENTER' // Object.is equality
- ✅ rbac_rule block exists with EFFECT, ACTION fields and RESOURCES input
- ❌ rbac_rule EFFECT accepts ALLOW and DENY; ACTION accepts Reroute, Drive, Board
  > 💬 AssertionError: The ACTION dropdown must include the option "REROUTE": expected 'BAN' to be 'REROUTE' // Object.is equality
- ✅ rbac_policy block exists with NAME field and ROLES, RULES statement inputs
### Step 2 – Per-Block Code Generation

- ❌ rbac_role generates a quoted string for the selected role
  > 💬 AssertionError: generator.forBlock["rbac_role"] must return the ROLE value as a quoted string, e.g. "TRANSITDIRECTOR": expected '"TRUSTANDSAFETYLEAD",' to match /["']TRANSITDIRECTOR["']/
- ❌ rbac_resource generates a quoted string for the selected resource
  > 💬 AssertionError: generator.forBlock["rbac_resource"] must return the RES value as a quoted string, e.g. "CONTROLCENTER": expected '"USERACCOUNTS",' to match /["']CONTROLCENTER["']/
- ❌ rbac_rule with ALLOW generates return "Allow" and references the ACTION
  > 💬 AssertionError: generator.forBlock["rbac_rule"] must include the ACTION value ("REROUTE") in a conditional: expected '\nif (action === "BAN" && [].includes…' to match /["']REROUTE["']/
- ✅ rbac_rule with DENY generates return "Deny"
- ✅ rbac_policy generates a named function with the correct signature
### Step 3 – Full Policy Generation

- ✅ generates a function named PublicTransitAuthority from the fixture workspace
- ❌ generated code includes a role membership guard with TRANSITDIRECTOR
  > 💬 AssertionError: The allowedRoles list must contain "TRANSITDIRECTOR" as specified by the workspace fixture: expected 'function PublicTransitAuthority(role,…' to match /["']TRANSITDIRECTOR["']/
- ❌ generated code includes an action+resource conditional for REROUTE on CONTROLCENTER
  > 💬 AssertionError: The generated code must check action === "REROUTE" — check your rbac_rule generator: expected 'function PublicTransitAuthority(role,…' to match /["']REROUTE["']/
- ✅ generated code has a default return "Deny" at the end
### Step 4 – Policy Evaluation Correctness

- ❌ PublicTransitAuthority: TRANSITDIRECTOR REROUTE CONTROLCENTER → Allow
  > 💬 AssertionError: TRANSITDIRECTOR performing REROUTE on CONTROLCENTER should be allowed — check that the fixture has TRANSITDIRECTOR in ROLES with an ALLOW REROUTE rule for CONTROLCENTER: expected 'Deny' to be 'Allow' // Object.is equality
- ✅ PublicTransitAuthority: TRAINOPERATOR REROUTE CONTROLCENTER → Deny (role not listed)
- ✅ PublicTransitAuthority: TRANSITDIRECTOR DRIVE CONTROLCENTER → Deny (action not covered)
- ✅ PublicTransitAuthority: TRANSITDIRECTOR REROUTE SUBWAYTRAINS → Deny (resource not covered)

---

> ⚠️ Read the messages above — each one tells you exactly what to implement next.
