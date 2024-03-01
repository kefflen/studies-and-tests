
import { useTranslations } from "next-intl"
import Image from "next/image";

export default function Home({ params: {
  lang
}}: { params: { lang: string } }) {
  const t = useTranslations()
  console.log(lang)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t(`index.title`)}
    </main>
  );
}
