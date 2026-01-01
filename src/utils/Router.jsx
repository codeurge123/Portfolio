import React, { useState, useEffect, createContext, useContext } from 'react';

// Create\e a context for my router - yash this is pretty understandable
const RouterContext = createContext();

export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath }}>
      {React.Children.map(children, child => {
        if (child && child.props.path === currentPath) {
          return child;
        }
        return null;
      })}
    </RouterContext.Provider>
  );
}

export function Route({ path, children }) {
  return <>{children}</>;
}

export function Link({ to, children, className }) {
  return (
    <a href={`#${to}`} className={className}>
      {children}
    </a>
  );
}

// Custom hook to use router context
export function useRouter() {
  return useContext(RouterContext);
}