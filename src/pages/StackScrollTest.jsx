import StackScroll2 from "../components/StackScroll2";

const StackScrollTest = () => {
  // Sample images for testing
  const testImages = [
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1616628188540-a2e4e7a0c4f9?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="py-20">
        <h1 className="text-center font-display text-5xl font-bold text-warm-900 mb-8">
          Stack Scroll Test
        </h1>
        <p className="text-center text-warm-600 mb-16">
          Scroll down to see the stacking effect
        </p>

        <StackScroll2 images={testImages} projectTitle="Test Project" />
      </div>
    </div>
  );
};

export default StackScrollTest;
