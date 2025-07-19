"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";
import { useState } from "react";
import Head from "next/head";

function ThemeCustomizer({
  onChange,
  theme,
  open,
  setOpen,
}: {
  onChange: (theme: any) => void;
  theme: any;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const fontOptions = [
    { label: "Montserrat", value: "Montserrat, Arial, sans-serif" },
    { label: "Lato", value: "Lato, Arial, sans-serif" },
    { label: "Inter", value: "Inter, Arial, sans-serif" },
    { label: "Playfair Display", value: "Playfair Display, serif" },
    { label: "Roboto", value: "Roboto, Arial, sans-serif" },
  ];
  const templateOptions = [
    { label: "Modern", value: "modern" },
    { label: "Classic", value: "classic" },
    { label: "Minimal", value: "minimal" },
    { label: "Elegant", value: "elegant" },
  ];
  return (
    <div
      className={`fixed top-0 right-0 z-50 w-80 h-full bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      style={{ fontFamily: theme.fontFamily }}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-bold">Customize</h2>
        <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-900 text-2xl">×</button>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label className="block font-semibold mb-1">Page Color</label>
          <input
            type="color"
            value={theme.pageColor}
            onChange={e => onChange({ ...theme, pageColor: e.target.value })}
            className="w-10 h-10 p-0 border-none bg-transparent cursor-pointer"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Font Color</label>
          <input
            type="color"
            value={theme.fontColor}
            onChange={e => onChange({ ...theme, fontColor: e.target.value })}
            className="w-10 h-10 p-0 border-none bg-transparent cursor-pointer"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Font Style</label>
          <select
            value={theme.fontFamily}
            onChange={e => onChange({ ...theme, fontFamily: e.target.value })}
            className="w-full border rounded px-2 py-1"
          >
            {fontOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Template</label>
          <select
            value={theme.template}
            onChange={e => onChange({ ...theme, template: e.target.value })}
            className="w-full border rounded px-2 py-1"
          >
            {templateOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default function ResumeBuilderPage(props) {
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [theme, setTheme] = useState({
    pageColor: "#f8fafc",
    fontColor: "#18181B",
    fontFamily: "Montserrat, Arial, sans-serif",
    template: "modern",
  });
  return (
    <>
      <Head>
        <title>Free Resume Builder | SwiftResume.io</title>
        <meta name="description" content="Create a professional resume for free with SwiftResume.io. ATS-friendly, modern, and easy to use. Download free resume templates and examples." />
        <meta name="keywords" content="resume builder, free resume template, resume generator, ATS resume, online resume, job application, SwiftResume.io" />
      </Head>
      <Provider store={store}>
        <main
          className="relative h-full w-full overflow-hidden"
          style={{
            background: theme.pageColor,
            color: theme.fontColor,
            fontFamily: theme.fontFamily,
          }}
        >
          <button
            className="fixed bottom-8 right-8 z-50 bg-primary text-white rounded-full px-6 py-3 shadow-xl font-bold text-lg hover:scale-105 transition-transform"
            onClick={() => setCustomizerOpen(true)}
          >
            Customize
          </button>
          <ThemeCustomizer
            open={customizerOpen}
            setOpen={setCustomizerOpen}
            theme={theme}
            onChange={setTheme}
          />
          <div className={`grid grid-cols-3 md:grid-cols-6 ${theme.template}`}>
            <div className="col-span-3">
              <ResumeForm />
            </div>
            <div className="col-span-3">
              <Resume />
            </div>
          </div>
        </main>
      </Provider>
    </>
  );
}
