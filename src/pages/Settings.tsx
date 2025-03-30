
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Save, User, UserRound, Calendar } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface UserFormData {
  name: string;
  email: string;
  gender: string;
  age: number | string;
  avatar: string;
}

const Settings = () => {
  const { user, isLoading, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<UserFormData>();

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("gender", user.gender || "");
      setValue("age", user.age || "");
      setValue("avatar", user.avatar || "");
    }
  }, [user, setValue]);

  const onSubmit = async (data: UserFormData) => {
    if (!user) return;
    
    setIsSubmitting(true);
    try {
      // Convert age to number if it's a valid number
      const formattedData = {
        ...data,
        age: data.age ? Number(data.age) : undefined
      };
      
      await updateUserProfile(formattedData);
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been successfully updated.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h1 className="text-2xl font-bold mb-4">Please log in to view your settings</h1>
        <Button asChild>
          <a href="/login">Go to Login</a>
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
          className="max-w-3xl mx-auto"
        >
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-foreground/70">Update your profile information and preferences</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex flex-col items-center space-y-3">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-green text-foreground text-lg">
                          {user.name.split(" ").map(name => name[0]).join("").toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm text-center">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-foreground/70">Member since {user.memberSince}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            {...register("name", { required: "Name is required" })}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                          )}
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            disabled
                            {...register("email")}
                          />
                          <p className="text-xs text-foreground/70">Email cannot be changed</p>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Select
                            onValueChange={(value) => setValue("gender", value)}
                            defaultValue={user.gender || ""}
                          >
                            <SelectTrigger id="gender">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Female">Female</SelectItem>
                              <SelectItem value="Non-binary">Non-binary</SelectItem>
                              <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            type="number"
                            placeholder="Enter your age"
                            {...register("age", {
                              min: { value: 13, message: "Age must be at least 13" },
                              max: { value: 120, message: "Age must be less than 120" },
                              valueAsNumber: true
                            })}
                          />
                          {errors.age && (
                            <p className="text-sm text-destructive">{errors.age.message}</p>
                          )}
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="avatar">Avatar URL</Label>
                          <Input
                            id="avatar"
                            placeholder="Enter avatar URL"
                            {...register("avatar")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-3">
                  <Button variant="outline" type="button" onClick={() => reset()}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-green hover:bg-green/90 text-white" disabled={isSubmitting}>
                    <Save className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
