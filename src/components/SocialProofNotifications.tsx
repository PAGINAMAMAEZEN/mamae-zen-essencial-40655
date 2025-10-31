import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  city: string;
  state: string;
  action: string;
}

const notifications: Omit<Notification, "id">[] = [
  { name: "Larissa", city: "São Luís", state: "MA", action: "acabou de entrar no site e clicou no link do Instagram" },
  { name: "Karla Noemia", city: "Balsas", state: "MA", action: "garantiu agora seu acesso vitalício" },
  { name: "Maria Silva", city: "Imperatriz", state: "MA", action: "acabou de garantir o acesso mensal" },
  { name: "Ana Paula", city: "Timon", state: "MA", action: "visualizou os depoimentos" },
  { name: "Juliana Costa", city: "Caxias", state: "MA", action: "garantiu agora seu acesso vitalício" },
  { name: "Patricia Santos", city: "Codó", state: "MA", action: "acabou de entrar no site" },
  { name: "Fernanda Lima", city: "Bacabal", state: "MA", action: "clicou no link do Instagram" },
  { name: "Camila Rodrigues", city: "Pinheiro", state: "MA", action: "garantiu agora seu acesso vitalício" },
  { name: "Beatriz Alves", city: "Pedreiras", state: "MA", action: "acabou de garantir o acesso mensal" },
  { name: "Roberta Sousa", city: "Chapadinha", state: "MA", action: "visualizou os módulos" }
];

const SocialProofNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [userCity, setUserCity] = useState<string>("");

  useEffect(() => {
    // Get user's location from IP
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setUserCity(data.city);
        }
      })
      .catch(() => {
        // If geolocation fails, continue with default notifications
      });
  }, []);

  useEffect(() => {
    const showNotification = () => {
      // Prioritize notifications from user's city if available
      let availableNotifications = [...notifications];
      
      if (userCity) {
        const cityNotifications = notifications.filter(n => n.city === userCity);
        if (cityNotifications.length > 0) {
          availableNotifications = cityNotifications;
        }
      }

      const randomNotification = availableNotifications[
        Math.floor(Math.random() * availableNotifications.length)
      ];
      
      setCurrentNotification({
        ...randomNotification,
        id: Date.now()
      });
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Show new notification every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [userCity]);

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-in-left max-w-sm">
      <Card className="p-4 bg-background/95 backdrop-blur border-primary/20 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-bold text-sm">
              {currentNotification.name.charAt(0)}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">
              {currentNotification.name}
            </p>
            <p className="text-xs text-muted-foreground">
              de {currentNotification.city} - {currentNotification.state}
            </p>
            <p className="text-xs text-foreground mt-1">
              {currentNotification.action}
            </p>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SocialProofNotifications;
