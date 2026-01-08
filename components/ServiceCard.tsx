import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-neutral-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-neutral-800 mb-2">{title}</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}


