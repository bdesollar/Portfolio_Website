import { ArrowRight } from "lucide-react";
import { formatMonthYear } from "../../utils/copy";
import "../../styles/DateRange.css";

function DateRange({ start, end = "Present" }) {
  const endLabel = end === "Present" ? "Present" : formatMonthYear(end);

  return (
    <span className="date-range">
      <span>{formatMonthYear(start)}</span>
      <ArrowRight className="date-range__icon" size={14} aria-hidden="true" />
      <span>{endLabel}</span>
    </span>
  );
}

export default DateRange;
