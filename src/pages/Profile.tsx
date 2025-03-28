
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Calendar, 
  Clock, 
  ShoppingBag, 
  ChevronRight, 
  Star,
  CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock order history data
const mockOrders = [
  {
    id: "ord-001",
    date: "Oct 12, 2023",
    product: "Meditation Cushion",
    price: "$59.99",
    status: "Delivered"
  },
  {
    id: "ord-002",
    date: "Sep 28, 2023",
    product: "Aromatherapy Kit",
    price: "$39.99",
    status: "Delivered"
  },
  {
    id: "ord-003",
    date: "Sep 05, 2023",
    product: "Healing Crystals Set",
    price: "$79.99",
    status: "Delivered"
  }
];

const Profile = () => {
  const { user, isLoading } = useAuth();
  const [orders, setOrders] = useState(mockOrders);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="animate-pulse-gentle text-lilac">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Please log in to view your profile</h1>
        <Button asChild>
          <Link to="/login">Go to Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">My Profile</h1>
            <p className="text-foreground/70">Manage your account and view your healing journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Information */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Personal Information</CardTitle>
                  <CardDescription>Your account details</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-green text-foreground text-lg">
                        {user.name.split(" ").map(name => name[0]).join("").toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-medium">{user.name}</h3>
                      <p className="text-sm text-foreground/70">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center text-foreground/70">
                        <User className="w-4 h-4 mr-2" />
                        Member since
                      </span>
                      <span>January 2023</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center text-foreground/70">
                        <Calendar className="w-4 h-4 mr-2" />
                        Last session
                      </span>
                      <span>Oct 15, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/profile/settings">
                      Edit Profile
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Subscription Information */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Subscription</CardTitle>
                      <CardDescription>Your current healing plan</CardDescription>
                    </div>
                    <div className="px-2 py-1 bg-green/20 text-green rounded-full text-xs font-medium">
                      {user.subscription?.status || "Inactive"}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  {user.subscription ? (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium">{user.subscription.plan}</h3>
                        <div className="flex items-center text-sm text-foreground/70">
                          <CreditCard className="w-4 h-4 mr-2" />
                          <span>Next billing: {user.subscription.nextBilling}</span>
                        </div>
                      </div>
                      
                      {user.subscription.therapist && (
                        <div className="pt-4 border-t border-border">
                          <h4 className="text-sm font-medium mb-3">Your Therapist</h4>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={user.subscription.therapist.avatar} alt={user.subscription.therapist.name} />
                              <AvatarFallback className="bg-lilac/20">
                                {user.subscription.therapist.name.split(" ").map(name => name[0]).join("").toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.subscription.therapist.name}</p>
                              <p className="text-sm text-foreground/70">{user.subscription.therapist.specialty}</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button size="sm" asChild>
                              <Link to="/session">Schedule Session</Link>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <h3 className="text-lg font-medium mb-2">No Active Subscription</h3>
                      <p className="text-foreground/70 mb-4">Explore our healing plans to find the perfect match for your journey</p>
                      <Button asChild>
                        <Link to="/services">View Plans</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Order History */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-xl">Order History</CardTitle>
                      <CardDescription>Your previous purchases</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/affiliates">Shop More</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  {orders.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Product</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.product}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell>
                              <span className="px-2 py-1 bg-green/20 text-green rounded-full text-xs">
                                {order.status}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-6">
                      <h3 className="text-lg font-medium mb-2">No Orders Yet</h3>
                      <p className="text-foreground/70 mb-4">Explore our affiliate products for your healing journey</p>
                      <Button asChild>
                        <Link to="/affiliates">Shop Now</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
