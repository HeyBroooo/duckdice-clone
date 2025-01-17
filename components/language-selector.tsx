"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://flagpedia.net/data/flags/h80/gb.png",
  },
  {
    code: "ru",
    name: "Русский",
    flag: "https://flagpedia.net/data/flags/h80/ru.png",
  },
  {
    code: "zh",
    name: "中文",
    flag: "https://flagpedia.net/data/flags/h80/cn.png",
  },
  {
    code: "ja",
    name: "日本語",
    flag: "https://flagpedia.net/data/flags/h80/jp.png",
  },
];

export function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors"
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.name}
          className="w-4 h-4 rounded"
        />
        <span className="hidden sm:inline">{selectedLang.code.toUpperCase()}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
              className="flex items-center w-full text-left px-3 py-1.5 text-white hover:bg-gray-700 transition-colors"
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-4 h-4 rounded mr-2"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
