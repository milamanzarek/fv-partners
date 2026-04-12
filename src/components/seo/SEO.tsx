import { useEffect } from 'react';

export const SEO = ({ title, description }: { title: string, description: string }) => {
  useEffect(() => {
    document.title = `${title} | FV Partners`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }
  }, [title, description]);
  
  return null;
};
