
import React from "react";
import { useDemoNotifications } from "@/hooks/useDemoNotifications";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Notifications = () => {
  const { notifications, markAllAsRead, unreadCount } = useDemoNotifications();

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <Button
            size="sm"
            variant="outline"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            Mark all as read
          </Button>
        </div>
        {notifications.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-foreground/60">No notifications.</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {notifications.map((n) => (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                key={n.id}
              >
                <Card className={`p-4 ${!n.isRead ? "bg-lilac/10" : ""}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className={`font-semibold ${!n.isRead ? "text-lilac" : ""}`}>
                        {n.title}
                      </h3>
                      <p className="text-sm text-foreground/80">{n.message}</p>
                    </div>
                    <span className="text-xs text-foreground/40">
                      {new Date(n.createdAt).toLocaleString()}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
