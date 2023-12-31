import ContactForm from "@/components/contact/ContactForm"
import Map from "@/components/contact/Map"
import Contacts from "@/components/contact/Contacts"
import json_ru from "@/locales/contact/ru.json"
import json_en from "@/locales/contact/en.json"

export default async ({ params: { locale } }: { params: { locale: string } }) => {
  const locales: any = {
    ru: [ json_ru ],
    en: [ json_en ]
  }

  return (
    <main className="contact">
      <div className="bg" />
      <Contacts json={locales[locale][0].contacts} />
      <Map />
      <ContactForm locale={locale} />
    </main>
  )
}