import { CompanyProcess } from '@/components/contact/CompanyProcess';
import { FormContact } from '@/components/contact/FormContact';

export const ContactPage = () => {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 md:px-28 lg:px-[2vw] xl:gap-[2vw] xl:py-[2vh]">
      <FormContact />

      <CompanyProcess />
    </div>
  );
};
