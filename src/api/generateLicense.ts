import { LicenseForm } from '../pages/LicenseGenerator'

export default ({ name, project, year, commercial, aiUsage }: LicenseForm): string => {
	return `Nolly's Fair & Ethical Open-Source License (NFE-OSL v1.0)
Author: ${name}
Project: ${project}
Year: ${year}
License Base: AGPL-3.0-or-later (https://www.gnu.org/licenses/agpl-3.0.html)
Commercial Use: ${commercial ? 'Allowed' : 'Restricted'}
AI & Data Use: ${aiUsage ? 'Allowed' : 'Restricted'}

1. Base License: AGPL-3.0-or-later
This software is licensed under the Affero General Public License v3.0-or-later (AGPL-3.0-or-later).
You are free to use, modify, and distribute this software, as long as:
- All modifications remain open-source under the same license.
- If used in a network-based service (SaaS), all modifications must be made publicly available.

2. Fair Attribution Clause
Users of this software must give proper credit to the original author (${name}) in the following ways:
- If the software has a UI, credit must be visible in the interface (e.g., in an "About" section).
- If used on a website, credit must be visible on the website (e.g., footer or "Open Source" page).
- If no UI is present, credit must be included in the documentation (README, LICENSE file, etc.).
Failure to provide proper credit immediately revokes this license.

3. Commercial Use & Monetization Rules
${commercial ? `Commercial use is allowed only under the following conditions:
- Closed-source use requires explicit permission from the author.
- Reselling or monetizing the software without modification is prohibited.
- To use this software in a commercial project, you must:
  - Contact the author and request permission.
  - Contribute financially or contribute code back to the project.` : `Commercial use is restricted under this license.
To use this software commercially, you must:
- Contact the author
- Obtain explicit permission for commercial use.`}
Failure to request commercial permission will result in license termination.

4. Ethical Use Restrictions
This software must not be used for:
- Military, weapons systems, or warfare-related applications.
- Surveillance technologies or mass data collection violating privacy rights.
- Advertising tracking or unethical data collection for profit.
- Government agencies involved in mass surveillance or citizen monitoring.
- Any project that profits from personal data without explicit user consent.
Violation of these terms results in automatic license termination.

5. AI & Data Use Restrictions
${aiUsage ? `- If this software is used to train AI models or process large datasets, the resulting models or datasets must be open-sourced under the same AGPL-3.0 terms.
- AI companies and data processors must obtain explicit permission before using this software commercially.` : `AI and data usage are restricted under this license.
To use this software for AI or data processing, you must:
- Contact the author
- Obtain explicit permission for AI/data usage.`}
Unauthorized AI/data usage terminates this license immediately.

6. License Enforcement & Violations
If any individual or company violates this license:
- They must immediately stop using this software.
- They may be held financially liable for damages and legal fees.
The author (${name}) reserve the right to enforce these terms through legal means.

7. Future-Proofing & Legal Validity
- This license applies indefinitely (including all future versions of this software).
- It is legally binding under EU copyright law and the Berne Convention.
- The author reserves the right to update this license to improve protections.`
}
