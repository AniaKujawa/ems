import Image from 'next/image';
import { Header } from "@ems/common-ui";

const ContactPage = () => {
  return (
    <div>
      <Header>Contact</Header>
      <Image src="/nachos.png" width={600} height={400} alt="Nachos" />
    </div>
  )
}

export default ContactPage;