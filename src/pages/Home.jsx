import Hero from './home/Hero';
import Updates from './home/Updates';
import QuickNav from './home/QuickNav';
import About from './home/About';
import TimelineSection from './home/TimelineSection';
import Education from './home/Education';
import Research from './home/Research';
import WritingTeaser from './home/WritingTeaser';
import Projects from './home/Projects';
import ContactTeaser from './home/ContactTeaser';
import { experience, experienceCollage, volunteering } from '../data/content';

export default function Home() {
  return (
    <>
      <Hero />
      <Updates />
      <QuickNav />
      <About />
      <TimelineSection
        id="experience"
        title="Experience"
        items={experience}
        alt
        collage={experienceCollage}
      />
      <Education />
      <Research />
      <WritingTeaser />
      <Projects />
      <TimelineSection
        id="volunteering"
        title="Volunteering"
        items={volunteering.items}
        alt
        collage={volunteering.collage}
        statBanner={volunteering.stat}
      />
      <ContactTeaser />
    </>
  );
}
