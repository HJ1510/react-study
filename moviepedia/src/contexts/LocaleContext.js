import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export function LocaleProvider({ defaultValue = "Ko", children }) {
  const [locale, setLocale] = useState(defaultValue);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("LocaleProvider를 확인 하세요");
  }

  return context.locale;
}

export function useSetLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("LocaleProvider를 확인 하세요");
  }

  return context.setLocale;
}
