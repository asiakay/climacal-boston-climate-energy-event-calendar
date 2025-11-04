import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClimateEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
interface EventCardProps {
  event: ClimateEvent;
}
export function EventCard({ event }: EventCardProps) {
  const timeString = format(event.date, "p");
  const isAllDay = timeString === "12:00 AM";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
    >
      <Card className="group transition-all duration-300 ease-in-out overflow-hidden">
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 flex-grow">
              <CardHeader className="p-0 mb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-brand transition-colors duration-300">
                    {event.title}
                  </CardTitle>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-brand transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{event.venue || event.address || event.city || "Location TBD"}</span>
                </div>
                {event.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="capitalize font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </div>
            <div className={cn(
              "flex-shrink-0 text-center p-6 border-l border-border/50",
              isAllDay ? "bg-muted/30" : "bg-brand/10"
            )}>
              <div className={cn(
                "text-lg font-bold",
                isAllDay ? "text-muted-foreground" : "text-brand"
              )}>
                {isAllDay ? "ALL DAY" : timeString}
              </div>
            </div>
          </div>
        </a>
      </Card>
    </motion.div>
  );
}