
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2, Calendar, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface CheckoutItem {
  type: 'subscription' | 'product' | 'webinar';
  title: string;
  price: number;
  duration?: string;
  image?: string;
  description?: string;
  date?: string;
  time?: string;
  host?: {
    name: string;
    avatar: string;
  };
}

const Checkout = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState<CheckoutItem | null>(null);

  useEffect(() => {
    // If there's no item passed in location state, redirect to services
    if (!location.state?.item) {
      navigate('/services');
      return;
    }
    
    setCheckoutItem(location.state.item);
  }, [location, navigate]);

  // Handle payment submission
  const onSubmit = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to complete this purchase");
      navigate('/login');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast.success("Payment successfully processed!");
    
    // After 3 seconds of showing success, redirect
    setTimeout(() => {
      if (checkoutItem?.type === 'webinar') {
        navigate('/profile'); // For webinars, go to profile
      } else if (checkoutItem?.type === 'subscription') {
        navigate('/profile'); // For subscriptions, go to profile
      } else {
        navigate('/affiliates'); // For products, go to affiliates
      }
    }, 3000);
  };

  if (!checkoutItem) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div>Loading checkout information...</div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center"
          >
            <CheckCircle2 className="mx-auto h-20 w-20 text-green mb-4" />
            <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-foreground/70 mb-8">
              Your payment has been successfully processed. Thank you for your purchase!
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/profile')}>
                Go to Profile
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Return to Homepage
              </Button>
            </div>
          </motion.div>
        </div>
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
          className="max-w-md mx-auto"
        >
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-foreground/70">Complete your purchase</p>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Details of your purchase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium text-lg">{checkoutItem.title}</h3>
                  
                  {checkoutItem.image && (
                    <img 
                      src={checkoutItem.image} 
                      alt={checkoutItem.title} 
                      className="rounded-md w-full h-48 object-cover" 
                    />
                  )}
                  
                  {checkoutItem.description && (
                    <p className="text-sm text-foreground/70">{checkoutItem.description}</p>
                  )}
                  
                  {checkoutItem.type === 'webinar' && (
                    <div className="bg-foreground/5 p-3 rounded-md mt-2">
                      <div className="flex items-center text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-2 text-lilac" />
                        <span>{checkoutItem.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-lilac" />
                        <span>{checkoutItem.time}</span>
                      </div>
                      {checkoutItem.host && (
                        <div className="flex items-center mt-2">
                          <img 
                            src={checkoutItem.host.avatar} 
                            alt={checkoutItem.host.name} 
                            className="w-6 h-6 rounded-full mr-2"
                          />
                          <span className="text-sm">Host: {checkoutItem.host.name}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span>${checkoutItem.price.toFixed(2)}</span>
                </div>
                
                {checkoutItem.type === 'subscription' && checkoutItem.duration && (
                  <div className="text-sm text-foreground/70 text-center mt-2">
                    Billed {checkoutItem.duration.toLowerCase()}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
                <Button 
                  className="bg-green hover:bg-green/90 text-white"
                  disabled={isSubmitting}
                  onClick={onSubmit}
                >
                  {isSubmitting ? 'Processing...' : `Complete Purchase $${checkoutItem.price.toFixed(2)}`}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
