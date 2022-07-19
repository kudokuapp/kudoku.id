import EngagementL from './EngagementL';
import EngagementR from './EngagementR';

export default function Engagement() {
  return (
    <section className="lg:mx-6 grid md:grid-cols-3 grid-rows-1 md:gap-4 gap-8 h-max mb-12">
      <EngagementL />
      <EngagementR />
    </section>
  );
}
