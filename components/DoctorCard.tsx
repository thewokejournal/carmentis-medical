import Image from "next/image";

interface DoctorCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function DoctorCard({ name, role, bio, imageUrl }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-neutral-100">
      <div className="aspect-square relative bg-gradient-to-br from-primary-100 to-teal-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl text-neutral-800 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium text-sm mb-3">{role}</p>
        <p className="text-neutral-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}


