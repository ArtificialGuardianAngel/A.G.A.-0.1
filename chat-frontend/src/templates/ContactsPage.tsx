const ContactsPage = () => {
  return (
    <div>
      <h3 className="p-[30px_0] text-center text-[18px] font-bold uppercase mb-[20px] max-[480px]:text-[14px] max-[480px]:p-[15px_0_25px]">
        Contact
      </h3>

      <div className="rounded-[10px] bg-white/[0.03] shadow-lg p-[30px] text-white text-center">
        Email{' '}
        <a href="mailto:aga@nuah.org" className="text-accent-green underline">
          aga@nuah.org
        </a>
      </div>
    </div>
  );
};

export default ContactsPage;
