import {
  Hero,
  BusSearch,
  ViewTicket,
  ContactUs,
  AboutUs,
  PlacesTour,
} from "../components/sections";

function HomePage() {
  return (
    <div>
      <Hero />
      <BusSearch />
      <ViewTicket />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default HomePage;
