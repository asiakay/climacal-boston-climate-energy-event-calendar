import { useMemo } from 'react';
import { events, ClimateEvent } from '@/lib/events';
import { EventCard } from '@/components/EventCard';
import { format } from 'date-fns';
import { Leaf } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
export function HomePage() {
  const groupedEvents = useMemo(() => {
    const sorted = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
    return sorted.reduce((acc, event) => {
      const dateKey = format(event.date, 'yyyy-MM-dd');
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {} as Record<string, ClimateEvent[]>);
  }, []);
  return (
    <div className="bg-background min-h-screen">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <header className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center bg-brand/10 text-brand p-3 rounded-full mb-4">
              <Leaf className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              ClimaCal
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A curated calendar of climate tech, energy, and sustainability events in the Boston area.
            </p>
          </header>
          <main>
            {Object.entries(groupedEvents).length > 0 ? (
              <div className="space-y-12">
                {Object.entries(groupedEvents).map(([dateKey, dayEvents]) => (
                  <section key={dateKey} className="animate-slide-up" style={{ animationDelay: `${Object.keys(groupedEvents).indexOf(dateKey) * 100}ms` }}>
                    <h2 className="text-2xl font-semibold text-foreground mb-6 pb-2 border-b">
                      {format(new Date(dateKey), "EEEE, MMMM d")}
                    </h2>
                    <div className="space-y-6">
                      {dayEvents.map((event, index) => (
                        <EventCard key={`${event.title}-${index}`} event={event} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border rounded-lg bg-muted/50">
                <h3 className="text-xl font-semibold text-foreground">No Upcoming Events</h3>
                <p className="text-muted-foreground mt-2">Please check back later for new events.</p>
              </div>
            )}
          </main>
          <footer className="text-center mt-24 text-muted-foreground text-sm">
            <p>Built with ❤️ at Cloudflare</p>
          </footer>
        </div>
      </div>
    </div>
  );
}