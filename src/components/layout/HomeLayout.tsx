
interface HomeLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const HomeLayout = ({ children, title, subtitle }: HomeLayoutProps) => {
  return (
    <div 
      className="flex-1 flex flex-col items-center max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8"
    >
      {title && (
        <h1 
          className="text-3xl font-semibold tracking-tight mb-2 text-center"
        >
          {title}
        </h1>
      )}
      
      {subtitle && (
        <p 
          className="text-muted-foreground text-lg text-center mb-8"
        >
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
};

export default HomeLayout;
