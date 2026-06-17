/**
 * Site copy conventions:
 * - No dash characters in user-facing text (-, –, —)
 * - No sentence endings (no trailing periods in marketing copy)
 * - Use noun phrases and verb fragments
 */

export function formatDateRange(start, end = "Present") {
  return `${start} to ${end}`;
}
