# Accounts Receivable Automation Suite

Public portfolio demo combining two related ARCA Week 3 builds:

- **Aging Invoice Engine:** GoHighLevel stage change → n8n validation and orchestration → Trigger.dev PDF generation → email → CRM write-back.
- **Monthly Aging Report engine:** normalized CRM rows → Trigger.dev and SheetJS → a two-sheet Excel aging report.

## Verified evidence

- Invoice workflow validated end to end with a real GoHighLevel card drag.
- 23/23 invoice edge cases passed.
- 74/74 aging-report checks passed.
- A production-key Trigger.dev report run completed and its delivered workbook passed 20/20 checks.

## Accuracy boundary

The retained project record does not confirm completion of the separate Make monthly scheduler and owner-email scenario. The public case study therefore describes the workbook engine as production-run verified without claiming unattended monthly delivery was activated.

All customer and company data visible in this demo is synthetic.
