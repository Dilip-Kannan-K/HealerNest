
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Heart, Share2, Bookmark, Star, ChevronRight } from "lucide-react";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock articles data - in a real app, this would come from an API
  const articlesData = [
    {
      id: "1",
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      excerpt: "Learn how to recognize anxiety and discover effective techniques to manage it in your daily life.",
      content: `
        <p class="mb-4">Anxiety is a natural response to stress, but when it becomes overwhelming or excessive, it can interfere with daily activities and overall well-being. Understanding the signs and symptoms of anxiety is the first step toward managing it effectively.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Common Signs and Symptoms</h2>
        <p class="mb-4">Anxiety can manifest in various ways, both physically and emotionally. Physical symptoms may include rapid heartbeat, shortness of breath, sweating, trembling, fatigue, and sleep disturbances. Emotional and cognitive symptoms often involve persistent worry, restlessness, irritability, difficulty concentrating, and a sense of impending doom.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Types of Anxiety Disorders</h2>
        <p class="mb-4">Anxiety disorders come in several forms, each with distinct characteristics:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Generalized Anxiety Disorder (GAD):</strong> Characterized by persistent and excessive worry about various things.</li>
          <li class="mb-2"><strong>Panic Disorder:</strong> Involves recurring panic attacks that can occur suddenly and without warning.</li>
          <li class="mb-2"><strong>Social Anxiety Disorder:</strong> Features intense fear of social situations and being judged by others.</li>
          <li class="mb-2"><strong>Specific Phobias:</strong> Involves intense fear of specific objects or situations.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Effective Coping Strategies</h2>
        <p class="mb-4">While anxiety can be challenging, there are numerous strategies that can help manage symptoms:</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">1. Mindfulness and Meditation</h3>
        <p class="mb-4">Practicing mindfulness involves focusing on the present moment without judgment. Regular meditation can help reduce anxiety by calming the mind and promoting relaxation. Even just 5-10 minutes of daily practice can make a significant difference.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">2. Deep Breathing Exercises</h3>
        <p class="mb-4">Deep breathing activates the body's relaxation response. Try the 4-7-8 technique: Inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds. Repeat this several times when feeling anxious.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">3. Regular Physical Activity</h3>
        <p class="mb-4">Exercise releases endorphins, which are natural mood elevators. Aim for at least 30 minutes of moderate exercise most days of the week.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">4. Healthy Lifestyle Habits</h3>
        <p class="mb-4">Maintain a balanced diet, limit caffeine and alcohol, get adequate sleep, and stay hydrated. These basic lifestyle factors can significantly impact anxiety levels.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">5. Cognitive Behavioral Therapy (CBT) Techniques</h3>
        <p class="mb-4">CBT helps identify and challenge negative thought patterns. Try recognizing when you're catastrophizing or engaging in black-and-white thinking, then actively work to reframe those thoughts in a more balanced way.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">When to Seek Professional Help</h2>
        <p class="mb-4">If anxiety is interfering with your daily life, relationships, or work, it may be time to consult a mental health professional. Remember that seeking help is a sign of strength, not weakness. Treatment options may include therapy, medication, or a combination of approaches.</p>
        
        <p class="mb-4">With the right strategies and support, anxiety can be effectively managed, allowing you to lead a fulfilling life. Remember that managing anxiety is often a journey, not a destination, and being patient with yourself is an important part of the process.</p>
      `,
      category: "Mental Health",
      author: "Dr. Sarah Johnson",
      authorTitle: "Clinical Psychologist, Ph.D",
      authorBio: "Dr. Sarah Johnson is a licensed clinical psychologist with over 15 years of experience specializing in anxiety disorders and stress management. She maintains a private practice and serves as an adjunct professor at Pacific University.",
      date: "June 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      tags: ["anxiety", "mental health", "coping strategies", "stress management"]
    },
    {
      id: "2",
      title: "The Power of Mindfulness: Simple Practices for Everyday Life",
      excerpt: "Explore how mindfulness can transform your mental well-being with these practical exercises.",
      content: `
        <p class="mb-4">Mindfulness is the practice of paying attention to the present moment with openness, curiosity, and without judgment. This simple yet powerful approach can significantly impact your mental health and overall quality of life.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">What is Mindfulness?</h2>
        <p class="mb-4">At its core, mindfulness is about being fully present in the moment, aware of where we are and what we're doing, without being overly reactive or overwhelmed by what's happening around us. It's a quality that every human being naturally possesses, but it becomes more readily available when practiced daily.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Benefits of Mindfulness</h2>
        <p class="mb-4">Research has shown that incorporating mindfulness into your routine can provide numerous benefits:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Reduced stress and anxiety:</strong> Mindfulness helps break the cycle of rumination and worry.</li>
          <li class="mb-2"><strong>Improved emotional regulation:</strong> It creates space between stimuli and responses, allowing for more thoughtful reactions.</li>
          <li class="mb-2"><strong>Enhanced focus and concentration:</strong> Regular practice strengthens attention muscles.</li>
          <li class="mb-2"><strong>Better physical health:</strong> Studies show improvements in sleep quality, digestion, and immune function.</li>
          <li class="mb-2"><strong>Increased self-awareness:</strong> Mindfulness helps us understand our thoughts and emotions more clearly.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Simple Mindfulness Practices for Daily Life</h2>
        
        <h3 class="text-xl font-medium mb-2 mt-4">1. Mindful Breathing</h3>
        <p class="mb-4">Set aside 5 minutes to focus solely on your breath. Notice the sensation of air entering your nostrils, filling your lungs, and exiting. When your mind wanders (which is natural), gently bring your attention back to your breath without judgment.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">2. The 5-4-3-2-1 Grounding Exercise</h3>
        <p class="mb-4">When feeling overwhelmed, engage your senses by acknowledging:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>5 things you can see</li>
          <li>4 things you can touch/feel</li>
          <li>3 things you can hear</li>
          <li>2 things you can smell</li>
          <li>1 thing you can taste</li>
        </ul>
        
        <h3 class="text-xl font-medium mb-2 mt-4">3. Mindful Eating</h3>
        <p class="mb-4">For one meal a day, eat without distractions. Notice the colors, textures, smells, and flavors of your food. Chew slowly and savor each bite. This not only enhances the eating experience but also improves digestion and helps prevent overeating.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">4. Body Scan Meditation</h3>
        <p class="mb-4">Lie down comfortably and bring attention to different parts of your body, starting from your toes and moving up to your head. Notice sensations without trying to change them. This practice promotes body awareness and relaxation.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">5. Mindful Walking</h3>
        <p class="mb-4">Take a short walk and focus on the sensations in your feet and legs. Notice how your weight shifts with each step. Observe your surroundings without getting caught up in thoughts about them.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Incorporating Mindfulness into Your Routine</h2>
        <p class="mb-4">Start small—even just a few minutes daily can make a difference. Consider linking mindfulness practice to existing habits, such as brushing your teeth or waiting for coffee to brew. Consistency is more important than duration, especially when beginning.</p>
        
        <p class="mb-4">Remember that mindfulness is a skill that develops with practice. Be patient with yourself and approach each practice with curiosity rather than expectations. Over time, you'll find it becomes more natural to bring mindful awareness to different aspects of your life.</p>
      `,
      category: "Wellness",
      author: "Dr. Michael Chen",
      authorTitle: "Mindfulness Instructor, Ph.D",
      authorBio: "Dr. Michael Chen is a certified mindfulness instructor and researcher with a Ph.D in Clinical Psychology. He has trained with leading mindfulness experts and leads retreats and workshops internationally.",
      date: "July 3, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      tags: ["mindfulness", "meditation", "wellness", "mental health", "self-care"]
    },
    {
      id: "3",
      title: "Building Resilience: How to Bounce Back from Life's Challenges",
      excerpt: "Discover the key factors that help people recover from setbacks and emerge stronger than before.",
      content: `
        <p class="mb-4">Resilience—the ability to adapt and bounce back when things don't go as planned—is a skill that can be developed and strengthened. In today's rapidly changing world, resilience has become increasingly essential for maintaining our mental health and well-being.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">What is Resilience?</h2>
        <p class="mb-4">Resilience doesn't mean avoiding stress or tough situations; rather, it's about having the strength and skills to navigate challenges effectively. Resilient people still experience difficulty, grief, and loss, but they're able to recover more quickly and maintain a sense of perspective.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Key Components of Resilience</h2>
        
        <h3 class="text-xl font-medium mb-2 mt-4">1. Emotional Awareness and Regulation</h3>
        <p class="mb-4">Resilient individuals can identify and manage their emotions. They acknowledge negative feelings without being overwhelmed by them. Practicing emotional awareness involves recognizing your emotional responses and understanding their sources.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">2. Optimistic Thinking</h3>
        <p class="mb-4">This isn't about ignoring reality or maintaining blind positivity. Rather, it involves realistic optimism—acknowledging challenges while maintaining hope and focusing on aspects within your control. Resilient people look for opportunities within difficulties and maintain belief in their ability to overcome obstacles.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">3. Strong Support Network</h3>
        <p class="mb-4">Close relationships with family, friends, and community provide crucial support during challenging times. These connections offer practical assistance, emotional support, perspective, and a sense of belonging that buffers against stress.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">4. Problem-Solving Skills</h3>
        <p class="mb-4">Resilience involves taking decisive action rather than detaching completely or wishing problems would simply disappear. Developing strong problem-solving skills allows you to break down challenges into manageable pieces and take concrete steps toward solutions.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">5. Self-Efficacy</h3>
        <p class="mb-4">This refers to your belief in your ability to handle different situations. When you have confidence in your capabilities, you're more likely to take action and persist in the face of setbacks.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Building Your Resilience</h2>
        
        <h3 class="text-xl font-medium mb-2 mt-4">Practice Self-Compassion</h3>
        <p class="mb-4">Treat yourself with the same kindness and understanding you would offer a good friend. Self-criticism depletes resilience, while self-compassion enhances it. Remember that imperfection and struggle are part of the shared human experience.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">Develop Healthy Coping Mechanisms</h3>
        <p class="mb-4">Identify strategies that help you manage stress effectively. These might include physical activity, creative expression, mindfulness practices, time in nature, or connecting with loved ones. Different strategies work for different people and situations.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">Find Meaning in Adversity</h3>
        <p class="mb-4">Look for ways that challenging experiences have contributed to your growth, wisdom, or values. This doesn't mean pretending that difficult experiences are good, but rather acknowledging how they've shaped you in potentially valuable ways.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">Set Realistic Goals</h3>
        <p class="mb-4">Break larger challenges into smaller, achievable steps. This creates a sense of progress and prevents overwhelm. Celebrate small victories along the way to maintain momentum.</p>
        
        <h3 class="text-xl font-medium mb-2 mt-4">Nurture a Growth Mindset</h3>
        <p class="mb-4">View challenges as opportunities to learn and grow rather than as threats. Embrace the belief that abilities can be developed through dedication and hard work.</p>
        
        <h2 class="text-2xl font-semibold mb-3 mt-6">Resilience in Practice</h2>
        <p class="mb-4">Remember that building resilience is a journey, not a destination. It's normal to experience setbacks along the way. What matters is your willingness to continue developing these skills over time.</p>
        
        <p class="mb-4">Also, resilience doesn't mean handling everything alone. Knowing when to seek support—whether from friends, family, or professionals—is itself a form of resilience. If you're facing challenges that feel overwhelming, reaching out for help is a sign of strength, not weakness.</p>
        
        <p class="mb-4">By cultivating resilience, you'll be better equipped to navigate life's inevitable challenges while maintaining your well-being and continuing to grow.</p>
      `,
      category: "Personal Growth",
      author: "Dr. Emily Williams",
      authorTitle: "Resilience Researcher, Ph.D",
      authorBio: "Dr. Emily Williams specializes in trauma recovery and resilience building. With over 15 years of experience as both a researcher and therapist, she helps individuals and organizations develop strategies to thrive amidst adversity.",
      date: "August 21, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tags: ["resilience", "personal growth", "coping skills", "adversity", "mental strength"]
    }
  ];

  useEffect(() => {
    // Simulate fetching article data
    setLoading(true);
    setTimeout(() => {
      const foundArticle = articlesData.find(a => a.id === id);
      setArticle(foundArticle || null);
      
      // Get related articles (different from current)
      const related = articlesData
        .filter(a => a.id !== id)
        .slice(0, 2);
      setRelatedArticles(related);
      
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-lilac/30 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-lilac/30 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-lilac/30 rounded"></div>
                <div className="h-4 bg-lilac/30 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-6 md:px-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/articles" className="primary-button inline-flex items-center">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/articles" className="inline-flex items-center text-foreground/70 hover:text-green mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-green/90 text-white text-xs font-medium rounded-full">
                {article.category}
              </span>
              <div className="ml-4 flex items-center text-foreground/60 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="ml-4 flex items-center text-foreground/60 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex items-center mb-8">
              <img 
                src={article.image} 
                alt={article.author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold">{article.author}</p>
                <p className="text-sm text-foreground/70">{article.authorTitle}</p>
              </div>
            </div>

            <div className="relative mb-8 rounded-xl overflow-hidden h-96">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/30"></div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-lilac/10 text-foreground/70 text-xs font-medium rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-4">
              <button className="p-2 rounded-full bg-lilac/10 hover:bg-lilac/20 transition-colors">
                <Share2 className="w-5 h-5 text-lilac" />
              </button>
              <button className="p-2 rounded-full bg-lilac/10 hover:bg-lilac/20 transition-colors">
                <Bookmark className="w-5 h-5 text-lilac" />
              </button>
              <button className="p-2 rounded-full bg-lilac/10 hover:bg-lilac/20 transition-colors">
                <Heart className="w-5 h-5 text-lilac" />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="mb-16">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
          </div>

          {/* Author Bio */}
          <div className="healer-card p-8 mb-16">
            <h3 className="text-xl font-semibold mb-4">About the Author</h3>
            <div className="flex items-start">
              <img 
                src={article.image} 
                alt={article.author}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-lg">{article.author}</p>
                <p className="text-sm text-foreground/70 mb-3">{article.authorTitle}</p>
                <p>{article.authorBio}</p>
              </div>
            </div>
          </div>

          {/* E-Magazine Promotion */}
          <div className="bg-gradient-to-r from-lilac/30 to-green/30 rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-3">Subscribe to Our Premium E-Magazine</h3>
                <p className="mb-4">Get exclusive access to in-depth articles, expert interviews, and premium content not available on our website.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2" />
                    <span>Monthly curated articles from top mental health professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2" />
                    <span>Downloadable worksheets and resources</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2" />
                    <span>Ad-free reading experience</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <button className="primary-button">
                    Subscribe Now
                  </button>
                  <span className="text-xl font-bold self-center">$4.99/month</span>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/50 rounded-lg blur-lg"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1585828922344-85c9daa264b0?auto=format&fit=crop&w=400&q=80" 
                    alt="E-Magazine Preview" 
                    className="relative z-10 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relArticle) => (
                <div 
                  key={relArticle.id}
                  className="healer-card overflow-hidden hover-lift"
                >
                  <div className="relative h-48">
                    <img 
                      src={relArticle.image} 
                      alt={relArticle.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 m-4">
                      <span className="px-3 py-1 bg-green/90 text-white text-xs font-medium rounded-full">
                        {relArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{relArticle.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-2">{relArticle.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-foreground/60 mb-4">
                      <span>{relArticle.author}</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {relArticle.readTime}
                      </div>
                    </div>
                    <Link 
                      to={`/articles/${relArticle.id}`}
                      className="inline-flex items-center text-green font-medium hover:underline"
                    >
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticleDetail;
