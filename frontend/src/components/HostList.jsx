// estado de c
export function HostList({ hosts }) {
  return (
    <div className="flex flex-col gap-1.5">
      {Object.entries(hosts).map(([name, status]) => (
        <div
          key={name}
          className={`flex justify-between px-3 py-2 rounded-md text-sm ${
            status === "cuarentena" ? "bg-red-50 text-red-700" : "bg-gray-50"
          }`}
        >
          <span>{name}</span>
          <span>{status}</span>
        </div>
      ))}
    </div>
  );
}
