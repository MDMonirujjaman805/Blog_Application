import { notFound } from "next/navigation";

export default function RootDefault() {
  return (
    <div className="p-4 bg-gray-100">
      <h2>Analytics Overview</h2>
      <p>This is Root Default File.</p>
      {notFound()}
    </div>
  );
}
