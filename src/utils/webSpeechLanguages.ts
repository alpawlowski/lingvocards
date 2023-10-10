export interface LanguageData {
  original_name: string;
  code: string;
  flag: string;
  english_name: string;
}

const webSpeechLanguages: LanguageData[] = [
  {
      "original_name": "Afrikaans",
      "code": "af-ZA",
      "flag": "🇿🇦",
      "english_name": "Afrikaans"
  },
  {
      "original_name": "አማርኛ",
      "code": "am-ET",
      "flag": "🇪🇹",
      "english_name": "Amharic"
  },
  {
      "original_name": "Azərbaycan",
      "code": "az-AZ",
      "flag": "🇦🇿",
      "english_name": "Azerbaijani"
  },
  {
      "original_name": "বাংলা",
      "code": "bn-BD",
      "flag": "🇧🇩",
      "english_name": "Bengali"
  },
  {
      "original_name": "Bahasa Indonesia",
      "code": "id-ID",
      "flag": "🇮🇩",
      "english_name": "Indonesian"
  },
  {
      "original_name": "Bahasa Melayu",
      "code": "ms-MY",
      "flag": "🇲🇾",
      "english_name": "Malay"
  },
  {
      "original_name": "Català",
      "code": "ca-ES",
      "flag": "🇪🇸",
      "english_name": "Catalan"
  },
  {
      "original_name": "Čeština",
      "code": "cs-CZ",
      "flag": "🇨🇿",
      "english_name": "Czech"
  },
  {
      "original_name": "Dansk",
      "code": "da-DK",
      "flag": "🇩🇰",
      "english_name": "Danish"
  },
  {
      "original_name": "Deutsch",
      "code": "de-DE",
      "flag": "🇩🇪",
      "english_name": "German"
  },
  {
      "original_name": "English (Australia)",
      "code": "en-AU",
      "flag": "🇦🇺",
      "english_name": "English (Australia)"
  },
  {
      "original_name": "English (Canada)",
      "code": "en-CA",
      "flag": "🇨🇦",
      "english_name": "English (Canada)"
  },
  {
      "original_name": "English (India)",
      "code": "en-IN",
      "flag": "🇮🇳",
      "english_name": "English (India)"
  },
  {
      "original_name": "English (New Zealand)",
      "code": "en-NZ",
      "flag": "🇳🇿",
      "english_name": "English (New Zealand)"
  },
  {
      "original_name": "English (South Africa)",
      "code": "en-ZA",
      "flag": "🇿🇦",
      "english_name": "English (South Africa)"
  },
  {
      "original_name": "English (UK)",
      "code": "en-GB",
      "flag": "🇬🇧",
      "english_name": "English (UK)"
  },
  {
      "original_name": "English (US)",
      "code": "en-US",
      "flag": "🇺🇸",
      "english_name": "English (US)"
  },
  {
      "original_name": "Español (Argentina)",
      "code": "es-AR",
      "flag": "🇦🇷",
      "english_name": "Spanish (Argentina)"
  },
  {
      "original_name": "Español (Bolivia)",
      "code": "es-BO",
      "flag": "🇧🇴",
      "english_name": "Spanish (Bolivia)"
  },
  {
      "original_name": "Español (Chile)",
      "code": "es-CL",
      "flag": "🇨🇱",
      "english_name": "Spanish (Chile)"
  },
  {
      "original_name": "Español (Colombia)",
      "code": "es-CO",
      "flag": "🇨🇴",
      "english_name": "Spanish (Colombia)"
  },
  {
      "original_name": "Español (Costa Rica)",
      "code": "es-CR",
      "flag": "🇨🇷",
      "english_name": "Spanish (Costa Rica)"
  },
  {
      "original_name": "Español (Ecuador)",
      "code": "es-EC",
      "flag": "🇪🇨",
      "english_name": "Spanish (Ecuador)"
  },
  {
      "original_name": "Español (El Salvador)",
      "code": "es-SV",
      "flag": "🇸🇻",
      "english_name": "Spanish (El Salvador)"
  },
  {
      "original_name": "Español (España)",
      "code": "es-ES",
      "flag": "🇪🇸",
      "english_name": "Spanish (Spain)"
  },
  {
      "original_name": "Español (Estados Unidos)",
      "code": "es-US",
      "flag": "🇺🇸",
      "english_name": "Spanish (United States)"
  },
  {
      "original_name": "Español (Guatemala)",
      "code": "es-GT",
      "flag": "🇬🇹",
      "english_name": "Spanish (Guatemala)"
  },
  {
      "original_name": "Español (Honduras)",
      "code": "es-HN",
      "flag": "🇭🇳",
      "english_name": "Spanish (Honduras)"
  },
  {
      "original_name": "Español (México)",
      "code": "es-MX",
      "flag": "🇲🇽",
      "english_name": "Spanish (Mexico)"
  },
  {
      "original_name": "Español (Nicaragua)",
      "code": "es-NI",
      "flag": "🇳🇮",
      "english_name": "Spanish (Nicaragua)"
  },
  {
      "original_name": "Español (Panamá)",
      "code": "es-PA",
      "flag": "🇵🇦",
      "english_name": "Spanish (Panama)"
  },
  {
      "original_name": "Español (Paraguay)",
      "code": "es-PY",
      "flag": "🇵🇾",
      "english_name": "Spanish (Paraguay)"
  },
  {
      "original_name": "Español (Perú)",
      "code": "es-PE",
      "flag": "🇵🇪",
      "english_name": "Spanish (Peru)"
  },
  {
      "original_name": "Español (Puerto Rico)",
      "code": "es-PR",
      "flag": "🇵🇷",
      "english_name": "Spanish (Puerto Rico)"
  },
  {
      "original_name": "Español (República Dominicana)",
      "code": "es-DO",
      "flag": "🇩🇴",
      "english_name": "Spanish (Dominican Republic)"
  },
  {
      "original_name": "Español (Uruguay)",
      "code": "es-UY",
      "flag": "🇺🇾",
      "english_name": "Spanish (Uruguay)"
  },
  {
      "original_name": "Español (Venezuela)",
      "code": "es-VE",
      "flag": "🇻🇪",
      "english_name": "Spanish (Venezuela)"
  },
  {
      "original_name": "Euskara",
      "code": "eu-ES",
      "flag": "🇪🇸",
      "english_name": "Basque"
  },
  {
      "original_name": "Filipino",
      "code": "fil-PH",
      "flag": "🇵🇭",
      "english_name": "Filipino"
  },
  {
      "original_name": "Français (Canada)",
      "code": "fr-CA",
      "flag": "🇨🇦",
      "english_name": "French (Canada)"
  },
  {
      "original_name": "Français (France)",
      "code": "fr-FR",
      "flag": "🇫🇷",
      "english_name": "French (France)"
  },
  {
      "original_name": "Galego",
      "code": "gl-ES",
      "flag": "🇪🇸",
      "english_name": "Galician"
  },
  {
      "original_name": "ગુજરાતી",
      "code": "gu-IN",
      "flag": "🇮🇳",
      "english_name": "Gujarati"
  },
  {
      "original_name": "Hrvatski",
      "code": "hr-HR",
      "flag": "🇭🇷",
      "english_name": "Croatian"
  },
  {
      "original_name": "IsiZulu",
      "code": "zu-ZA",
      "flag": "🇿🇦",
      "english_name": "Zulu"
  },
  {
      "original_name": "Íslenska",
      "code": "is-IS",
      "flag": "🇮🇸",
      "english_name": "Icelandic"
  },
  {
      "original_name": "Italiano",
      "code": "it-IT",
      "flag": "🇮🇹",
      "english_name": "Italian"
  },
  {
      "original_name": "ಕನ್ನಡ",
      "code": "kn-IN",
      "flag": "🇮🇳",
      "english_name": "Kannada"
  },
  {
      "original_name": "ភាសាខ្មែរ",
      "code": "km-KH",
      "flag": "🇰🇭",
      "english_name": "Khmer"
  },
  {
      "original_name": "Latviešu",
      "code": "lv-LV",
      "flag": "🇱🇻",
      "english_name": "Latvian"
  },
  {
      "original_name": "Lietuvių",
      "code": "lt-LT",
      "flag": "🇱🇹",
      "english_name": "Lithuanian"
  },
  {
      "original_name": "Magyar",
      "code": "hu-HU",
      "flag": "🇭🇺",
      "english_name": "Hungarian"
  },
  {
      "original_name": "മലയാളം",
      "code": "ml-IN",
      "flag": "🇮🇳",
      "english_name": "Malayalam"
  },
  {
      "original_name": "मराठी",
      "code": "mr-IN",
      "flag": "🇮🇳",
      "english_name": "Marathi"
  },
  {
      "original_name": "Nederlands",
      "code": "nl-NL",
      "flag": "🇳🇱",
      "english_name": "Dutch"
  },
  {
      "original_name": "नेपाली",
      "code": "ne-NP",
      "flag": "🇳🇵",
      "english_name": "Nepali"
  },
  {
      "original_name": "Norsk bokmål",
      "code": "nb-NO",
      "flag": "🇳🇴",
      "english_name": "Norwegian Bokmål"
  },
  {
      "original_name": "Polski",
      "code": "pl-PL",
      "flag": "🇵🇱",
      "english_name": "Polish"
  },
  {
      "original_name": "Português (Brasil)",
      "code": "pt-BR",
      "flag": "🇧🇷",
      "english_name": "Portuguese (Brazil)"
  },
  {
      "original_name": "Português (Portugal)",
      "code": "pt-PT",
      "flag": "🇵🇹",
      "english_name": "Portuguese (Portugal)"
  },
  {
      "original_name": "Română",
      "code": "ro-RO",
      "flag": "🇷🇴",
      "english_name": "Romanian"
  },
  {
      "original_name": "සිංහල",
      "code": "si-LK",
      "flag": "🇱🇰",
      "english_name": "Sinhala"
  },
  {
      "original_name": "Slovenčina",
      "code": "sk-SK",
      "flag": "🇸🇰",
      "english_name": "Slovak"
  },
  {
      "original_name": "Slovenščina",
      "code": "sl-SI",
      "flag": "🇸🇮",
      "english_name": "Slovenian"
  },
  {
      "original_name": "Srpski",
      "code": "sr-RS",
      "flag": "🇷🇸",
      "english_name": "Serbian"
  },
  {
      "original_name": "Suomi",
      "code": "fi-FI",
      "flag": "🇫🇮",
      "english_name": "Finnish"
  },
  {
      "original_name": "Svenska",
      "code": "sv-SE",
      "flag": "🇸🇪",
      "english_name": "Swedish"
  },
  {
      "original_name": "தமிழ்",
      "code": "ta-IN",
      "flag": "🇮🇳",
      "english_name": "Tamil"
  },
  {
      "original_name": "తెలుగు",
      "code": "te-IN",
      "flag": "🇮🇳",
      "english_name": "Telugu"
  },
  {
      "original_name": "Tiếng Việt",
      "code": "vi-VN",
      "flag": "🇻🇳",
      "english_name": "Vietnamese"
  },
  {
      "original_name": "Türkçe",
      "code": "tr-TR",
      "flag": "🇹🇷",
      "english_name": "Turkish"
  },
  {
      "original_name": "اردو",
      "code": "ur-PK",
      "flag": "🇵🇰",
      "english_name": "Urdu"
  },
  {
      "original_name": "Ελληνικά",
      "code": "el-GR",
      "flag": "🇬🇷",
      "english_name": "Greek"
  },
  {
      "original_name": "български",
      "code": "bg-BG",
      "flag": "🇧🇬",
      "english_name": "Bulgarian"
  },
  {
      "original_name": "Русский",
      "code": "ru-RU",
      "flag": "🇷🇺",
      "english_name": "Russian"
  },
  {
      "original_name": "Српски",
      "code": "sr-RS",
      "flag": "🇷🇸",
      "english_name": "Serbian"
  },
  {
      "original_name": "Українська",
      "code": "uk-UA",
      "flag": "🇺🇦",
      "english_name": "Ukrainian"
  },
  {
      "original_name": "עברית",
      "code": "he-IL",
      "flag": "🇮🇱",
      "english_name": "Hebrew"
  },
  {
      "original_name": "العربية",
      "code": "ar-IL",
      "flag": "🇮🇱",
      "english_name": "Arabic"
  },
  {
      "original_name": "فارسی",
      "code": "fa-IR",
      "flag": "🇮🇷",
      "english_name": "Persian"
  },
  {
      "original_name": "اردو",
      "code": "ur-PK",
      "flag": "🇵🇰",
      "english_name": "Urdu"
  },
  {
      "original_name": "हिन्दी",
      "code": "hi-IN",
      "flag": "🇮🇳",
      "english_name": "Hindi"
  },
  {
      "original_name": "ไทย",
      "code": "th-TH",
      "flag": "🇹🇭",
      "english_name": "Thai"
  },
  {
      "original_name": "한국어",
      "code": "ko-KR",
      "flag": "🇰🇷",
      "english_name": "Korean"
  },
  {
      "original_name": "中文 (中国)",
      "code": "zh-CN",
      "flag": "🇨🇳",
      "english_name": "Chinese (Simplified)"
  },
  {
      "original_name": "中文 (香港)",
      "code": "zh-HK",
      "flag": "🇭🇰",
      "english_name": "Chinese (Hong Kong)"
  },
  {
      "original_name": "中文 (台灣)",
      "code": "zh-TW",
      "flag": "🇹🇼",
      "english_name": "Chinese (Traditional)"
  },
  {
      "original_name": "日本語",
      "code": "ja-JP",
      "flag": "🇯🇵",
      "english_name": "Japanese"
  },
  {
      "original_name": "हिन्दी",
      "code": "hi-IN",
      "flag": "🇮🇳",
      "english_name": "Hindi"
  },
  {
      "original_name": "ภาษาไทย",
      "code": "th-TH",
      "flag": "🇹🇭",
      "english_name": "Thai"
  }
];

export default webSpeechLanguages;
