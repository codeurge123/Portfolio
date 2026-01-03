import {
  Home,
  Briefcase,
  Folder,
  FileText,
  Mail,
  MoreHorizontal,
} from "lucide-react";

export default function MobileBottomTabs({ active, setActive, onSpecial }) {
  const tabs = [
    { id: 0, icon: Home },
    { id: 1, icon: Folder },
    { id: 2, icon: FileText },
    { id: 3, icon: Mail },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black h-14 items-center border-t border-gray-800 flex justify-around py-2">
      
      {tabs.map(({ id, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActive(id)}
          className={`flex flex-col items-center transition-colors ${
            active === id ? "text-white" : "text-gray-400"
          }`}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}

      {/* MORE BUTTON */}
      <button
        onClick={onSpecial}
        className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>
  );
}
