import { cn } from "@/lib/utils";
import {
  IconPlane,
  IconFileCheck,
  IconChartLine,
  IconClipboardCheck,
  IconChecklist,
  IconArrowsTransferUp,
  IconTool,
} from "@tabler/icons-react";

const COLS = 3;
const TOTAL = 6;
const LAST_ROW_START = Math.floor((TOTAL - 1) / COLS) * COLS; // index 3

const capabilities = [
  {
    title: "Pre-Purchase & Pre-Lease Evaluation",
    description:
      "Comprehensive technical evaluation of aircraft before purchase or lease, covering condition assessment, compliance status, and full risk profiling.",
    icon: <IconPlane size={30} stroke={1.6} />,
  },
  {
    title: "Lease Contract Technical Advisory",
    description:
      "Expert guidance on technical clauses within lease agreements to protect operational and financial interests throughout the lease term.",
    icon: <IconFileCheck size={30} stroke={1.6} />,
  },
  {
    title: "Maintenance Reserve Forecasting",
    description:
      "Detailed analysis and forecasting of maintenance reserves to support accurate financial planning and effective lease portfolio management.",
    icon: <IconChartLine size={30} stroke={1.6} />,
  },
  {
    title: "Aircraft Records & Compliance Review",
    description:
      "Thorough review of aircraft technical records and regulatory compliance status to ensure full documentation accuracy and traceability.",
    icon: <IconClipboardCheck size={30} stroke={1.6} />,
  },
  {
    title: "Lease Return & Redelivery Management",
    description:
      "End-to-end management of lease return processes, ensuring aircraft meet all contractual redelivery conditions on time and within spec.",
    icon: <IconChecklist size={30} stroke={1.6} />,
  },
  {
    title: "Operator Transition Coordination",
    description:
      "Technical coordination and support during aircraft transitions between operators to ensure smooth, compliant, and efficient handovers.",
    icon: <IconArrowsTransferUp size={30} stroke={1.6} />,
  },
];

const CapabilityCard = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const col = index % COLS;
  const isLastCol = col === COLS - 1;
  const isInLastRow = index >= LAST_ROW_START;
  const isTopHalf = index < COLS; // top row gets gradient from top

  return (
    <div
      className={cn(
        "flex flex-col relative group/feature transition-all duration-300",
        !isLastCol && "border-r border-[#D5E5F2]",
        !isInLastRow && "border-b border-[#D5E5F2]",
      )}
      style={{
        padding: "36px 36px 32px 36px",
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
        background: "transparent",
      }}
    >
      {/* Hover wash gradient */}
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 absolute inset-0 pointer-events-none",
          isTopHalf
            ? "bg-gradient-to-b from-[#EBF4FD] via-[#F5FAFF] to-transparent"
            : "bg-gradient-to-t from-[#EBF4FD] via-[#F5FAFF] to-transparent"
        )}
      />

      {/* Icon bubble */}
      <div
        className="relative z-10 mb-5 flex items-center justify-center rounded-xl transition-all duration-300 group-hover/feature:scale-110"
        style={{
          width: "52px",
          height: "52px",
          backgroundColor: "#EBF4FD",
          color: "#00488C",
        }}
      >
        {icon}
      </div>

      {/* Title with animated left accent bar */}
      <div className="relative z-10 mb-3">
        <div
          className="absolute -left-9 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-300 group-hover/feature:h-8 h-5"
          style={{ backgroundColor: "#41BEF0" }}
        />
        <h3
          className="group-hover/feature:translate-x-1 transition-transform duration-200 inline-block"
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#00488C",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="relative z-10"
        style={{
          fontSize: "13px",
          lineHeight: "1.75",
          color: "#6B7280",
          fontWeight: 400,
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default function LeasingSupportCapabilities() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative"
      style={{
        border: "1px solid #D5E5F2",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      {capabilities.map((cap, index) => (
        <CapabilityCard key={cap.title} {...cap} index={index} />
      ))}
    </div>
  );
}
