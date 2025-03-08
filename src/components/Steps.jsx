import { Upload, X, Download } from 'lucide-react';

const steps = [
  { id: 1, icon: <Upload size={28} className="text-white" />, title: "Upload image", desc: "This is a demo text, will replace it later.", bg: "bg-purple-500" },
  { id: 2, icon: <X size={28} className="text-white" />, title: "Remove background", desc: "This is a demo text, will replace it later.", bg: "bg-purple-500" },
  { id: 3, icon: <Download size={28} className="text-white" />, title: "Download image", desc: "This is a demo text, will replace it later.", bg: "bg-purple-500" },
];

const Steps  = () => {
  return (
    <section className="py-16 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Steps to remove background <br className="hidden sm:block" /> image in seconds
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative flex items-start p-6 bg-white shadow-md rounded-lg transition-transform duration-300 hover:-translate-y-2 ${
              index === 2 ? "sm:col-span-2 lg:col-span-1 mx-auto" : ""
            }`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${step.bg} mr-4`}>
              {step.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
