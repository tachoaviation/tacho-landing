import { cn } from "@/lib/utils";
import {
  IconClipboardCheck,
  IconBuildingFactory2,
  IconShieldCheck,
  IconFileSearch,
  IconAffiliate,
  IconRefreshAlert,
} from "@tabler/icons-react";

const capabilities = [
  {
    title: "Maintenance Event Supervision",
    description:
      "End-to-end supervision and monitoring of scheduled and unscheduled maintenance events, ensuring quality and compliance at every stage.",
    icon: <IconClipboardCheck size={30} stroke={1.6} />,
  },
  {
    title: "Base Maintenance Representation",
    description:
      "On-site representation during base maintenance and heavy check events on behalf of asset owners, investors, and lessors.",
    icon: <IconBuildingFactory2 size={30} stroke={1.6} />,
  },
  {
    title: "Regulatory Compliance Tracking",
    description:
      "Systematic tracking of airworthiness directives and evolving regulatory requirements across EASA, FAA, and other aviation authorities.",
    icon: <IconShieldCheck size={30} stroke={1.6} />,
  },
  {
    title: "Records Audit & Technical Review",
    description:
      "Comprehensive aircraft records audit and technical review ensuring full traceability, accuracy, and documentation integrity.",
    icon: <IconFileSearch size={30} stroke={1.6} />,
  },
  {
    title: "CAMO Coordination & Liaison",
    description:
      "Structured coordination with CAMO organisations and technical liaison to ensure seamless airworthiness management alignment.",
    icon: <IconAffiliate size={30} stroke={1.6} />,
  },
  {
    title: "Storage & Return-to-Service",
    description:
      "Oversight of storage programs and return-to-service activities ensuring safe, fully compliant reactivation of grounded aircraft.",
    icon: <IconRefreshAlert size={30} stroke={1.6} />,
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
  const isFirstCol = index % 3 === 0;

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
          "opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 absolute inset-0 pointer-events-none rounded-sm",
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

export default function TechnicalCapabilities() {
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
