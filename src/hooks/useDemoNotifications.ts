
import { useState } from "react";

export type DemoNotification = {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

const demoNotifications: DemoNotification[] = [
  {
    id: "1",
    title: "Session Approved",
    message: "Your session request with Dr. Green is approved.",
    isRead: false,
    createdAt: "2025-04-21T11:04:03Z",
  },
  {
    id: "2",
    title: "Webinar Reminder",
    message: "The Mindfulness webinar starts in 1 hour.",
    isRead: false,
    createdAt: "2025-04-20T14:10:00Z",
  },
  {
    id: "3",
    title: "Payment Success",
    message: "Your payment for Meditation Cushion was successful!",
    isRead: true,
    createdAt: "2025-04-19T10:00:00Z",
  }
];

export const useDemoNotifications = () => {
  // For demo, just use local state; replace with API in real app.
  const [notifications, setNotifications] = useState<DemoNotification[]>(demoNotifications);

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((n) => ({ ...n, isRead: true }))
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return { notifications, markAllAsRead, unreadCount, setNotifications };
};
