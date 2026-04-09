import { cn } from "@/lib/utils";
import {
  IconActivityHeartbeat,
  IconEngine,
  IconFolderOpen,
  IconReportAnalytics,
  IconTimeline,
  IconArrowsExchange,
} from "@tabler/icons-react";

const capabilities = [
  {
    title: "Maintenance Status Monitoring",
    description:
      "Continuous monitoring and forecasting of aircraft maintenance status to anticipate upcoming events and protect asset value proactively.",
    icon: <IconActivityHeartbeat size={30} stroke={1.6} />,
  },
  {
    title: "Engine & Component LLP Tracking",
    description:
      "Precise tracking of engine life-limited parts and critical component life cycles to ensure ongoing airworthiness and commercial readiness.",
    icon: <IconEngine size={30} stroke={1.6} />,
  },
  {
    title: "Technical Records Management",
    description:
      "Systematic management of all aircraft technical records, ensuring completeness, accuracy, and full regulatory traceability.",
    icon: <IconFolderOpen size={30} stroke={1.6} />,
  },
  {
    title: "Operator Performance Review",
    description:
      "Structured review of operator performance and compliance to identify risk exposures and safeguard asset condition during the lease term.",
    icon: <IconReportAnalytics size={30} stroke={1.6} />,
  },
  {
    title: "Lifecycle Planning",
    description:
      "Strategic lifecycle planning and remarketing preparation to optimise timing, positioning, and value ahead of lease transitions.",
    icon: <IconTimeline size={30} stroke={1.6} />,
  },
  {
    title: "End-of-Lease Asset Strategy",
    description:
      "Structured end-of-lease asset strategy encompassing redelivery conditions, reserve management, and transition planning for next placement.",
    icon: <IconArrowsExchange size={30} stroke={1.6} />,
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
  const isTopRow = index < 3;
  const isLastCol = index % 3 === 2;

  return (
    <div
      className={cn(
        "flex flex-col relative group/feature transition-all duration-300",
        !isLastCol && "border-r border-[#D5E5F2]",
        isTopRow && "border-b border-[#D5E5F2]",
      )}
      style={{
        padding: '36px 36px 32px 36px',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
        background: 'transparent',
      }}
    >
      {/* Hover wash gradient */}
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 absolute inset-0 pointer-events-none",
          isTopRow
            ? "bg-gradient-to-b from-[#EBF4FD] via-[#F5FAFF] to-transparent"
            : "bg-gradient-to-t from-[#EBF4FD] via-[#F5FAFF] to-transparent"
        )}
      />

      {/* Icon bubble */}
      <div
        className="relative z-10 mb-5 flex items-center justify-center rounded-xl transition-all duration-300 group-hover/feature:scale-110"
        style={{
          width: '52px',
          height: '52px',
          backgroundColor: '#EBF4FD',
          color: '#00488C',
        }}
      >
        {icon}
      </div>

      {/* Title with animated left accent bar */}
      <div className="relative z-10 mb-3">
        <div
          className="absolute -left-9 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-300 group-hover/feature:h-8 h-5"
          style={{ backgroundColor: '#41BEF0' }}
        />
        <h3
          className="group-hover/feature:translate-x-1 transition-transform duration-200 inline-block"
          style={{
            fontSize: '15px',
            fontWeight: 600,
            color: '#00488C',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="relative z-10"
        style={{
          fontSize: '13px',
          lineHeight: '1.75',
          color: '#6B7280',
          fontWeight: 400,
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default function AssetManagementCapabilities() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative"
      style={{
        border: '1px solid #D5E5F2',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {capabilities.map((cap, index) => (
        <CapabilityCard key={cap.title} {...cap} index={index} />
      ))}
    </div>
  );
}
