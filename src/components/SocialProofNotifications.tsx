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
  { name: "Larissa", city: "São Luís", state: "MA", action: "gerou o Pix para o acesso vitalício" },
  { name: "Larissa", city: "São Luís", state: "MA", action: "confirmou o pagamento via Pix" },
  { name: "Larissa", city: "São Luís", state: "MA", action: "garantiu agora seu acesso vitalício" },
  { name: "Karla Noemia", city: "Balsas", state: "MA", action: "gerou o Pix para o acesso vitalício" },
  { name: "Karla Noemia", city: "Balsas", state: "MA", action: "pagamento confirmado via Pix" },
  { name: "Karla Noemia", city: "Balsas", state: "MA", action: "garantiu agora seu acesso vitalício" },
  { name: "Maria Silva", city: "Imperatriz", state: "MA", action: "gerou o Pix para o plano mensal" },
  { name: "Maria Silva", city: "Imperatriz", state: "MA", action: "pagamento confirmado" },
  { name: "Maria Silva", city: "Imperatriz", state: "MA", action: "garantiu o acesso mensal" },
  { name: "Ana Paula", city: "Timon", state: "MA", action: "gerou o Pix para o acesso vitalício" },
  { name: "Ana Paula", city: "Timon", state: "MA", action: "confirmou o pagamento" },
  { name: "Ana Paula", city: "Timon", state: "MA", action: "garantiu seu acesso vitalício" },
  { name: "Juliana Costa", city: "Caxias", state: "MA", action: "gerou o Pix para o plano mensal" },
  { name: "Juliana Costa", city: "Caxias", state: "MA", action: "pagamento via Pix confirmado" },
  { name: "Juliana Costa", city: "Caxias", state: "MA", action: "garantiu o acesso mensal" },
  { name: "Patricia Santos", city: "Codó", state: "MA", action: "gerou o Pix para o acesso vitalício" },
  { name: "Patricia Santos", city: "Codó", state: "MA", action: "pagamento confirmado" },
  { name: "Patricia Santos", city: "Codó", state: "MA", action: "garantiu seu acesso vitalício" },
  { name: "Fernanda Lima", city: "Bacabal", state: "MA", action: "gerou o Pix para o plano mensal" },
  { name: "Fernanda Lima", city: "Bacabal", state: "MA", action: "pagamento confirmado via Pix" },
  { name: "Fernanda Lima", city: "Bacabal", state: "MA", action: "garantiu o acesso mensal" },
  { name: "Camila Rodrigues", city: "Pinheiro", state: "MA", action: "gerou o Pix para o acesso vitalício" },
  { name: "Camila Rodrigues", city: "Pinheiro", state: "MA", action: "confirmou o pagamento" },
  { name: "Camila Rodrigues", city: "Pinheiro", state: "MA", action: "garantiu seu acesso vitalício" },
  { name: "Beatriz Alves", city: "Pedreiras", state: "MA", action: "gerou o Pix para o plano mensal" },
  { name: "Beatriz Alves", city: "Pedreiras", state: "MA", action: "pagamento via Pix confirmado" },
  { name: "Beatriz Alves", city: "Pedreiras", state: "MA", action: "garantiu o acesso mensal" },
  { name: "Roberta Sousa", city: "Chapadinha", state: "MA", action: "gerou o Pix para o acesso vitalício" },
  { name: "Roberta Sousa", city: "Chapadinha", state: "MA", action: "pagamento confirmado" },
  { name: "Roberta Sousa", city: "Chapadinha", state: "MA", action: "garantiu seu acesso vitalício" }
];

const SocialProofNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [userCity, setUserCity] = useState<string>("");
  const [userState, setUserState] = useState<string>("");
  const [notificationCount, setNotificationCount] = useState(0);

  // Cidades vizinhas de cada cidade do Maranhão
  const nearbyCities: { [key: string]: string[] } = {
    "São Luís": ["São José de Ribamar", "Paço do Lumiar", "Raposa", "Alcântara"],
    "Imperatriz": ["João Lisboa", "Açailândia", "Davinópolis", "Senador La Rocque"],
    "Caxias": ["Timon", "Matões", "Coelho Neto", "São João do Sóter"],
    "Timon": ["Caxias", "Matões do Norte", "São Francisco do Maranhão"],
    "Codó": ["Peritoró", "Timbiras", "Coroatá", "Chapadinha"],
    "Bacabal": ["Pedreiras", "Vitorino Freire", "Arari", "São Luís Gonzaga"],
    "Balsas": ["Riachão", "Tasso Fragoso", "Fortaleza dos Nogueiras"],
    "Pinheiro": ["Santa Helena", "Bequimão", "Cajari", "Turilândia"],
    "Pedreiras": ["Bacabal", "Trizidela do Vale", "Lima Campos"],
    "Chapadinha": ["Buriti", "Brejo", "Anapurus", "Mata Roma"]
  };

  useEffect(() => {
    // Get user's location from IP
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setUserCity(data.city);
          setUserState(data.region_code || "MA");
        }
      })
      .catch(() => {
        // If geolocation fails, continue with default notifications
      });
  }, []);

  useEffect(() => {
    const showNotification = () => {
      let availableNotifications = [...notifications];
      
      // Primeiros 3 pop-ups: cidade do usuário
      if (notificationCount < 3 && userCity) {
        const cityNotifications = notifications.filter(n => n.city === userCity);
        if (cityNotifications.length > 0) {
          availableNotifications = cityNotifications;
        }
      } 
      // Próximos 3 pop-ups: cidades vizinhas
      else if (notificationCount >= 3 && notificationCount < 6 && userCity && nearbyCities[userCity]) {
        const nearbyList = nearbyCities[userCity];
        const nearbyNotifications = notifications.filter(n => 
          nearbyList.includes(n.city) || n.state === userState
        );
        if (nearbyNotifications.length > 0) {
          availableNotifications = nearbyNotifications;
        }
      }
      // Depois: todas as notificações

      const randomNotification = availableNotifications[
        Math.floor(Math.random() * availableNotifications.length)
      ];
      
      setCurrentNotification({
        ...randomNotification,
        id: Date.now()
      });
      setIsVisible(true);
      setNotificationCount(prev => prev + 1);

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
  }, [userCity, userState, notificationCount]);

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
